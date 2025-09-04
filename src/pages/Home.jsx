import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar       from "../components/Navbar.jsx";
import Footer       from "../components/Footer.jsx";
import EstimateForm from "./EstimateForm.jsx";

import "../index.css";

export default function Home() {
  const navigate = useNavigate();


  const handleGAEvent = (eventName, label) => {
    if (window.gtag) {
      window.gtag("event", eventName, {
        event_category: "engagement",
        event_label: label,
        value: 1,
      });
    }
  };

  return (
    <>
      <Navbar />

      <main>
        {/* Hero & Estimate Form */}
        <section className="hero-section">
          <h1>DFW Best Floor Installations</h1>
          <p>Your Premier Flooring Experts—Quality Craftsmanship & Lifetime Warranty</p>

          <EstimateForm
            onSuccess={() => {
              handleGAEvent("estimate_form_submit", "Estimate Form Submitted");
              navigate("/thank-you");
            }}
          />
        </section>

        <section className="services-overview">
          <h2>Our Flooring Solutions</h2>
          <ul className="services-list">
            <li>Hardwood & Engineered Wood</li>
            <li>Laminate Flooring</li>
            <li>Luxury Vinyl Plank (LVP) & Tile</li>
            <li>Eco-Friendly Bamboo & Cork</li>
            <li>Floor Refinishing & Repair</li>
          </ul>
        </section>


        <section className="benefits-section">
          <h2>Why Choose DFW Best Floor Installations?</h2>
          <ul className="benefits-list">
            <li>Licensed & Insured Flooring Professionals</li>
            <li>Lifetime Installation Warranty</li>
            <li>Flexible Financing & Payment Options</li>
            <li>Free On-Site Estimates & 3D Layout Previews</li>
            <li>Premium Materials & Eco-Friendly Options</li>
          </ul>
        </section>


        <section id="testimonials" className="testimonials-section">
          <h2>Client Testimonials</h2>
          <blockquote>
            “We replaced our old floors with stunning hardwood. The crew was on time,
            professional, and the finish is flawless. Highly recommend DFW Best Floor
            Installations!” — Sarah, Plano, TX
          </blockquote>
          <blockquote>
            “From estimate to install, the process was seamless. Their attention to detail
            and cleanup was beyond my expectations.” — Mark, Arlington, TX
          </blockquote>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>

          <p>
            📞{" "}
            <a
              href="tel:2145551234"
              onClick={() => handleGAEvent("phone_click", "Phone Number Click")}
            >
              (214) 287-3750
            </a>
          </p>

          <p>
            📧{" "}
            <a
              href="mailto:info@dfwbestfloorinstallations.com"
              onClick={() => handleGAEvent("email_click", "Email Click")}
            >
              info@dfwbestfloorinstallations.com
            </a>
          </p>

          <p>
            🔗{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61579254073277"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleGAEvent("social_click", "Facebook Profile Link")
              }
            >
              Connect with us on Facebook
            </a>
          </p>

          <p>
            <strong>Location:</strong> Serving Dallas–Fort Worth and Surrounding Areas
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}