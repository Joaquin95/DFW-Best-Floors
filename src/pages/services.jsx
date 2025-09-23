import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EstimateForm from "./EstimateForm";
import HardwoodInstallation from "../pages/HardwoodInstallation";
import LaminateFlooring from "../pages/LaminateFlooring";
import TileFlooring from "../pages/TileFlooring";
import LuxuryVinylPlank from "../pages/LuxuryVinylPlank";
import FloorRemoval from "./FloorRemoval";
import BaseboardTrimInstallation from "./BaseboardTrimInstallation";
import WaterDamageRepair from "./WaterDamageRepair";

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
    image: "/images/Vinyl-Display.png",
    path: "/luxury-vinyl-plank",
    component: <LuxuryVinylPlank/>,
  },
  {
    title: "Tile Flooring",
    image: "/images/Tile-Flooring2.png",
    path: "/tile-flooring",
    component: <TileFlooring/>,
  },
  {
    title: "Floor Removal & Disposal",
    image: "/images/Floor-Removal-Display.jpg",
    path: "/floor-removal",
    component: <FloorRemoval/>,
  },
  {
    title: "Baseboard & Trim Installation",
    image: "/images/Baseb-Display.png",
    path: "/baseboard-installation",
    component: <BaseboardTrimInstallation/>,
  },
  {
    title: "Water Damage Repair",
    image: "/images/Water-Dam-Display.jpg",
    path: "/water-damage-repair",
    component: <WaterDamageRepair/>,
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