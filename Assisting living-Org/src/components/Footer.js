import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

function Footer() {
  const date = new Date();
  const locale = navigator.language || 'en-US'; // Detect user locale

  // Format date based on locale
  // const dateFormatter = new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric', year: 'numeric' });
  // const formattedDate = dateFormatter.format(date);

  // Translations (You can extend this object to include more languages)
  const translations = {
    'en-US': {
      developedBy: 'Copyright © 2024, KAYO Health Care Center'
    },
    'es-ES': {
      developedBy: 'Desarrollado por: Michael Abayneh'
    }
    // Add more languages here
  };

  // Default to English if the locale is not in translations
  const translation = translations[locale] || translations['en-US'];

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{translation.developedBy}</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <Col xs={12} className="home-about-social">
                    <p>Feel free to <span className="greenEth">connect </span>with us at</p>
          </Col>
        </Col>

        <Col md="4" className="footer-copywright">
          <Col xs={12} className="home-about-social">
                    
                    <ul >
                        <li className="social-icons" style={{ margin: '0 50px' }}>
                        </li>
                        <li className="social-icons" style={{ margin: '0 50px' }}>
                            {/* <a
                                href="https://www.linkedin.com/in/michaelgirma27/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <AiFillLinkedin />
                            </a> */}
                        </li>
                        <li className="social-icons" style={{ margin: '0 50px' }}>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <AiFillFacebook />
                            </a>
                        </li>
                    </ul>
                </Col>
        </Col>



        <Col md="4" className="footer-copywright">
          {/* <h3>{formattedDate}</h3> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
