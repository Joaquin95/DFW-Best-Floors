import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EstimateForm from "./EstimateForm";
import HardwoodInstallation from "../pages/HardwoodInstallation";
import LaminateFlooring from "../pages/LaminateFlooring";
import TileFlooring from "../pages/TileFlooring";

const services = [
  {
    title: "Hardwood Floor Installation",
    image: "/images/hardwood-display.jpg",
    path: "/hardwood-installation",
    component: <HardwoodInstallation />,
  },
  {
    title: "Laminate Flooring",
    image: "/images/Laminate-display.webp",
    path: "/laminate-flooring",
    component: <LaminateFlooring/>,
  },
  {
    title: "Luxury Vinyl Plank (LVP)",
    image: "/images/lvp.jpg",
    path: "/luxury-vinyl-plank",
    description: "Waterproof, scratch-resistant, and modern—LVP is perfect for busy households and high-traffic areas.",
  },
  {
    title: "Tile Flooring",
    image: "/images/Tile-Flooring2.png",
    path: "/tile-flooring",
    component: <TileFlooring/>,
  },
  {
    title: "Floor Removal & Disposal",
    image: "/images/removal.jpg",
    path: "/floor-removal",
    description: "We handle the mess—efficient removal and eco-friendly disposal of old flooring materials with minimal disruption.",
  },
  {
    title: "Subfloor Repair",
    image: "/images/subfloor.jpg",
    path: "/subfloor-repair",
    description: "Solid foundations matter—our subfloor repair ensures your new floors are level, quiet, and built to last.",
  },
  {
    title: "Baseboard & Trim Installation",
    image: "/images/baseboard.jpg",
    path: "/baseboard-installation",
    description: "Finish strong—custom baseboards and trim add polish and precision to every flooring project.",
  },
  {
    title: "Water Damage Repair",
    image: "/images/water-damage.jpg",
    path: "/water-damage-repair",
    description: "Restore and protect—fast response and expert repair for floors damaged by leaks, floods, or humidity.",
  },
  {
    title: "Commercial Flooring Solutions",
    image: "/images/commercial.jpg",
    path: "/commercial-flooring",
    description: "Built for business—durable, stylish flooring options tailored to retail, office, and industrial environments.",
  },
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
          <Link to={service.path} key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2>{service.title}</h2>
            <p>
              {service.description}
            </p>
          </Link>
        ))}
      </section>
      <EstimateForm />
    </main>
  );
}