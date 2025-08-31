import React from "react";

export default function Testimonial() {
  return (
    <div className='back'>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-red px-3 textcolor">
              Testimonials
            </h6>
            <h1 className="mb-5">What Our Students *Really* Say</h1>
          </div>

          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner position-relative">
              {/* Funny Testimonial 1 */}
              <div className="carousel-item active text-center">
                <div
                  className="card border-0  p-4 mx-auto"
                  style={{ maxWidth: "600px" }}
                >
                 
                  <h5 className="mb-0">Devoted Disciple</h5>
                  <p className="text-muted">Full-time Believer</p>
                  <p className="text-warning mb-2">⭐⭐⭐⭐⭐</p>
                  <p className="mb-0">
                    “I was broke before I found Top G-RU. Now I’m still broke,
                    but I have cool Instagram photos in front of rental cars.”
                  </p>
                </div>
              </div>

              {/* Funny Testimonial 2 */}
              <div className="carousel-item text-center">
                <div
                  className="card border-0  p-4 mx-auto"
                  style={{ maxWidth: "600px" }}
                >
                 
                  <h5 className="mb-0">Serial Course Buyer</h5>
                  <p className="text-muted">Professional Student</p>
                  <p className="text-warning mb-2">⭐⭐⭐⭐</p>
                  <p className="mb-0">
                    “After buying all 17 courses, I can confidently say I’m now
                    an expert at… buying courses.”
                  </p>
                </div>
              </div>

              {/* Funny Testimonial 3 */}
              <div className="carousel-item text-center">
                <div
                  className="card border-0  p-4 mx-auto"
                  style={{ maxWidth: "600px" }}
                >
                  
                  <h5 className="mb-0">Crypto Enthusiast</h5>
                  <p className="text-muted">Future Billionaire</p>
                  <p className="text-warning mb-2">⭐⭐⭐</p>
                  <p className="mb-0">
                    “I enrolled to learn trading. Now I trade screenshots of my
                    losses as NFTs.”
                  </p>
                </div>
              </div>

              {/* Funny Testimonial 4 */}
              <div className="carousel-item text-center">
                <div
                  className="card border-0  p-4 mx-auto"
                  style={{ maxWidth: "600px" }}
                >
                 
                  <h5 className="mb-0">Motivated Hustler</h5>
                  <p className="text-muted">Dropshipping Legend</p>
                  <p className="text-warning mb-2">⭐⭐⭐⭐⭐</p>
                  <p className="mb-0">
                    “The course told me to wake up at 5am. I did. Still broke,
                    but now I’m tired too.”
                  </p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>

            {/* Dots */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
