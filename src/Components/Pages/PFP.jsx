import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import templ from "./templ.png"; // your uploaded template
import "./PFP.css";

function PFP() {
  const [image, setImage] = useState(null);
  const previewRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Download with template + overlay
  const handleDownload = async () => {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current, {
        useCORS: true,
        backgroundColor: null,
      });
      const link = document.createElement("a");
      link.download = "pfp.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div className="pfp-container">
      <header className="pfp-header">
        <h1>$COURSE PFP Generator</h1>
        <p>Upload your picture and create your official profile</p>
      </header>

      <main className="pfp-main">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="pfp-upload"
        />

        {/* Preview Area with Template + Uploaded Image */}
        <div ref={previewRef} className="pfp-preview">
          <img src={templ} alt="template" className="pfp-template" />
          {image && <img src={image} alt="uploaded" className="pfp-overlay" />}
        </div>

        {image && (
          <button onClick={handleDownload} className="pfp-btn">
            🎓 Download My PFP
          </button>
        )}
      </main>

    </div>
  );
}

export default PFP;
