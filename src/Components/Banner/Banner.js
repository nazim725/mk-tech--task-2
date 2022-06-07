import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import './Banner.css'
import pic1 from '../../images/pic-1.png'
import Zoom from 'react-reveal/Zoom'

const Banner = () => {
  return (
    <div className="banner">
      <Carousel variant="dark">
        <Carousel.Item>
          <Container>
            <Row>
              <Col className="col-6">
                <div className="banner-pic">
                  <img className="" src={pic1} alt="First slide" />
                </div>
              </Col>
              <Col className="col-6">
                <div className="banner-info">
                  <Zoom right>
                    <h2 className="">
                      “মুজিববর্ষের অঙ্গীকার <br /> উন্নয়ন-অর্থায়নের উৎস হবে
                      পুঁজিবাজার”
                    </h2>
                  </Zoom>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col className="col-6">
                <div className="banner-pic">
                  <img className="" src={pic1} alt="First slide" />
                </div>
              </Col>
              <Col className="col-6">
                <div className="banner-info">
                  <Zoom right>
                    <h2 className="">
                      “মুজিববর্ষের অঙ্গীকার <br /> উন্নয়ন-অর্থায়নের উৎস হবে
                      পুঁজিবাজার”
                    </h2>
                  </Zoom>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner
