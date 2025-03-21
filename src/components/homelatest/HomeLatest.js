import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { web_data, brand_data, digital_data } from '../../APIs/LatestProjectApi';
import packaging from '../../assets/latestprojects/packaging.jpg';
import './HomeLatest.scss';

const HomeLatest = () => {
    return (
        <>
            <section className='work_section'>
                <Container>
                    <Row className='work_titles align-items-center'>
                        <Col md={12} sm={12} className='first_column text-center'>
                            <h1>Showcase</h1>
                            <h2>Projects close to our hearts.</h2>
                        </Col>
                    </Row>
                    <Row xs={1} md={2} lg={2} className='projects_ first_row'>
                        <Col className='_column'>
                            <Carousel
                                draggable={true}
                                indicators={false}
                                controls={false}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                infinite={true}
                            >
                                {web_data.map(web_project => (
                                    <Carousel.Item key={web_project.id}>
                                        <img
                                            className="d-block m-auto"
                                            src={web_project.image}
                                            alt="wev development"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <h4>Website Design & Development</h4>
                        </Col>
                        <Col className='_column'>
                            <Carousel
                                draggable={true}
                                indicators={false}
                                controls={false}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                infinite={true}
                            >
                                {brand_data.map(brand_project => (
                                    <Carousel.Item key={brand_project.id}>
                                        <img
                                            className="d-block m-auto"
                                            src={brand_project.image}
                                            alt="brands"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <h4>Brands</h4>
                        </Col>
                        <Col className='_column'>
                            <img src={packaging} alt='project2' />
                            <h4>Label and Packaging</h4>
                        </Col>
                        <Col className='_column'>
                            <Carousel
                                draggable={true}
                                indicators={false}
                                controls={false}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                infinite={true}
                            >
                                {digital_data.map(brand_project => (
                                    <Carousel.Item key={brand_project.id}>
                                        <img
                                            className="d-block m-auto"
                                            src={brand_project.image}
                                            alt="brands"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <h4>Digital Marketing</h4>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomeLatest;