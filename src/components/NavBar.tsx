import React, { useState, useEffect, FC } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import devlogo from '../assets/images/devlogo.png';

export const NavBar: FC = () => {
  const [activeLink, setActiveLink ] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if(window.scrollY > 50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const getStatusLinkClass = (linkName:string):string => {
    console.log('executed');
    return linkName === activeLink ? 'active navbar-link' : 'navbar-link';
  }

  const onUpdateActiveLink = (clickedLink:string) => {
    setActiveLink(clickedLink)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ''}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={devlogo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={getStatusLinkClass('home')} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={getStatusLinkClass('skills')} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={getStatusLinkClass('projects')} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={''}/></a>
                <a href="#"><img src={''}/></a>
                <a href="#"><img src={''}/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
