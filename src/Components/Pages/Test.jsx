import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import "/src/assets/css/test.css"
import Footer from './Footer'

export default function Test() {
    return (
        <>
            <Navbar />
            <div className='scam-uni'>
                <div className='text-center hero-section'>
                    <h1 className="scam-title">🎓 $COURSE Academy</h1>
                    <p className="scam-subtitle">
                        Where memes meet higher education <br />
                        (and diplomas are printed on MS Paint)
                    </p>
                </div>

                <div className="container d-flex align-items-center justify-content-center">
                    <div className="list-group w-75 m-5 quiz-list">
                        <h3 className="quiz-header">
                           Totally Legit Exam ™
                        </h3>

                        <Link 
                          to="/EXAM/quiz-week-1" 
                          className="list-group-item list-group-item-action scam-card"
                        >
                          Spot the Fake Guru  
                          <span className="quiz-note">
                            – Earn your PhD in Lamborghini Studies 
                          </span>
                        </Link>

                        <Link 
                          to="/EXAM/quiz-week-2" 
                          className="list-group-item list-group-item-action scam-card"
                        >
                          Crypto Astrology 101  (Under Development Unlock in Next Week)
                          <span className="quiz-note">
                            – Learn why Mercury Retrograde killed your bags 
                          </span>
                        </Link>

                        <Link 
                          to="/EXAM/quiz-week-3" 
                          className="list-group-item list-group-item-action scam-card"
                        >
                          Meme Economics  (Under Development Unlock in Next Week)
                          <span className="quiz-note">
                            – Supply, Demand, and Dogecoin Logic 
                          </span>
                        </Link>

                        <Link 
                          to="/EXAM/quiz-week-4" 
                          className="list-group-item list-group-item-action scam-card"
                        >
                          Hustlepreneur History  (Under Development Unlock in Next Week)
                          <span className="quiz-note">
                            – From Pyramid Schemes to TikTok Gurus 
                          </span>
                        </Link>
                    </div>
                </div>

                <div className="scam-footer text-center">
                    <p>
                        Disclaimer: Degrees are 100% useless but make you sound
                        smart at family dinners 🍽️.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
}
