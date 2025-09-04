import React from "react";
import "../index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} DFW Best Floor Installations LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}