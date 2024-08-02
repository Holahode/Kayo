import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import nursing from '../../Assets/Nursing.jpg';
import nur from '../../Assets/Nursing.pdf';
import medication from '../../Assets/Medication.jpg';
import med from '../../Assets/Medication.pdf';
import hol from '../../Assets/Holistic.pdf'
import holistic from '../../Assets/Holistic1.jpeg';
import '../About/Skills.css';

const projects = [
  {
    imgPath: nursing,
    title: 'Nursing',
    description: 'Our nursing services are the cornerstone of healthcare, offering a broad spectrum of responsibilities centered around patient care...',
    pdfLink: nur,
  },
  {
    imgPath: medication,
    title: 'Medication Management',
    description: 'Critical component of healthcare, ensuring patients receive the right medications at the right times to optimize their health outcomes...',
    pdfLink: med,
  },
  {
    imgPath: holistic,
    title: 'Holistic Daily Care Support',
    description: 'Designed to ensure the well-being of our clients by addressing their physical, emotional, and social needs. Integrates various aspects of care...',
    pdfLink: hol,
  },
];

function Projects() {
  return (
    <Container className="home-content" style={{ marginTop: 13, marginBottom: -10 }}>
      <center>
        <h3 style={{ marginTop: -30, marginBottom: -20 }}>
          Our Best <strong className="greenEth">Services</strong>
        </h3>
      </center>
      <Row style={{ justifyContent: 'center', marginTop: -30, marginBottom: -45 }}>
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={project.imgPath}
              title={project.title}
              description={project.description}
              pdfLink={project.pdfLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
