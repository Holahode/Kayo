import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { CgFileDocument } from 'react-icons/cg';

function ProjectCard(props) {
  const { imgPath, title, description, pdfLink } = props;

  return (
    <Card className="project-card-view mb-4">
      <Card.Img variant="top" src={imgPath} alt="card-img" className="img-fluid" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{description}</Card.Text>
        <div className="d-flex justify-content-center">
          {pdfLink && (
            <Button variant="primary" href={pdfLink} target="_blank">
              <CgFileDocument /> &nbsp;Read more...
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
