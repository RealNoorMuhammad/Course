import React, { useState, useEffect } from "react";

export default function MemeGenerator() {
  const [memes, setMemes] = useState([]);
  const [meme, setMeme] = useState("");

  // Load memes from public/memes.json
  useEffect(() => {
    fetch("/memes.json")
      .then((res) => res.json())
      .then((data) => setMemes(data))
      .catch((err) => console.error("Error loading memes:", err));
  }, []);

  const generateMeme = () => {
    if (memes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * memes.length);
    setMeme(memes[randomIndex]);
  };

  const postOnX = () => {
    if (!meme) return;
    const tweetText = `$COURSE Meme Generator\n\n${meme}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div className="uni-container">
      {/* Scam University Header */}
      <header className="uni-header">
       
        <h1>$COURSE Meme Generator</h1>
        <p className="subtitle">Department of Meme Studies</p>
      </header>

      {/* Title inside Meme Generator */}
      <h2 className="generator-title"></h2>

      <main className="uni-main">
        <button onClick={generateMeme} className="uni-btn">
          Generate Meme
        </button>

        {meme && (
          <div className="meme-card">
            <p>{meme}</p>
            <button onClick={postOnX} className="x-btn">
              Post on X
            </button>
          </div>
        )}
      </main>

      <footer className="uni-footer">
        <p>© 2025 $COURSE – All Rights Reserved</p>
      </footer>
    </div>
  );
}
