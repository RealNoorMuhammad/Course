import React from "react";

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {/* Left Image */}
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute imagepdf"
                  src="/img/new.png"
                  alt="about $COURSE"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About $COURSE
              </h6>
              <h1 className="mb-4">Tired of Getting Scammed by Gurus?</h1>
              <p className="mb-4">
                Sick of endless PDFs, overpriced courses, and “get rich quick” schemes that leave your wallet empty? $COURSE is your *one true chance* to finally make some money—by… buying a course (yes, really).  
              </p>
              <p className="mb-4">
                We don’t waste time with utility, roadmaps, or fake promises. This is pure meme coin chaos, internet hustle, and unapologetic clown energy. If you’ve ever wanted to dodge the 9-to-5 grind and laugh while doing it, welcome to class.  
              </p>

      

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
