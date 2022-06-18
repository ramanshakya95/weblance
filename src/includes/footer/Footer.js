import React from 'react';
import './Footer.scss'
import { Container, Row, Col } from 'react-bootstrap';
import footerlogo from '../../assets/logo.svg';
import freelance from '../../assets/freelance.svg';

const expertdata = [
    { id: 1, title: 'Web Design & Development' },
    { id: 2, title: 'E-Commerce Stores' },
    { id: 3, title: 'Amazon (AWS) Hosting' },
    { id: 4, title: 'Email Marketing' },
    { id: 5, title: 'Promotional Video' },
    { id: 6, title: 'Content Management Systems' },
    { id: 7, title: 'Responsive Web Design' },
    { id: 8, title: 'Corporate Extranets' },
    { id: 9, title: 'Custom Development' },
    { id: 10, title: 'Web Applications' },
    { id: 11, title: 'Social Media' },
]

const Footer = () => {
    return (
        <>
            <section className="footer_section">
                <Container>
                    <Row className='justify-content-between'>
                        <Col md="auto" className='first_column p-0'>
                            <img className='logo' src={footerlogo} alt='footer-logo' />
                            <h3>We’re Hardcore Experts in Cutting-edge Technologies</h3>
                            <img src={freelance} alt='freelance' />
                        </Col>
                        <Col md="auto" className='second_column p-0'>
                            <h3>Experts in</h3>
                            <ul className='p-0 list-unstyled'>
                                {expertdata.map(expert => (
                                    <li>{expert.title}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='copyright_section'>
                <p className='text-center'>© 2022 Dezinestar. All Rights Reserved.</p>
            </section>

            <a href='#/'>click</a>

        </>
    );
};

export default Footer;