import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tablet_Img from '../../assets/Tablet_Image.png';
import './MakingBrands.scss'

const MakingBrands = () => {
    return (
        <>
            <section className='making_brand_section'>
                <Container className='p-0'>
                    <Row className='align-items-center m-0 making_brand_c'>
                        <Col className='brand_first_section p-0 pe-xxl-3 pe-md-2 pe-0'>
                            <img src={Tablet_Img} alt='Tablet_Img' />
                        </Col>
                        <Col className='brand_second_section p-0 ps-xxl-4 ps-md-2 ps-0'>
                            <h1>Elevating Brands to a Whole New Level</h1>
                            <p>Acknowledging the significance of first impressions, your website serves as a chance to amaze your audience. So, why settle for subpar design? Brands attract new admirers when they dare to explore beyond their creative boundaries</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default MakingBrands;