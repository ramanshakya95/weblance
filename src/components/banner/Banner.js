import React from 'react';
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import bannerimg from '../../assets/svg/Banner-Img.svg';
import downarrow from '../../assets/svg/down-arrow.svg';
import './banner.scss';

const BANNER_CONTENT = {
    "/": <section className='home_banner_section'>
            <Container className='p-0'>
                <Row className='banner align-items-center m-0 flex-wrap'>
                    <Col md={6} sm={12} className='banner_content p-0'>
                        <h1>Rebel against boring</h1>
                        <h5>We’re a creative web design agency that crafts beautiful and original websites for brands who <a href="#/">refuse to blend in.</a></h5>
                    </Col>
                    <Col md={6} sm={12} className='banner_img ps-xxl-5 ps-lg-4 ps-md-3 ps-sm-2 ps-0 p-0 text-right'>
                        <img src={bannerimg} alt='banner-img' />
                    </Col>
                </Row>
            </Container>
        </section>,
    "/home": <section className='home_banner_section'>
                <Container className='p-0'>
                    <Row className='banner align-items-center m-0'>
                        <Col className='banner_content pe-5 p-0'>
                            <h1>Rebel against boring</h1>
                            <h5>We’re a creative web design agency that crafts beautiful and original websites for brands who <a href="#/">refuse to blend in.</a></h5>
                        </Col>
                        <Col className='banner_img ps-5 ps-sm-3 ps-xs-1 p-0 text-right'>
                            <img src={bannerimg} alt='banner-img' />
                        </Col>
                    </Row>
                </Container>
            </section>,
    "/about": <section className='about_banner_section'>
                <Container className='p-0'>
                    <Row className='banner align-items-center m-0'>
                        <Col md='auto' className='large-title p-0'>
                            <h1>STU<br/>DIO</h1>
                        </Col>
                        <Col className='banner_content'>
                            <h2>A boutique team of designers, developers & strategists.</h2>
                            <p>We have an innovative way of working, removing unnecessary costs, offering lower prices than other similar agencies. If you are looking to find a digital agency then we’d love to hear from you.</p>
                        </Col>
                    </Row>
                </Container>
            </section>,
    "/services": <section className='services_banner_section'>
                <Container className='p-0'>
                    <Row className='banner align-items-center m-0'>
                        <Col className='text-center large-title p-0'>
                            <h1>Digital Marketing Services</h1>
                            <p>Our forward-thinking approach to web technologies and digital marketing services combined with our strong relationship management means you’re in good hands.</p>
                            <img id="click_bottom" src={downarrow} alt='down arrow'/>
                        </Col>
                    </Row>
                </Container>
            </section>,
};

const Banner = () => {
    const { pathname } = useLocation();
    return (
        <>
             {BANNER_CONTENT[pathname]}
        </>
    );
};

export default Banner;