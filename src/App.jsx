import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import EstimateForm from "./pages/EstimateForm.jsx";
import Services from "./pages/services.jsx";
import HardwoodInstallation from "./pages/HardwoodInstallation.jsx";
import LaminateFlooring from "./pages/LaminateFlooring.jsx";
import TileFlooring from "./pages/TileFlooring.jsx";
import "leaflet/dist/leaflet.css";
import ServiceArea from "./pages/ServiceArea.jsx";
import LuxuryVinylPlank from "./pages/LuxuryVinylPlank.jsx";
import FloorRemoval from "./pages/FloorRemoval.jsx";
import BaseboardTrimInstallation from "./pages/BaseboardTrimInstallation.jsx";
import WaterDamageRepair from "./pages/WaterDamageRepair.jsx";
import CommercialFlooring from "./pages/CommercialFlooring.jsx";

import "./App.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-Q50H3RRTGQ", {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/estimate" element={<EstimateForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-area" element={<ServiceArea />} />
        <Route path="/hardwood-installation" element={<HardwoodInstallation />} />
        <Route path="/laminate-flooring" element={<LaminateFlooring />} />
        <Route path="/luxury-vinyl-plank" element={<LuxuryVinylPlank />} />
        <Route path="/tile-flooring" element={<TileFlooring />} />
        <Route path="/floor-removal" element={<FloorRemoval />} />
        <Route path="/baseboard-installation" element={<BaseboardTrimInstallation />} />
        <Route path="/water-damage-repair" element={<WaterDamageRepair />} />
        <Route path="/commercial-flooring" element={<CommercialFlooring />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
