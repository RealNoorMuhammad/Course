import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">

            {/* 1. Scam Guru Leaderboard */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="service-item text-center pt-3 w-100 d-flex flex-column">
                <Link to="/roast-guru" className="flex-grow-1">
                  <div className="p-4 h-100 d-flex flex-column">
                    <i className="fa fa-3x fa-fire text-danger mb-4" />
                    <h5 className="mb-3">Scam Guru Leaderboard</h5>
                  
                  </div>
                </Link>
              </div>
            </div>

            {/* 2. Fake Graduation Certificate */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="service-item text-center pt-3 w-100 d-flex flex-column">
                <Link to="/Certificate-Generator" className="flex-grow-1">
                  <div className="p-4 h-100 d-flex flex-column">
                    <i className="fa fa-3x fa-certificate text-success mb-4" />
                    <h5 className="mb-3">Fake Graduation Certificate</h5>
                    
                  </div>
                </Link>
              </div>
            </div>

            {/* 3. Meme Exams */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="service-item text-center pt-3 w-100 d-flex flex-column">
                <Link to="/exam" className="flex-grow-1">
                  <div className="p-4 h-100 d-flex flex-column">
                    <i className="fa fa-3x fa-trophy text-warning mb-4" />
                    <h5 className="mb-3">Meme Exams</h5>
                   
                  </div>
                </Link>
              </div>
            </div>

            {/* 4. Roast-a-Guru */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="service-item text-center pt-3 w-100 d-flex flex-column">
                <Link to="/Meme-Generator" className="flex-grow-1">
                  <div className="p-4 h-100 d-flex flex-column">
                    <i className="fa fa-3x fa-laugh text-primary mb-4" />
                    <h5 className="mb-3">Meme Generator</h5>
                   
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
