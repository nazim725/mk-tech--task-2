import React from 'react'
import './Product.css'
import product from '../../images/product.jpg'
import Zoom from 'react-reveal/Zoom'

const Product = () => {
  return (
    <Zoom top>
      <div className="product">
        <div className="product-heading">
          <h5>Products & Services</h5>
          <img src={product} alt="" />
        </div>
        <div className="product-info">
          <div>
            <h5>Issue management</h5>
          </div>
          <div>
            <h4>Coppertech Industries Ltd</h4>
            <p>
              <i class="ri-arrow-right-circle-fill"></i>
              <a href="">Prospectus</a>
            </p>
            <p>
              <i class="ri-arrow-right-circle-fill"></i>
              <a href="">Abridged Version</a>
            </p>
          </div>
          <div>
            <h4>Oimex Electrode Limited</h4>
            <p>
              <i class="ri-arrow-right-circle-fill"></i>
              <a href="">Prospectus</a>
            </p>
            <p>
              <i class="ri-arrow-right-circle-fill"></i>
              <a href="">IPO Arnlication Process</a>
            </p>
            <p>
              <i class="ri-arrow-right-circle-fill"></i>
              <a href=""> List of IPO Arplicants</a>
            </p>
            <p>
              <i class="ri-arrow-right-circle-fill"></i>
              <a href="">IPO Result </a>
            </p>
          </div>
        </div>
      </div>
    </Zoom>
  )
}

export default Product
