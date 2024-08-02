import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Skills from './Skills';
import Details from './Details';
import laptopImg from '../../Assets/House.jpg';
import './Skills.css';
import Tilt from 'react-parallax-tilt';

function About() {
  return (
    <Container fluid className="home-content" style={{ marginTop: -95, marginBottom: -15 }}>
      <Container>
        <Row className="justify-content-center" style={{ padding: '10px' }}>
          <Col
            xs={12}
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '40px',
              paddingBottom: '5px',
            }}
          >
            <center>
              <h1 style={{ fontSize: '2.1em', paddingBottom: '-5px' }}>
                Know Who <strong className="greenEth">We're</strong>
              </h1>
            </center>
            <Details />
          </Col>

          <Col xs={12} md={4} className="home-header">
          <Tilt>
            <img
              src={laptopImg}
              className="img-fluid"
              alt="avatar"
              style={{
                maxHeight: '700px',
                clipPath: 'ellipse(50% 50% at 50% 50%)',
                opacity: 1,
              }}
            />
          </Tilt>
        </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="greenEth">Skillset </strong>
        </h1>
        <Skills />
      </Container>
    </Container>
  );
}

export default About;

