import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EstimateForm from "./EstimateForm";
import HardwoodInstallation from "../pages/HardwoodInstallation";
import LaminateFlooring from "../pages/LaminateFlooring";
import TileFlooring from "../pages/TileFlooring";

const services = [
  "Hardwood Floor Installation",
  "Laminate Flooring",
  "Luxury Vinyl Plank (LVP)",
  "Tile Flooring",
  "Floor Removal & Disposal",
  "Subfloor Repair",
  "Baseboard & Trim Installation",
  "Custom Stair Treads",
  "Water Damage Repair",
  "Commercial Flooring Solutions",
];

export default function Services() {
  return (
    <main>
      <section className="services-hero">
        <h1>Flooring Installation Services in Dallas-Fort Worth and Surrounding Areas</h1>
        <p>
          <strong>
            We specialize in hardwood, laminate, tile, and luxury vinyl plank installations.
            Whether you're remodeling your home or upgrading a commercial space, our team
            delivers precision craftsmanship and fast turnaround. Serving Dallas, Mesquite,
            Garland, and all surrounding areas, we’re proud to be your go-to flooring experts.
          </strong>
        </p>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service}</h2>
            <p>
              {service.includes("Installation")
                ? "Professional installation with attention to detail and durability."
                : service.includes("Repair")
                ? "Restore your floors to like-new condition with expert repairs."
                : service.includes("Removal")
                ? "Safe removal and disposal of old flooring materials."
                : "Tailored flooring solutions to match your style and budget."}
            </p>
          </div>
        ))}
      </section>

      <HardwoodInstallation />
      <LaminateFlooring />
      <TileFlooring />
      <EstimateForm />
    </main>
  );
}