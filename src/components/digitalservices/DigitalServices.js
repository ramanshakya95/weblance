import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { digital_services_data } from '../../APIs/DigitalServiceApi'
import './digitalservices.scss';

const DigitalServices = () => {
    return (
        <>
            <section className='digital_services_section' id='click_bottom'>
                <Container>
                    {digital_services_data.map(digital_services => (
                        <Row className='digital_services_row' key={digital_services.id}>
                            <Col className='first_column'>
                                <h2>{digital_services.title}</h2>
                                <p>{digital_services.description}</p>
                                <ul>
                                    {digital_services.points_list.map((list, index) => (
                                        <li key={index}>{list}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col className='second_column'>
                                <div className='services_images'>
                                    <img src={digital_services.image} alt='website' />
                                </div>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </section>
        </>
    );
};

export default DigitalServices;