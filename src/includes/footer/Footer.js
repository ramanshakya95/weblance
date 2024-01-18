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
import hire from '../../assets/svg/hire.svg';
import './Footer.scss';

const expertdata = [
    { id: 1, icon: require('../../assets/icons/design.png'), title: 'Web Design' },
    { id: 2, icon: require('../../assets/icons/development.png'), title: 'Web Development' },
    { id: 3, icon: require('../../assets/icons/stores.png'), title: 'E-Commerce' },
    { id: 4, icon: require('../../assets/icons/payment.png'), title: 'Payment Integration' },
    { id: 5, icon: require('../../assets/icons/hosting.png'), title: 'HubSpot Integration' },
    { id: 6, icon: require('../../assets/icons/email.png'), title: 'Emailers/Newsletter' },
    { id: 7, icon: require('../../assets/icons/graphic.png'), title: 'Graphic Design' },
    { id: 8, icon: require('../../assets/icons/branding.png'), title: 'Brand Identity' },
    { id: 9, icon: require('../../assets/icons/social.png'), title: 'Digital Marketing' },
    { id: 10, icon: require('../../assets/icons/responsive.png'), title: 'Mobile Apps' }
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
                            <h3>Expertise in</h3>
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
                <p className='text-center'>© 2024 Weblance. All Rights Reserved.</p>
            </section>

            <div className='fixed_element'>
                <p><a href='/#' rel='noreferrer'><span>1000+</span>Websites</a></p>
                <p><a href='https://www.freelancer.com/u/ambalaonline1' target='_blank' rel='noreferrer'><span><img src={hire} alt='hire' /></span>Hire Us</a></p>
            </div>
        </>
    );
};

export default Footer;