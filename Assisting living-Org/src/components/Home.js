import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../Assets/House.jpg';
import Tilt from 'react-parallax-tilt';

import Typewriter from 'typewriter-effect';
import './About/Skills.css';

function Home() {
  return (
    <Container
      className="home-content"
      style={{ marginTop: -60, marginBottom: 10 }}
    >
      <Row>
        <Col xs={12} md={4} className="home-header">
          <h4>
            <span>
              It's a pleasure<span className="greenEth"> to connect </span>
              with you!
            </span>
          </h4>
          <br />
          <p className="blockquote mb-0">
            <br />
            <br />
            We are dedicated to providing exceptional, compassionate care to all
            qualified care seekers. &nbsp;
            <span className="greenEth">
              Our team of professional nurses and caregivers is committed to
              enhancing the quality of life for our residents.{' '}
            </span>
            through Personalized services, innovative care and warm supportive
            environment. We offer 24-7 care to ensure your needs are always met.
            Your well-being is our top priority!
            <br />
            <span className="greenEth"></span>
          </p>
        </Col>

        <Col xs={12} md={4} className="home-header">
          <Tilt>
            <img
              src={myImg}
              className="img-fluid"
              alt="avatar"
              style={{
                maxHeight: '500px',
                clipPath: 'ellipse(50% 60% at 50% 50%)',
                opacity: 1,
              }}
            />
          </Tilt>
        </Col>
        <Col xs={12} md={4} className="home-header">
          <br />
          <p className="blockquote mb-0">
            <span>
              "Devoted professionals with multiple years of experience,
            </span>{' '}
            <span className="greenEth">
              {' '}
              bringing a wealth of knowledge and expertise to our approach.
            </span>
            <br />
            <br />
            But here's the twist – We're not just here to provide services;
            &nbsp;
            <span className="greenEth">
              we strive to offer compassionate and ethical care{' '}
            </span>
            that enhances the well-being and dignity of our residents.
            <br />
            <br />
            <span>
              ... we’re your dependable partner, committed to blending
              compassionate care with strategic insight to elevate the .{' '}
              <span className="greenEth">quality of life for our seniors.</span>
              "
            </span>
          </p>
        </Col>
      </Row>
      <br />
      <Row>
        <div style={{ padding: 20, textAlign: 'center', fontSize: 'small' }}>
          <Typewriter
            options={{
              strings: [
                'Personalized Care Plans',
                'Medication Management',
                'Assistance with Daily Activities',
                'Social and Recreational Activities',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </Row>
      <br />
    </Container>
  );
}

export default Home;
