import React from 'react'
import './Download.css'
import download from '../../images/download.jpg'
import Slide from 'react-reveal/Slide'

const Download = () => {
  return (
    <Slide right>
      <div className="download">
        <div className="download-heading">
          <h5>Downloads</h5>
          <img src={download} alt="" />
        </div>
        <div className="download-info">
          <div>
            <h4>Forms</h4>
            <p>
              <i class="ri-arrow-right-circle-fill"></i>
              <a href="">All Forms</a>
            </p>
          </div>
          <div>
            <h4>Notice / Circular</h4>
            <p>
              <i class="ri-arrow-right-circle-fill"></i>
              <a href="">BCEC</a>
            </p>
          </div>

          <div className="download-button">
            <button>Online Trending</button> <br />
            <button>IPO Results</button>
          </div>
        </div>
      </div>
    </Slide>
  )
}

export default Download
