import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { GiNurseMale, GiHealthPotion, GiCook, GiHeartPlus, GiMeditation, GiBookCover } from 'react-icons/gi';
import './Skills.css';

function Skills() {
  const techStack = [
    { icon: <GiNurseMale />, text: 'Empathetic Caregiving' },
    { icon: <GiHealthPotion />, text: 'Medical Knowledge' },
    { icon: <GiCook />, text: 'Personal Care Assistance' },
    { icon: <GiHeartPlus />, text: 'Nutritional Support' },
    { icon: <GiMeditation />, text: 'Emotional Support' },
    { icon: <GiBookCover />, text: 'Professional Ethics' },
  ];

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '1px' }}>
      {techStack.map((tech, index) => (
        <Col key={index} xs={4} md={1} className="tech-icons">
          {tech.icon}
          <h5 className="shaking-text">{tech.text}</h5>
        </Col>
      ))}
    </Row>
  );
}

export default Skills;
