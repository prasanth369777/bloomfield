import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Uses the options object for better control
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Adds the smooth scrolling animation
    });
  }, [pathname]);

  return null;
}