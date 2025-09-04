import React from "react";
import "../index.css";

export default function ContactBar({ handleGAEvent }) {
  return (
    <div className="navbar-top-bar">
      <div className="top-info">
        <span className="contact">
          <strong>
            {/* Phone */}
            <p>
              📞 <strong>Phone:</strong>{" "}
              <a
                href="tel:2142873750"
                onClick={() =>
                  handleGAEvent("phone_click", "Phone Number Click")
                }
              >
                (214) 287-3750
              </a>
            </p>

            <br />

            {/* Email */}
            <p>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:dfwbestfloorinstallations.com"
                onClick={() =>
                  handleGAEvent("email_click", "Email Click")
                }
              >
                dfwbestfloorinstallations@gmail.com
              </a>
            </p>

            <br />

            {/* Facebook */}
            <p>
              <a
                href="https://www.facebook.com/profile.php?id=61579254073277"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag("event", "click", {
                      event_category: "social",
                      event_label: "Facebook Profile Link",
                      value: 1,
                    });
                  }
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <img
                  src="/images/icons/facebook.svg"
                  alt="Facebook"
                  width="20"
                  height="20"
                  style={{ verticalAlign: "middle" }}
                />
                Connect with Us on Facebook
              </a>
            </p>

            <br />

            {/* Service Info */}
            <h3>
              24/7 Service | Dallas–Fort Worth Metroplex <br />
              Flexible Payment Options: Cash, Check, Credit Cards, Venmo, Zelle
            </h3>
          </strong>
        </span>
      </div>
    </div>
  );
}