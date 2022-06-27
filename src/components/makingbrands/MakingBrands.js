import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tablet_Img from '../../assets/Tablet_Image.png';
import './makingbrands.scss'

const MakingBrands = () => {
    return (
        <>
            <section className='making_brand_section'>
                <Container className='p-0'>
                    <Row className='align-items-center m-0'>
                        <Col className='brand_first_section p-0 pe-xxl-3 pe-md-2 pe-0'>
                            <img src={Tablet_Img} alt='Tablet_Img' />
                        </Col>
                        <Col className='brand_second_section p-0 ps-xxl-4 ps-md-2 ps-0'>
                            <h1>Making brands a damn site better</h1>
                            <p>Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default MakingBrands;