import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Slide.css";

export default function Slide() {
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <div className="carousel-inner course top">
          {/* First Slide */}
          <div className="carousel-item active">



            <div className="d-flex align-items-center justify-content-center text-center w-100 vh-100 bg-gradient-primary">
              <div className="p-4">
               <span className="push-down">
  <h6 className="text-warning text-uppercase mb-2 animated slideInDown fw-bold small-text">
                  Escape Wage-Cuckery
                </h6>
                <h1 className="display-4 text-white fw-bold animated slideInDown responsive-title">
                  Buy $COURSE → Get RICH
                </h1>
                <p className="fs-5 text-light mb-3 pb-1 responsive-text">
                  Stop clocking in. Stop being broke.  
                  $COURSE is your ticket out of 9–5 slavery.  
                  Apes together RICH 
                </p>

                {/* Contract Address */}
                <div className="ca-box text-center mb-4">
                  <p className="text-light small fw-bold m-0">
                    CA: <span className="text-warning">DYSc9LPQmWgRyJGZGXu8JMBDWBYV2tACsRKPkd2qtRz5</span>
                  </p>
                </div>

               </span>
              










                {/* Social Links */}
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Link to="https://x.com/i/communities/1960864340224995669" className="animated slideInLeft">
                    <img
                      src="img/twitter.png"
                      alt="Twitter"
                      className="social-logo"
                    />
                  </Link>
                  <Link to="https://dexscreener.com/solana/h8mdxqstymmxutdgwsz923hdx3t7gpdnzwad8n2nascf" className="animated slideInRight">
                    <img
                      src="img/dexscreener.webp"
                      alt="DexScreener"
                      className="social-logo"
                    />
                  </Link>
                </div>
              </div>

              
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <div className="d-flex align-items-center justify-content-center text-center w-100 vh-100 bg-gradient-dark">
            
            
              <div className="p-4">

                <span className="push-down">
    <h6 className="text-info text-uppercase mb-2 animated slideInDown fw-bold small-text">
                  Community of Degens
                </h6>
                <h1 className="display-4 text-white fw-bold animated slideInDown responsive-title">
                  $COURSE Prints Money
                </h1>
                <p className="fs-5 text-light mb-3 pb-1 responsive-text">
                  Forget “utility”. Forget “roadmaps”.  
                  $COURSE is pure degen energy 
                  Buy → Hold → Laugh at the normies 
                </p>

                {/* Contract Address */}
                <div className="ca-box text-center mb-4">
                  <p className="text-light small fw-bold m-0">
                    CA: <span className="text-warning">DYSc9LPQmWgRyJGZGXu8JMBDWBYV2tACsRKPkd2qtRz5</span>
                  </p>
                </div>

                </span>
            

                {/* Social Links */}
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Link to="https://x.com/i/communities/1960864340224995669" className="animated slideInLeft">
                    <img
                      src="img/twitter.png"
                      alt="Twitter"
                      className="social-logo"
                    />
                  </Link>
                  <Link to="https://dexscreener.com/solana/h8mdxqstymmxutdgwsz923hdx3t7gpdnzwad8n2nascf" className="animated slideInRight">
                    <img
                      src="img/dexscreener.webp"
                      alt="DexScreener"
                      className="social-logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
<div>

  
</div>
        {/* Carousel Controls */}
       
      </div>
    </>
  );
}
