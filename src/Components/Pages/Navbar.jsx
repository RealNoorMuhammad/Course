import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "5WC8WaoZevAtneaWEfMMvbkJjv3USBMobKv9EV4kpump"
    );
    setShowToast(true);

    // Hide toast after 3s
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow sticky-top p-0 px-3">
        {/* Mobile Join Button */}
        <button
          className="btn btn-danger d-lg-none me-2"
          onClick={() => setShowModal(true)}
        >
          Join
        </button>

        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center px-lg-4">
          <h2 className="m-0 fw-bold text-danger">$ COURSE</h2>
        </Link>

        {/* Toggler (menu button) */}
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink exact="true" to="/" className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/Meme-Generator" className="nav-item nav-link">
             Meme Generator
            </NavLink>
            <NavLink to="/exam" className="nav-item nav-link">
             Exam
            </NavLink>

            {/* Dropdown */}
            <div className="nav-item dropdown">
              <NavLink
                to="/pages"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </NavLink>
              <div className="dropdown-menu fade-down m-0">
                
                <NavLink to="/courses" className="dropdown-item">
               Courses
                </NavLink>
                <NavLink to="/team" className="dropdown-item">
                  Our Team
                </NavLink>
                <NavLink to="/testimonial" className="dropdown-item">
                  Testimonial
                </NavLink>
                <NavLink to="/feedback" className="dropdown-item">
                  Feedback
                </NavLink>
              </div>
            </div>

    <NavLink to="/roast-guru" className="nav-item nav-link">
        Roast Guru
            </NavLink>
            <NavLink to="/Certificate-generator" className="nav-item nav-link">
          Certificate
            </NavLink>

            {/* External Links */}
            <a
              href="https://dexscreener.com/solana/h8mdxqstymmxutdgwsz923hdx3t7gpdnzwad8n2nascf"
              target="_blank"
              rel="noreferrer"
              className="nav-item nav-link"
            >
              Dexscreener
            </a>
            <a
              href="https://x.com/i/communities/1960864340224995669"
              target="_blank"
              rel="noreferrer"
              className="nav-item nav-link"
            >
              Twitter
            </a>
          </div>

          {/* Desktop Join Button */}
          <button
            className="btn btn-danger py-3 px-4 d-none d-lg-block ms-3"
            onClick={() => setShowModal(true)}
          >
            Join Now 🚀
          </button>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content rounded-4 shadow-lg border-0">
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title">⚡ Ready to Level Up?</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p className="fw-bold mb-3">Follow These 3 Steps to Win:</p>
                <ol>
                  <li>
                    <strong>Copy the Contract Address</strong> <br />
                    <code className="bg-light p-2 d-block mt-2 rounded">
                      5WC8WaoZevAtneaWEfMMvbkJjv3USBMobKv9EV4kpump
                    </code>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {/* Copy Button */}
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={handleCopy}
                      >
                        📋 Copy
                      </button>
                      {/* Twitter Button */}
                      <a
                        href="https://x.com/i/communities/1960864340224995669"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-info text-white"
                      >
                        Twitter
                      </a>
                      {/* Dexscreener Button */}
                      <a
                        href="https://dexscreener.com/solana/h8mdxqstymmxutdgwsz923hdx3t7gpdnzwad8n2nascf"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-success"
                      >
                        Dexscreener
                      </a>
                    </div>
                  </li>
                  <li className="mt-3">
                    <strong>Buy 40 SOL of $COURSE</strong> <br />
                    Secure your seat at the top. This is your tuition.
                  </li>
                  <li className="mt-3">
                    <strong>Enter the Circle</strong> <br />
                    Lifetime access to mentorship, alpha, and the mindset that
                    prints.
                  </li>
                </ol>
                <div className="alert alert-warning mt-3">
                  <strong>BONUS:</strong> Three select buyers will be chosen for
                  a <em>1-on-1 mentorship</em> with our TOP GURUS! 🧙‍♂️
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success w-100"
                  onClick={() => setShowModal(false)}
                >
                  I'm In! Let's Get Rich 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="custom-toast">
          ✅ Contract address copied!
        </div>
      )}
    </>
  );
}
