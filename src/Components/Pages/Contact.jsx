import React, { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";

export default function CertificateGenerator() {
  const [name, setName] = useState(""); 
  const [date, setDate] = useState("");
  const certificateRef = useRef(null);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setDate(formattedDate);
  }, []);

  const downloadCertificate = () => {
    if (!name.trim()) return; 
    html2canvas(certificateRef.current, { scale: 3 }).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${name}_COURSE_Certificate.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  // Handle input change with max 10 chars
  const handleNameChange = (e) => {
    const value = e.target.value.slice(0, 10); // restrict 10 chars
    setName(value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6 centeritall">
        🎓 $COURSE Graduation Certificate
      </h1>

      {/* Input field */}
      <div className="centeritall">
        <input
          type="text"
          placeholder="Enter your name (max 10 letters)"
          value={name}
          onChange={handleNameChange}
          maxLength={10}
          className="border px-4 py-2 rounded mb-6 w-80 text-center shadow"
        />
      </div>
      <br />

      {/* Certificate preview */}
      <div
        ref={certificateRef}
        className="relative shadow-2xl overflow-hidden w-full max-w-5xl aspect-[2000/1414]"
        style={{
          backgroundImage: `url("/img/diploma.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Center Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-[3vw] md:text-4xl font-bold text-yellow-700 mb-4 uppercase fonta">
            Certificate of Graduation
          </h2>

          <p className="text-[1.5vw] md:text-xl italic mb-2">
            This is proudly presented to
          </p>

          <h1
            className="text-[4vw] md:text-6xl font-bold mt-2 mb-4 text-gray-800"
            style={{ fontFamily: "cursive" }}
          >
            {name || " "}
          </h1>

          <p className="text-[1.5vw] md:text-xl mb-2">
            for the successful completion of
          </p>

          <h2 className="text-[2.5vw] md:text-4xl font-semibold text-yellow-700 mb-4">
            $COURSE University
          </h2>
        </div>

        {/* Bottom Row (Signature - Seal - Date) */}
        <div className="absolute bottom-[6%] inset-x-0 flex items-center justify-between px-[10%]">
          {/* Date */}
          <div className="text-center moveup">
            <p className="text-[1.5vw] md:text-xl font-semibold">{date}</p>
          </div>

          {/* Seal */}
          <div className="flex justify-center centeritall">
            <img
              src="/img/seal.png"
              alt="Official Seal"
              className="w-[12vw] md:w-40 opacity-90 sealimg"
            />
          </div>
        </div>
      </div>

      <br />
      {/* Download Button */}
      <div className="flex justify-center w-full centeritall">
        <button
          onClick={downloadCertificate}
          disabled={!name.trim()}
          className={`download-btn ${!name.trim() ? "disabled" : ""}`}
        >
          {name.trim() ? "📥 Download Certificate" : "Enter Name First"}
        </button>
      </div>
    </div>
  );
}
