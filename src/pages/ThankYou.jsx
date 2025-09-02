import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "G-Q50H3RRTGQ",
        event_category: "engagement",
        event_label: "Thank You Page Viewed",
        value: 1,
      });
    }
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thank-you">
      <h1>Thank You!</h1>
      <p>Your request has been received. We’ll be in touch shortly.</p>
      <p>
        Redirecting to home in <strong>5</strong> seconds…
      </p>
    </div>
  );
}
