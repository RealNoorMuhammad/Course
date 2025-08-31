import React, { useState } from "react";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSignUp = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const redirectToDex = () => {
    window.location.href =
      "https://dexscreener.com/solana/h8mdxqstymmxutdgwsz923hdx3t7gpdnzwad8n2nascf";
  };

  return (
    <>
      <div
        className="container-fluid text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            {/* Quick Links */}
            <div className="col-lg-3 col-md-6 text-center text-md-start">
              <h4 className="text-white mb-3">Quick Links</h4>
              <a className="btn btn-link text-light d-block" href="/">About Us</a>
              <a className="btn btn-link text-light d-block" href="/Certificate-Generator">Certificate-Generator</a>
              <a className="btn btn-link text-light d-block" href="/Privacy-Policy">Privacy Policy</a>
              <a className="btn btn-link text-light d-block" href="/Meme-Generator">Meme Generator</a>
              <a className="btn btn-link text-light d-block" href="/roast-guru">Roast Guru</a>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6 text-center text-md-start">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-2" />
                Somewhere on the Blockchain 🌐
              </p>
          
              <div className="d-flex justify-content-center justify-content-md-start pt-2 gap-2">
                {/* X (Twitter) */}
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://x.com/i/communities/1960864340224995669"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="img/twitter.png" 
                    alt="Dexscreener"
                    style={{ width: "42px", height: "42px" }}
                  />
                </a>

                {/* Dexscreener */}
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://dexscreener.com/solana/h8mdxqstymmxutdgwsz923hdx3t7gpdnzwad8n2nascf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="img/dexscreener.webp" 
                    alt="Dexscreener"
                    style={{ width: "37px", height: "37px" }}
                  />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-8 text-center text-md-start">
              <h4 className="text-white mb-3">Newsletter</h4>
              <p>
                Subscribe now — we promise only 97% spam, 3% wisdom.  
                You’ll get *exclusive* tips like “How to sell air on the blockchain.”
              </p>
              <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="container border-top border-secondary pt-3">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              © <a className="border-bottom text-light" href="/">COURSE™</a> — All Rights Preserved.  
              Designed by <span className="fw-bold">Visionary Dropouts</span>.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <small>🚀 Warning: Side effects may include sudden urge to buy yachts.</small>
            </div>
          </div>
        </div>
        <br />
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.8)", zIndex: 9999 }}
        >
          <div className="bg-dark text-light p-5 rounded shadow-lg text-center" style={{ maxWidth: "500px" }}>
            <h2 className="mb-3 color">🚨 Warning! 🚨</h2>
            <p className="mb-4">
              Are you sure you want to sign up?  
              <br /> This might lead to unsolicited life advice, fake mentorship,  
              and an uncontrollable desire to yell “Buy my $COURSE!”
            </p>
            <button className="btn btn-danger me-2" onClick={closePopup}>
              Nah, I like being broke
            </button>
            <button className="btn btn-success" onClick={redirectToDex}>
              💸 Yes, I want to be rich!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
