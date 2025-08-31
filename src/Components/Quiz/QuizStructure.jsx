import React, { useState } from 'react'

import Showresult from './Showresult'

export default function QuizStructure({ Questions, path }) {
  const [currQues, setCurrQues] = useState(0)
  const [ans, setAns] = useState("")
  const [result, setResult] = useState(0)
  const [isLast, setIsLast] = useState(false)

  const Score = () => {
    if (ans === Questions[currQues].Answer) {
      setResult(result + 1)
    }
  }

  const nextHandle = () => {
    Score()
    setAns("")
    if (currQues < Questions.length - 1) {
      setCurrQues(currQues + 1)
    } else {
      setIsLast(true)
    }
  }

  const resetAll = () => {
    setCurrQues(0)
    setAns("")
    setResult(0)
    setIsLast(false)
  }

  return (
    <>
      <div className="quiz-page">
        <h2 className="quiz-heading text-center">
          🎓 Welcome to <span className="guru">Exam Room</span>
        </h2>
        <p className="quiz-subtitle text-center centerit">
          “99% fail this quiz... 
        </p>

        <div className="quiz-container">
          {isLast ? (
            <Showresult
              result={result}
              total={Questions.length}
              tryAgain={resetAll}
              path={path}
            />
          ) : (
            <>
              <div className="question-box">
                <span className="q-number">
                  {currQues + 1}.
                </span>{" "}
                <span className="q-text">
                  {Questions[currQues].Question}
                </span>
              </div>

              <div className="options-box">
                {Questions[currQues].Options.map((el, i) => (
                  <button
                    className={`option-btn ${
                      ans === el ? "selected" : ""
                    }`}
                    key={i}
                    onClick={() => setAns(el)}
                  >
                    {el}
                  </button>
                ))}
              </div>

              <div className="next-area">
                <button className="next-btn" onClick={nextHandle}>
                  Next 
                </button>
              </div>
            </>
          )}
        </div>

        <div className="scam-banner text-center">
          ⭐ Limited Offer: Pass the quiz = FREE Guru Certificate (worth $9997) ⭐
        </div>
      </div>
    </>
  )
}
