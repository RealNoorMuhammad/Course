import React, { useState, useEffect } from "react";

export default function MemeGenerator() {
  const [memes, setMemes] = useState([]);
  const [meme, setMeme] = useState("");
  const [displayedMeme, setDisplayedMeme] = useState("");
  const [loading, setLoading] = useState(false);

  // Load memes from public/memes.json
  useEffect(() => {
    fetch("/memes.json")
      .then((res) => res.json())
      .then((data) => setMemes(data))
      .catch((err) => console.error("Error loading memes:", err));
  }, []);

  const generateMeme = () => {
    if (memes.length === 0) return;

    setLoading(true);
    setDisplayedMeme("");
    setMeme("");

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * memes.length);
      const chosenMeme = memes[randomIndex];
      setMeme(chosenMeme);

      // Typing animation (safe slice, no undefined)
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayedMeme(chosenMeme.slice(0, i)); // ✅ slice prevents undefined
        if (i >= chosenMeme.length) {
          clearInterval(interval);
        }
      }, 50);

      setLoading(false);
    }, 2000); // 2 seconds loading
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

      <main className="uni-main">
        <button onClick={generateMeme} className="uni-btn">
          Generate Meme
        </button>

        {loading && (
          <div className="loading">
            <p>🤖 AI Generating...</p>
          </div>
        )}

        {!loading && displayedMeme && (
          <div className="meme-card">
            <p>{displayedMeme}</p>
            <button onClick={postOnX} className="x-btn">
              Post on X
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
