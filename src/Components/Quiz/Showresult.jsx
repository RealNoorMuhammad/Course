import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Showresult(props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000); // dramatic reveal
  }, []);

  const percentage = Math.round((props.result * 100) / props.total);

  // funny tweet messages based on performance
  const getFunnyMessage = () => {
    if (percentage === 100)
      return "I just CRUSHED the $COURSE Fake Guru Quiz 💯 Where’s my Lamborghini? 🔥 #HustleCulture";
    if (percentage >= 70)
      return `Passed the $COURSE Fake Guru Quiz with ${percentage}% ✅ Not a guru yet, but my Lamborghini is on layaway 😂`;
    if (percentage >= 40)
      return `Scored ${percentage}% on the $COURSE Fake Guru Quiz. Half guru, half confused 🤔📚 #WorkHardPrayHard`;
    return `I FAILED the $COURSE Fake Guru Quiz with ${percentage}% 😭 Guess I’ll have to sell another "secret millionaire course" 🤡💸`;
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    getFunnyMessage()
  )}`;

  return (
    <>
      <div className="showresult text-center p-4">
        <div>
          <h4>🎯 Your Score : {props.result}</h4>
          <h4>📊 Total Score : {props.total}</h4>
          <h4>
            😂 Your Percentage : <b>{percentage}%</b>
          </h4>
          <button className="btn tryAgain mt-3" onClick={props.tryAgain}>
            🔄 Try Again
          </button>
        </div>
      </div>

      {visible && (
        <div className="container main-alert mt-4 text-center">
          <p className="mb-3">
            Want to flex your *Fake Guru Degree*?  
          </p>

          <a
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary m-2"
          >
           Post My Result on Twitter
          </a>

          <Link to="/Certificate-Generator" className="btn btn-success m-2">
             Generate My Guru Certificate
          </Link>
        </div>
      )}
    </>
  );
}
