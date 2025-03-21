import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Button } from 'react-bootstrap';
import arrow from '../../assets/svg/arrow.svg';
import {testimonial_data} from '../../APIs/TestimonialApi'
import './Testimonials.scss';

const Testimonials = () => {
    const freelance = () => {
        window.open('https://www.freelancer.com/u/ambalaonline1?w=f&ngsw-bypass=', "_blank");
    };
    return (
        <>
            <section className='testimonial_section' id='testimonials'>
                <Container>
                    <Row>
                        <Col className='first_column p-0'>
                            <h1>Endorsed by reputable companies.</h1>
                            <p>Explore our collection of authentic and genuine testimonials. We've had the privilege of working with prominent brands and companies. See what our clients have to say about us, and we are confident that their feedback will assist you in choosing us for your project.</p>
                            <Button onClick={freelance} className='second_button'>Know More <img src={arrow} alt='right-arrow' /></Button>
                        </Col>
                        <Col className='second_column p-0'>
                            <div className='testimonial-slider'>
                                <Carousel>
                                    {testimonial_data.map(testimonials => (
                                        <Carousel.Item key={testimonials.id}>
                                            <img
                                                className="d-block m-auto"
                                                src={testimonials.image}
                                                alt="testimonials"
                                            />
                                            <Carousel.Caption>
                                                <p>{testimonials.testimonial}</p>
                                                <h3>{testimonials.name}</h3>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Testimonials;