import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <img
              src="http://www.boesl.gov.bd/themes/responsive_npf/img/logo/logo.png"
              alt=""
              height={170}
            />
          </Col>
          <Col md={8} sm={12}>
            <p className="text-start text-info fw-bold mt-3">
              পরিকল্পনা ও বাস্তবায়নে: মন্ত্রিপরিষদ বিভাগ, এটুআই, বিসিসি,
              ডিওআইসিটি ও বেসিস।
            </p>
            <div className="d-flex mt-3">
              <p className="mt-5 me-4 text-info fw-bold">কারিগরি সহায়তায়:</p>
              <img
                src="http://www.boesl.gov.bd/themes/responsive_npf/img/np-logo-set.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
