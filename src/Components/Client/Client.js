import React from 'react'
import './Client.css'
import world from '../../images/world.jpg'
import research from '../../images/research.jpg'
import Zoom from 'react-reveal/Zoom'

const Client = () => {
  return (
    <Zoom bottom>
      <div>
        <div className="client-heading">
          <h5>Become a Client</h5>
          <img src={world} alt="" />
        </div>
        <div className="client-info mt-4">
          <p>
            <i class="ri-drag-move-2-line"></i>
            <a href="">Bangladeshi Individuals</a>
          </p>
          <p>
            <i class="ri-drag-move-2-line"></i>
            <a href="">Bangladeshi Institutions</a>
          </p>
          <p>
            <i class="ri-drag-move-2-line"></i>
            <a href="">Foreign Investors</a>
          </p>
          <p>
            <i class="ri-drag-move-2-line"></i>
            <a href="">NRBs</a>
          </p>
        </div>

        <div className="research mt-4">
          <div className="research-heading mt">
            <h5>Research</h5>
            <img src={research} alt="" />
          </div>
          <div className="research-info mt-3">
            <p>
              <i class="ri-drag-move-2-line"></i>
              <a href="">Daily Market Commentary</a>
            </p>
          </div>
        </div>
      </div>
    </Zoom>
  )
}

export default Client
