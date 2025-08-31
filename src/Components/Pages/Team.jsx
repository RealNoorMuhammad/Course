import React from "react";

export default function Team() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container text-center">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Instructors
            </h6>
            <h1 className="mb-5">Expert Instructors</h1>
          </div>

          <div className="row justify-content-center g-4">
            {/* Andru Tete */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item bg-light p-3 rounded shadow-sm hover-shadow">
                <div className="overflow-hidden mb-3">
                  <img className="img-fluid " src="/img/andr.jpg" alt="Andru Tete" />
                </div>
                <div className="text-center p-2">
                  <h5 className="mb-0">Andru Tete</h5>
                  <small className="text-muted">Sell Dreams Fast</small>
                </div>
              </div>
            </div>

            {/* FaZe Bankrupt */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item bg-light p-3 rounded shadow-sm hover-shadow">
                <div className="overflow-hidden mb-3">
                  <img className="img-fluid " src="/img/fake.jpg" alt="FaZe Bankrupt" />
                </div>
                <div className="text-center p-2">
                  <h5 className="mb-0">FaZe Bankrupt</h5>
                  <small className="text-muted">Lose Money Fast</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra CSS for hover */}
      <style>{`
        .hover-shadow:hover {
          transform: translateY(-10px);
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </>
  );
}
