import { useEffect }     from "react";
import { useLocation }   from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home             from "./pages/Home.jsx";
import ThankYou         from "./pages/ThankYou.jsx";
import "./App.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-Q50H3RRTGQ", {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return (
    <Routes>
      <Route path="/"        element={<Home />} />
      <Route path="/thank-you" element={<ThankYou />} />
 
    </Routes>

  );
}

export default App;