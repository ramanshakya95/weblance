import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Services.scss';

const servicedata = [
    { id: 1, image: require('../../assets/services/service1.png'), title: 'Website Design & Development', description: 'Crafting responsive, search engine-friendly websites with instant impact, impressing users and effectively positioning your brand.' },
    { id: 2, image: require('../../assets/services/service2.png'), title: 'Graphic Design', description: 'We deliver blend of start-of-the-art design and technology for creating simple and usable Graphic experiences.' },
    { id: 3, image: require('../../assets/services/service3.png'), title: 'Brand Identity Design ', description: 'By following groundbreaking approach, we help your brand stand out from the rest and excel in communication.' }
]

const Services = () => {
    return (
        <>
            <section className='services_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col className='first_column'>
                            <small>Our Services</small>
                            <h1>The expertise of the web agency Dezinestar</h1>
                            <p>The Dezinestar web agency relies on 3 areas of expertise that complement each other to carry out design and development projects.</p>
                        </Col>
                        <Col className='second_column p-0 ps-5'>
                            {servicedata.map(service => (
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