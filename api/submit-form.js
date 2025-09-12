import { getSheetsClient, GOOGLE_SHEETS_ID } from "../lib/googleSheets.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { name, email, phone, address = "", message = "" } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", {
      timeZone: "America/Chicago",
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const sheets = await getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_ID,
      range: "Sheet1!A:F",
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email, phone, address, message || "", formattedTime]],
      },
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Sheets append error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
