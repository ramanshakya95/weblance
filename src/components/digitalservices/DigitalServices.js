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
                                {/* <div className='first_column'> */}
                                    {/* <img src={digital_services.image} alt='website' /> */}
                                    <h3>{digital_services.title}</h3>
                                    <p>{digital_services.description}</p>
                                    {/* <ul>
                                    {digital_services.points_list.map((list, index) => (
                                        <li key={index}>{list}</li>
                                    ))}
                                </ul> */}
                                {/* </div> */}
                                {/* <Col className='second_column'>
                                <div className='services_images'>
                                </div>
                            </Col> */}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default DigitalServices;