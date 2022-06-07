import React from 'react'
import './About.css'
import about from '../../images/about.jpg'
import Slide from 'react-reveal/Slide'

const About = () => {
  return (
    <Slide left>
      <div className="about">
        <div className="about-heading">
          <h5>About Us</h5>
          <img src={about} alt="" />
        </div>
        <div className="about-info">
          <p>
            <i class="ri-drag-move-2-line"></i>
            <a href="">Capital Profile</a>
          </p>
          <p>
            <i class="ri-drag-move-2-line"></i>
            <a href="">Mission & Vision</a>
          </p>
          <p>
            <i class="ri-drag-move-2-line"></i>
            <a href=""> Board of Directors</a>
          </p>
          <p>
            <i class="ri-drag-move-2-line"></i>
            <a href="">Management Executive</a>
          </p>
          <p>
            <i class="ri-drag-move-2-line"></i>
            <a href="">Circulation </a>
          </p>
          <p>
            <i class="ri-drag-move-2-line"></i>
            <a href=""> Career Opportunity </a>
          </p>
          <p>
            <i class="ri-drag-move-2-line"></i>
            <a href=""> Contacts </a>
          </p>
        </div>
      </div>
    </Slide>
  )
}

export default About
