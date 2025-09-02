// test-sheets.js

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { google } from "googleapis";

async function testSheets() {
  const {
    GOOGLE_SHEETS_ID,
    GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
  } = process.env;

  // 1) Sanity checks
  console.log("SHEET_ID:", GOOGLE_SHEETS_ID);
  console.log("CLIENT_EMAIL:", GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL);
  console.log("KEY loaded:", Boolean(GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY));

  if (
    !GOOGLE_SHEETS_ID ||
    !GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL ||
    !GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  ) {
    throw new Error("Missing one of: SHEETS_ID, CLIENT_EMAIL or PRIVATE_KEY");
  }

  // 2) Fix newlines in the private key
  const privateKey = GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n");

  // 3) Initialize GoogleAuth with explicit credentials
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  // 4) Acquire a client, then build the Sheets API
  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  // 5) Read header row A1:F1
  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId: GOOGLE_SHEETS_ID,
    range: "A1:F1",
  });
  console.log("✅ Headers:", data.values?.[0] ?? []);

  // 6) Append a sample row under columns A–F
  await sheets.spreadsheets.values.append({
    spreadsheetId: GOOGLE_SHEETS_ID,
    range: "A:F",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          "Jane Doe",
          "jane@example.com",
          "555-6789",
          "456 Oak St",
          "Hello Floors!",
          new Date().toISOString(),
        ],
      ],
    },
  });
  console.log("✅ Sample row appended!");
}

testSheets().catch((err) => {
  console.error("❌ Sheets error:", err.message || err);
  process.exit(1);
});
