import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Banner.scss';
import bannerimg from '../../assets/Banner-Img.svg';

const Banner = () => {
    return (
        <>
            <section className='banner_section'>
                <Container className='p-0'>
                    <Row className='banner align-items-center m-0'>
                        <Col className='banner_content pe-5 p-0'>
                            <h1>Rebel against boring</h1>
                            <h5>We’re a creative web design agency that crafts beautiful and original websites for brands who <a href="#/">refuse to blend in.</a></h5>
                        </Col>
                        <Col className='banner_img ps-5 p-0 text-right'>
                            <img src={bannerimg} alt='banner-img' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Banner;