import React from 'react';
import { Container } from 'react-bootstrap';
import { digital_services_data } from '../../APIs/DigitalServiceApi'
import './DigitalServices.scss';

const DigitalServices = () => {
    return (
        <>
            <section className='digital_services_section' id='click_bottom'>
                <Container>
                    <h2>Our Services</h2>
                    <div className='digital_services_row'>
                        {digital_services_data.map(digital_services => (
                            <div className='digital_services_' key={digital_services.id}>
                                <div className='digital_services_content'>
                                    <h3>{digital_services.title}</h3>
                                    <p>{digital_services.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default DigitalServices;