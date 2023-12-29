import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import footerlogo from '../../assets/svg/f_logo.svg';
import freelance from '../../assets/svg/freelance.svg';
import user from '../../assets/icons/user.png';
import telephone from '../../assets/icons/telephone.png';
import envelope from '../../assets/icons/envelope.png';
import secure_payment from '../../assets/icons/secure-payment.png';
import shield from '../../assets/icons/shield.png';
import badge from '../../assets/icons/badge.png';
import flag from '../../assets/icons/india.png';
import flag1 from '../../assets/icons/aus.png';
import member from '../../assets/icons/member.png';
import heart from '../../assets/icons/heart.png';
import './Footer.scss';

const expertdata = [
    { id: 1, icon: require('../../assets/icons/design.png'), title: 'Web Design & Development' },
    { id: 2, icon: require('../../assets/icons/stores.png'), title: 'E-Commerce Stores' },
    { id: 3, icon: require('../../assets/icons/hosting.png'), title: 'Amazon (AWS) Hosting' },
    { id: 4, icon: require('../../assets/icons/email.png'), title: 'Email Marketing' },
    { id: 5, icon: require('../../assets/icons/promotional.png'), title: 'Promotional Video' },
    { id: 6, icon: require('../../assets/icons/content.png'), title: 'Content Management' },
    { id: 7, icon: require('../../assets/icons/responsive.png'), title: 'Responsive Web Design' },
    { id: 8, icon: require('../../assets/icons/applications.png'), title: 'Web Applications' },
    { id: 9, icon: require('../../assets/icons/development.png'), title: 'Custom Development' },
    { id: 10, icon: require('../../assets/icons/social.png'), title: 'Social Media' },
]

const Footer = () => {
    return (
        <>
            <section className="footer_section">
                <Container>
                    <Row className='footer_col'>
                        <Col md="auto" className='first_column p-0'>
                            <img className='logo' src={footerlogo} alt='footer-logo' />
                            <h4>We’re Hardcore Experts in Cutting-edge Technologies</h4>
                            <ul className='content_icon list-unstyled'>
                                <li><img src={flag} alt="" /> Ambala City, India</li>
                                <li><img src={flag} alt="" /> Mohali 105 Sec,India</li>
                                <li><img src={flag1} alt="" /> Melbourne, Australia</li>
                            </ul>
                        </Col>
                        <Col md="auto" className='second_column p-0'>
                            <h3>Experts in</h3>
                            <ul className='list-unstyled'>
                                {expertdata.map(expert => (
                                    <li key={expert.id}><Link to='/'><img src={expert.icon} alt="" /> {expert.title}</Link></li>
                                ))}
                            </ul>
                        </Col>
                        <Col md="auto" className='third_column p-0'>
                            <div className='freelance'>
                                <img className='f_logo' src={freelance} alt='freelance' />
                                <img className='icons' src={shield} alt="shield" />
                                <img className='icons' src={badge} alt="badge" />
                            </div>
                            <ul className='content_icon list-unstyled'>
                                <li><img className='white' src={member} alt="" /> Member since August 28, 2012</li>
                                <li><img className='white' src={heart} alt="" /> 91 Recommendations</li>
                            </ul>
                            <h3>Verified by</h3>
                            <ol className='list-unstyled'>
                                <li><img src={secure_payment} alt="payment" /></li>
                                <li><img src={envelope} alt="payment" /></li>
                                <li><img src={user} alt="payment" /></li>
                                <li><img src={telephone} alt="payment" /></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='copyright_section'>
                <p className='text-center'>© 2023 Weblance. All Rights Reserved.</p>
            </section>
        </>
    );
};

export default Footer;