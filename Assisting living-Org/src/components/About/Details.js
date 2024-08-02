import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';
import './Skills.css';

function Details() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="blockquote mb-0">
          <p style={{ textAlign: 'justify', fontSize: '1em' }}>
            Looking for compassionate, professional care for{' '}
            <span className="greenEth">your loved ones? </span>
            Our services are offered in Anoka County,{' '}
            <span className="greenEth">
              We provide nursing, medication management, bathing, dressing,
              grooming, eating and mobility services.{' '}
            </span>
            <span className="blockquote mb-0">
              {' '}
              With a commitment to enhancing quality of life, we offer
              personalized, expert care in a warm, supportive environment.
            </span>
            <br /> Trust us to treat your family like our own.{' '}
            <span className="greenEth">
              Experience the difference heartfelt care can make!
            </span>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Details;
