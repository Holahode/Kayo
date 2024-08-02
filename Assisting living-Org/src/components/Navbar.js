import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? 'sticky' : 'navbar'}
      >
        <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '20px'  }}>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Nav style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: '2px', marginLeft: '100px'  }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                  <AiOutlineUser style={{ marginBottom: '2px', marginLeft: '100px'  }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: '2px', marginLeft: '100px'  }} /> Services
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                  <CgFileDocument style={{ marginBottom: '2px', marginLeft: '100px' }} /> Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Add margin-top to ensure header is displayed below the navbar */}
      <header style={{ textAlign: 'center', marginTop: '80px', color:'gainsboro' }}> 
        <h1>KAYO HEALTH CARE CENTER LLC</h1>
      </header>
    </>
  );
}

export default NavBar;
