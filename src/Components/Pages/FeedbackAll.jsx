import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function FeedbackAll() {
  const [value, setValue] = useState(2);
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    setUserName(name);
    setShowPopup(true);
    e.target.reset();
    setValue(2);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <>
      <Navbar />
      <Header name="Feedbacks" />

      {/* Feedback Form */}
      <div className="container mt-4">
        <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.3s">
          <h1 className="text-center mb-4">Give your Feedback</h1>
          <form
            onSubmit={handleSubmit}
            className="col-12 col-md-6 mb-4 p-4 border rounded shadow-sm bg-light"
          >
            <div className="form-floating mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                id="floatingName"
                placeholder="John Doe"
                required
              />
              <label htmlFor="floatingName">Name</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                name="comment"
                className="form-control"
                id="floatingComment"
                placeholder="Enter Your Feedback"
                style={{ height: "100px" }}
                required
              ></textarea>
              <label htmlFor="floatingComment">Comment</label>
            </div>

            <Typography component="legend">Rating</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => setValue(newValue)}
            />
            <input type="hidden" name="rating" value={value} />

            <button type="submit" className="btn btn-primary mt-3 w-100">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />

      {/* Funny Modal Popup */}
      {showPopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.8)", zIndex: 9999 }}
        >
          <div
            className="bg-dark text-light p-5 rounded shadow-lg text-center"
            style={{ maxWidth: "500px" }}
          >
            <h2 className="mb-3">🎉 Feedback Saved! 🎉</h2>
            <p className="mb-4">
              Hey <strong>{userName}</strong>, we saved your opinion… but personally, we don’t want it.<br />
              Just buy <strong>$COURSE</strong> and maybe you'll learn something.
            </p>
            <button
              className="btn btn-success"
              onClick={() => {
                setShowPopup(false);
                window.location.href = "https://dexscreener.com/solana/h8mdxqstymmxutdgwsz923hdx3t7gpdnzwad8n2nascf";
              }}
            >
              Ok, I’ll Buy It
            </button>
          </div>
        </div>
      )}
    </>
  );
}
