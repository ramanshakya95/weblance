import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.scss'
import bannerimg from '../../assets/Banner-Img.png';
import Tablet_Img from '../../assets/Tablet_Image.png';

const Home = () => {
    const agencydata = [
        {id:1, title:'Beauty', description: 'Developing stunning one-of-a-kind digital design that catches people’s eye and brings your brand to life online.'},
        {id:2, title:'Thought', description: 'As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience.'},
        {id:3, title:'Impact', description: 'Designing tailor made solutions that resonate with your customers and drives them to act.'},
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
                    <h1>Our creative digital agency design and develop projects with <br/> <span className='theme-color'>three things in mind;</span></h1>
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

        </>
    );
};

export default Home;