import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import About from '../About/About'
import Client from '../Client/Client'
import Download from '../Download/Download'
import Product from '../Product/Product'
import './Content.css'

const Content = () => {
  return (
    <div className='content'>
      <Container>
        <Row>
          <Col md={3} sm={12}>
            <About />
          </Col>
          <Col md={3} sm={12}>
            <Product />
          </Col>
          <Col md={3} sm={12}>
            <Client />
          </Col>
          <Col md={3} sm={12}>
            <Download />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Content
