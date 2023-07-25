import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {service_data} from '../../APIs/ServicesApi';
import './Services.scss';

const Services = () => {
    return (
        <>
            <section className='services_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col className='first_column'>
                            <small>Services We Offer</small>
                            <h1>Weblance the web agency's expertise</h1>
                            <p>The Weblance web agency leverages three interconnected areas of expertise to handle Brand Design, Web Development projects, and SEO.</p>
                        </Col>
                        <Col className='second_column p-0 ps-5'>
                            {service_data.map(service => (
                                <div className='each_service bg-light-color' key={service.id}>
                                    <img src={service.image} alt={service.image} />
                                    <div className='content'>
                                        <h4>{service.title}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;