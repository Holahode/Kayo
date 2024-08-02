import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillEnvelopeFill, BsFillPhoneFill } from 'react-icons/bs';
import houseImg from '../../Assets/House2.jpg';

function Contact() {
    let address = {
        street: '5941 6th NE',
        city: 'Fridley',
        zipCode: 55432,
        state: 'MN',
        country: 'USA',
        email: 'Kayohealth2021@gmail.com',
        phone1: '(612)-309-8940',
        phone2: '(612)-800-4701',
    };

    const smallTextStyle = { fontSize: '21px', display: 'flex', alignItems: 'center', gap: '10px' };
    const containerStyle = {
        position: 'relative',
        overflow: 'hidden',
        background: `url(${houseImg}) no-repeat center center`,
        backgroundSize: 'cover',
        borderRadius: '15px', // Makes the edges rounded
        marginTop: 100,
        marginBottom: 100
    };
    const overlayStyle = {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.65)', // Adjust the transparency
        zIndex: 0,
        borderRadius: '35px' // Ensures the overlay matches the container shape
    };
    const contentStyle = {
        position: 'relative',
        zIndex: 1
    };

    return (
        <Container className="home-content" style={containerStyle}>
            <div style={overlayStyle}></div>
            <Row className="justify-content-between" style={{ paddingBottom: '145px', ...contentStyle }}>
                <Col xs={4} className="home-about-social" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            `${address.street}, ${address.city}, ${address.state} ${address.zipCode}, ${address.country}`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaMapMarkerAlt />
                    </a>
                    <div style={smallTextStyle}>{`${address.street}, ${address.city}, ${address.state} ${address.zipCode}, ${address.country}`}</div>
                </Col>
                <Col xs={4} className="home-about-social text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                    <BsFillEnvelopeFill />
                    <div style={smallTextStyle}>
                        <a href={`mailto:${address.email}`} style={{ color: '#f0ec77' }}>{address.email}</a>
                    </div>
                </Col>
                <Col xs={4} className="home-about-social" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '10px' }}>
                    <BsFillPhoneFill />
                    <div style={smallTextStyle}>{`${address.phone1}  ${address.phone2}`}</div>
                </Col>
            </Row>
            <Row style={{ marginTop: 20, marginBottom: 170, ...contentStyle }}>
                {/* <Col
                    xs={12}
                    md={5}
                    style={{ paddingTop: '120px', paddingBottom: '50px' }}
                    className="about-img"
                >
                    <img src={houseImg} alt="about" className="img-fluid" style={{ borderRadius: '15px' }} />
                </Col> */}
            </Row>
            <br />
            <br />
        </Container>
    );
}

export default Contact;
