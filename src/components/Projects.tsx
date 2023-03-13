import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

const projects = [
 {
  title: "Landing page",
  description: "Design & Development",
  imgUrl: ''
 },
 {
  title: "Landing page",
  description: "Design & Development",
  imgUrl: ''
 },
 {
  title: "Landing page",
  description: "Design & Development",
  imgUrl: ''
 },
 {
  title: "Landing page",
  description: "Design & Development",
  imgUrl: ''
 },
 {
  title: "Landing page",
  description: "Design & Development",
  imgUrl: ''
 },
 {
  title: "Landing page",
  description: "Design & Development",
  imgUrl: ''
 },
 {
  title: "Landing page",
  description: "Design & Development",
  imgUrl: ''
 },
 {
  title: "Landing page",
  description: "Design & Development",
  imgUrl: ''
 }
];

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <h2>Projects</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo minus explicabo saepe ea sequi consectetur.</p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
              <Nav.Item>
                <Nav.Link eventKey="first">Option 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Option 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  Option 3
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>Second content</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p>Second content</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}