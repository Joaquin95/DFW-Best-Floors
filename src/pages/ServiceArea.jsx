import React from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import EstimateForm from "./EstimateForm";

const serviceAreas = [
  "Dallas",
  "Fort Worth",
  "Mesquite",
  "Garland",
  "Irving",
  "Plano",
  "Frisco",
  "Arlington",
  "McKinney",
  "Denton",
  "Carrollton",
  "Lewisville",
  "Flower Mound",
  "Coppell",
  "The Colony",
  "Allen",
  "Wylie",
  "Sachse",
  "Rowlett",
  "Rockwall",
  "Mansfield",
  "Grand Prairie",
  "Euless",
  "Bedford",
  "Hurst",
  "Grapevine",
  "Southlake",
  "Richardson",
];

export default function ServiceArea() {
  const navigate = useNavigate();

  return (
    <main className="page-content">
      <section className="hero service-area-hero">
        <div className="content-wrapper">
          <h1>Our Flooring Service Area</h1>
          <p>
            We proudly serve homeowners and businesses across the Dallas–Fort Worth metroplex.
            Whether you're upgrading to hardwood, installing tile, or replacing old flooring,
            our expert team is nearby and ready to deliver precision craftsmanship and fast turnaround.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="service-areas-grid">
        <div className="content-wrapper">
          <h2 className="section-title">Areas We Cover</h2>
          <div className="grid">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="area-card">
                <h3>{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="map-form-section">
        <div className="content-wrapper map-form-container">
          <div className="form-container">
            <EstimateForm onSuccess={() => navigate("/thank-you")} />
          </div>

          {/* Interactive Map */}
          <div className="map-container">
            <MapContainer
              center={[32.7767, -96.797]}
              zoom={11}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
            </MapContainer>
          </div>
        </div>
      </section>
    </main>
  );
}