import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Button } from 'react-bootstrap';
import arrow from '../../assets/svg/arrow.svg';
import './Testimonials.scss';

const testimonialdata = [
    { id: 1, image: require('../../assets/testimonial.png'), testimonial: '" Dezinestar is awesome and we have done many projects with her. She is very professional and does fantastic work. Thank you. "', name: 'ProSolPrivate' },
    { id: 2, image: require('../../assets/testimonial.png'), testimonial: '" I enjoyed working with Dezinestar so much as she always get what Ii want and has delivered the job which is exceed my expectation. Will definitely hire Dezinestar again for the next project!! " ', name: 'Charterhousehk' },
    { id: 3, image: require('../../assets/testimonial.png'), testimonial: 'I always appreciate the work Dezinestar does. The end result is always excellent.', name: 'Silentwyllow' },
    { id: 4, image: require('../../assets/testimonial.png'), testimonial: '" Excellent work again from Dezinestar.....prompt changes made until I was satisfied.....always a pleasure to work with "', name: 'Switchedon' },
    { id: 5, image: require('../../assets/testimonial.png'), testimonial: '" Sometimes clients can be a challenge and Dezinestar was impressive with her ability to support our agency with patience and professionalism across the completion of the project. you will find her attentive and creative looking for the best approach to keep the client happy. And together we did! Thanks for all you did "', name: 'Arankan' },
    { id: 6, image: require('../../assets/testimonial.png'), testimonial: '" Great to work with, understands my product and projects with limited direction and follows up in detail to make sure the job is done right. "', name: 'Butch8' },
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