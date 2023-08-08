import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { latest_project_data } from '../../APIs/LatestProjectApi';
import project1 from '../../assets/latestprojects/project1.jpg';
import project2 from '../../assets/latestprojects/project2.jpg';
import project3 from '../../assets/latestprojects/project3.jpg';
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
                                draggable={true}
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
                            <h4>Website Designing & Development</h4>
                            {/* <img src={latest_project.image} alt='project' /> */}
                            {/* <h3>{latest_project.title}</h3> */}
                            {/* <h4><Link to='/'>{latest_project.subTitle}</Link></h4> */}
                        </Col>
                        <Col className='_column'>
                            <img src={project1} alt='project1' />
                            <h4>Advertisements</h4>
                        </Col>
                        <Col className='_column'>
                            <img src={project2} alt='project2' />
                            <h4>Business Card</h4>
                        </Col>
                        <Col className='_column'>
                            <img src={project3} alt='project3' />
                            <h4>Logo Design</h4>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomeLatest;