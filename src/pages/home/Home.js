import React from 'react';
import './Home.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import bannerimg from '../../assets/Banner-Img.png';
import Tablet_Img from '../../assets/Tablet_Image.png';
import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.png';
import service3 from '../../assets/service3.png';
import project from '../../assets/project.png';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import client from '../../assets/client.png';
import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.png';
import client4 from '../../assets/client4.png';
import client5 from '../../assets/client5.png';
import client6 from '../../assets/client6.png';
import client7 from '../../assets/client7.png';
import client8 from '../../assets/client8.png';
import client9 from '../../assets/client9.png';
import arrow from '../../assets/arrow.svg';
import testimonial from '../../assets/testimonial.png';
import makesomething from '../../assets/make-something.svg';

const Home = () => {
    const agencydata = [
        { id: 1, title: 'Beauty', description: 'Developing stunning one-of-a-kind digital design that catches people’s eye and brings your brand to life online.' },
        { id: 2, title: 'Thought', description: 'As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience.' },
        { id: 3, title: 'Impact', description: 'Designing tailor made solutions that resonate with your customers and drives them to act.' }
    ]
    const servicedata = [
        { id: 1, image: { service1 }, title: 'Website Design & Development', description: 'Crafting responsive, search engine-friendly websites with instant impact, impressing users and effectively positioning your brand.' },
        { id: 2, image: { service2 }, title: 'Graphic Design', description: 'We deliver blend of start-of-the-art design and technology for creating simple and usable Graphic experiences.' },
        { id: 3, image: { service3 }, title: 'Brand Identity Design ', description: 'By following groundbreaking approach, we help your brand stand out from the rest and excel in communication.' }
    ]

    return (
        <>
            <section className='banner_section'>
                <Container className='p-0'>
                    <Row className='banner align-items-center m-0'>
                        <Col className='banner_content'>
                            <h1>Rebel against boring</h1>
                            <p>We’re a creative web design agency that crafts beautiful and original websites for brands who <a href="#/">refuse to blend in.</a></p>
                        </Col>
                        <Col className='banner_img'>
                            <img src={bannerimg} alt='banner-img' />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='brand_section'>
                <Container className='p-0'>
                    <Row className='align-items-center m-0'>
                        <Col className='brand_first_section p-0 pe-3'>
                            <img src={Tablet_Img} alt='Tablet_Img' />
                        </Col>
                        <Col className='brand_second_section p-0 ps-4'>
                            <h1>Making brands a damn site better</h1>
                            <p>Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='digital_section'>
                <Container className='p-0'>
                    <h1>Our creative digital agency design and develop projects with <br /> <span className='theme-color'>three things in mind;</span></h1>
                    <Row>
                        {agencydata.map(agency => (
                            <Col>
                                <div className='each-agency'>
                                    <div className='number'>
                                        {agency.id}
                                    </div>
                                    <div className='content'>
                                        <h3>{agency.title}</h3>
                                        <p>{agency.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

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
                                <div className='each_service bg-light-color'>
                                    <img src={service1} alt={service.image} />
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

            <section className='work_section'>
                <Container>
                    <Row className='work_titles align-items-center'>
                        <Col className='first_column'>
                            <h1>wo<br />rk</h1>
                        </Col>
                        <Col className='second_column'>
                            <h2>Projects that are close to our hearts.</h2>
                        </Col>
                    </Row>
                    <Row className='projects_ first_row'>
                        <Col className='first_column'>
                            <img src={project} alt='project' />
                            <h3>Provenance Project</h3>
                            <h4>Website Designing & Development</h4>
                        </Col>
                        <Col className='second_column'>
                            <img src={project1} alt='project1' />
                            <h3>Proofreading World</h3>
                            <h4>Advertisements</h4>
                        </Col>
                    </Row>
                    <Row className='projects_'>
                        <Col className='first_column'>
                            <img src={project2} alt='project2' />
                            <h3>Snap Car Wash</h3>
                            <h4>Business Card</h4>
                        </Col>
                        <Col className='second_column'>
                            <img src={project3} alt='project3' />
                            <h3>The Mut Spa</h3>
                            <h4>Logo Design</h4>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='client_section'>
                <Container>
                    <h2 className='text-center'>Our clients</h2>
                    <Row className='align-items-center'>
                        <Col><img src={client} alt='client' /></Col>
                        <Col><img src={client1} alt='client1' /></Col>
                        <Col><img src={client2} alt='client2' /></Col>
                        <Col><img src={client3} alt='client3' /></Col>
                        <Col><img src={client4} alt='client4' /></Col>
                        <Col><img src={client5} alt='client5' /></Col>
                        <Col><img src={client6} alt='client6' /></Col>
                        <Col><img src={client7} alt='client7' /></Col>
                        <Col><img src={client8} alt='client8' /></Col>
                        <Col><img src={client9} alt='client9' /></Col>
                    </Row>
                </Container>
            </section>

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
                                    <Carousel.Item>
                                        <img
                                            className="d-block m-auto"
                                            src={testimonial}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                            <p>I always appreciate the work Dezinestar does. The end result is always excellent.</p>
                                            <h3>Silentwyllow</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block m-auto"
                                            src={testimonial}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                            <p>I always appreciate the work Dezinestar does. The end result is always excellent.</p>
                                            <h3>Silentwyllow</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='make_something'>
                <Container>
                    <div className='something_row'>
                        <div className='first_column'><img src={makesomething} alt='makesomething' /></div>
                        <div className='second_column'>
                            <h1>Let's make something great together.</h1>
                            <p>Whether it’s a new venture or existing brand.</p>
                            <Button className='second_button'>Start a Project <img src={arrow} alt='right-arrow' /></Button>
                        </div>
                    </div>
                </Container>
            </section>

        </>
    );
};

export default Home;