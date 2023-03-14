import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
                <Col sm={6}>
                    <img src={''} alt="Logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href=""><img src={''}/></a>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
