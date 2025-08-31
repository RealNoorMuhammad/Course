import React, { useEffect } from "react";
import "./Spinner.css"; // we'll add custom styles

export default function Spinner() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const spinner = document.getElementById("spinner");
      if (spinner) {
        spinner.classList.remove("show");
      }
    }, 1000); // auto hide after 1s (adjust as needed)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="spinner"
      className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex flex-column align-items-center justify-content-center cool-loader"
    >
      {/* Funny loading text */}
      <h2 className="funny-text mb-4">Summoning Gurus...</h2>

      {/* Custom pulsing dots */}
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
