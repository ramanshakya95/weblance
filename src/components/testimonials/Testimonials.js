import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col, Button } from 'react-bootstrap';
import arrow from '../../assets/arrow.svg';
import './Testimonials.scss';

const testimonialdata = [
    { id: 1, image: require('../../assets/testimonial.png'), testimonial: 'I always appreciate the work Dezinestar does. The end result is always excellent.', name: 'Silentwyllow' },
    { id: 2, image: require('../../assets/testimonial.png'), testimonial: 'I always appreciate the work Dezinestar does. The end result is always excellent.', name: 'Silentwyllow' }
]

const Testimonials = () => {
    return (
        <>
            <section className='testimonial_section'>
                <Container>
                    <Row>
                        <Col className='first_column p-0'>
                            <h1>Struggling to choose a web design company?</h1>
                            <p>We are a bunch of young, skilled, and inspired marketing nerds specialized in offering high-end and reliable services related to website design, development, graphic design, app development, branding, and much more. Our proficient team transforms its journeys into 100% original creativity, insightful strategy, and substances that matter to build brands above the clutter. </p>
                            <h4>Everyone has a website, but we’ll help you create a high-performing brand that resonates with your target audience and sets your business up for success.</h4>
                            <Button className='second_button'>Know More <img src={arrow} alt='right-arrow' /></Button>
                        </Col>
                        <Col className='second_column p-0'>
                            <div className='testimonial-slider'>
                                <Carousel>
                                    {testimonialdata.map(testimonials => (
                                        <Carousel.Item>
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