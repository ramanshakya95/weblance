import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { latest_project_data } from '../../APIs/LatestProjectApi'
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
                        {/* <Col md={6} sm={12} className='second_column'>
                            <h2>Projects close to our hearts.</h2>
                        </Col> */}
                    </Row>
                    <Row xs={1} md={2} lg={2} className='projects_ first_row'>
                        <Col className='_column'>
                            <Carousel
                            draggable = {true}
                                indicators={false}
                                controls={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                infinite={true}
                            >
                                {latest_project_data.map(latest_project => (
                                    <Carousel.Item key={latest_project.id}>
                                        <img
                                            className="d-block m-auto"
                                            src={latest_project.image}
                                            alt="testimonials"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            {/* <img src={latest_project.image} alt='project' /> */}
                            {/* <h3>{latest_project.title}</h3> */}
                            {/* <h4><Link to='/'>{latest_project.subTitle}</Link></h4> */}
                        </Col>
                        <Col className='_column'>
                            <Carousel
                                indicators={false}
                                controls={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                infinite={true}
                            >
                                {latest_project_data.map(latest_project => (
                                    <Carousel.Item key={latest_project.id}>
                                        <img
                                            className="d-block m-auto"
                                            src={latest_project.image}
                                            alt="testimonials"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                        <Col className='_column'>
                            <Carousel
                                indicators={false}
                                controls={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                infinite={true}
                            >
                                {latest_project_data.map(latest_project => (
                                    <Carousel.Item key={latest_project.id}>
                                        <img
                                            className="d-block m-auto"
                                            src={latest_project.image}
                                            alt="testimonials"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                        <Col className='_column'>
                            <Carousel
                                indicators={false}
                                controls={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                infinite={true}
                            >
                                {latest_project_data.map(latest_project => (
                                    <Carousel.Item key={latest_project.id}>
                                        <img
                                            className="d-block m-auto"
                                            src={latest_project.image}
                                            alt="testimonials"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomeLatest;