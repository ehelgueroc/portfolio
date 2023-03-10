import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import skillImage from '../assets/images/skillBox.png'
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const Skills = () => {
  return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>Skills</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid molestiae.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={skillImage} alt="" />
                                    <h5>Web development</h5>
                                </div>
                                <div className="item">
                                    <img src={skillImage} alt="" />
                                    <h5>Web development</h5>
                                </div>
                                <div className="item">
                                    <img src={skillImage} alt="" />
                                    <h5>Web development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}