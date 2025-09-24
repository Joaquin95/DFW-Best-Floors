import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
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
    <main>
      <section className="hero-section">
        <h2>DFW Best Floor Installations</h2>
        <p>
          Your Premier Flooring Experts—Quality Craftsmanship & Lifetime
          Warranty
        </p>

        <EstimateForm
          onSuccess={() => {
            handleGAEvent("estimate_form_submit", "Estimate Form Submitted");
            navigate("/thank-you");
          }}
        />
      </section>

      <section className="services-overview">
        <h2>Our Flooring Solutions</h2>
        <p>
          At DFW Best Floor Installations LLC, we provide a wide range of
          premium flooring solutions designed to enhance the beauty and
          functionality of your home or business. Our expert team delivers
          exceptional craftsmanship, ensuring every project meets your unique
          needs and style.
        </p>
        <ul className="services-list">
          <li>
            <strong>Hardwood & Engineered Wood</strong>: Timeless elegance meets
            modern durability. Choose from a variety of hardwood species or
            engineered wood options, crafted to enhance any space with warmth
            and sophistication.
          </li>
          <li>
            <strong>Laminate Flooring</strong>: Affordable, versatile, and
            stylish, our laminate flooring mimics the look of natural wood or
            stone while offering exceptional durability and easy maintenance.
          </li>
          <li>
            <strong>Luxury Vinyl Plank (LVP) & Tile</strong>: Waterproof,
            durable, and visually stunning, LVP and luxury vinyl tile provide
            endless design possibilities, ideal for high-traffic areas or
            moisture-prone spaces.
          </li>
          <li>
            <strong>Eco-Friendly Bamboo & Cork</strong>: Sustainable and
            stylish, our bamboo and cork flooring options offer eco-conscious
            solutions without compromising on beauty or resilience.
          </li>
          <li>
            <strong>Floor Refinishing & Repair</strong>: Restore your existing
            floors to their original glory with our expert refinishing and
            repair services, delivering a flawless finish.
          </li>
        </ul>
      </section>

      <section className="benefits-section">
        <h2>Why Choose DFW Best Floor Installations LLC?</h2>
        <p>
          We are committed to delivering unparalleled quality, service, and
          value. Here’s why DFW Best Floor Installations LLC is the trusted
          choice for flooring in the Dallas–Fort Worth area:
        </p>
        <ul className="benefits-list">
          <li>
            <strong>Licensed & Insured Flooring Professionals</strong>: Our
            certified team ensures every project meets the highest industry
            standards with safety and reliability.
          </li>
          <li>
            <strong>Lifetime Installation Warranty</strong>: We stand behind our
            work with a lifetime warranty, giving you confidence in your
            investment.
          </li>
          <li>
            <strong>Flexible Financing & Payment Options</strong>: Tailored
            financing plans make it easy to achieve the floors of your dreams
            within your budget.
          </li>
          <li>
            <strong>Free On-Site Estimates & 3D Layout Previews</strong>:
            Visualize your project with complimentary consultations and advanced
            3D layout previews.
          </li>
          <li>
            <strong>Premium Materials & Eco-Friendly Options</strong>: We source
            only the highest-quality materials, including sustainable options,
            for stunning and environmentally responsible results.
          </li>
        </ul>
      </section>

      <section id="testimonials" className="testimonials-section">
        <h2>Client Testimonials</h2>
        <p>
          Hear from our satisfied clients who have transformed their spaces with
          DFW Best Floor Installations LLC:
        </p>
        <blockquote>
          “DFW Best Floor Installations transformed our home with beautiful
          hardwood floors. The team was punctual, professional, and meticulous,
          delivering a flawless finish. We couldn’t be happier!” — Sarah, Plano,
          TX
        </blockquote>
        <blockquote>
          “The entire process, from the initial estimate to the final
          installation, was seamless. Their attention to detail and thorough
          cleanup exceeded our expectations. Highly recommend!” — Mark,
          Arlington, TX
        </blockquote>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
  <p>Ready to elevate your space with stunning, durable flooring? Contact DFW Best Floor Installations LLC today to schedule your free on-site estimate.</p>
  <p>
    <strong>Phone:</strong> <a href="tel:2142873750" onClick={() => handleGAEvent("phone_click", "Phone Number Click")}>(214) 287-3750</a>
  </p>
  <p>
    <strong>Email:</strong> <a href="mailto:DfwBestFloorInstallations@gmail.com" onClick={() => handleGAEvent("email_click", "Email Click")}>DfwBestFloorInstallations@gmail.com</a>
  </p>
  <p>
    <strong>Social Media:</strong> <a href="https://www.facebook.com/profile.php?id=61579254073277" target="_blank" rel="noopener noreferrer" onClick={() => handleGAEvent("social_click", "Facebook Profile Link")}>Connect with us on Facebook</a>
  </p>
  <p>
    <strong>Location:</strong> Proudly serving Dallas–Fort Worth and surrounding areas
  </p>
</section>
    </main>
  );
}
