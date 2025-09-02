import { useEffect }     from "react";
import { useLocation }   from "react-router-dom";
import "./App.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-Q50H3RRTGQ", {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return (
    <div className="App">
      {/* Your routes or UI go here */}
      <h1>Welcome to DFW Best Floor Installations</h1>
      {/* … */}
    </div>
  );
}

export default App;