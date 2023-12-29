import React from 'react';
import { useLocation } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import {client_data, skills_data, expertise_data} from '../../APIs/LogoImagesApi'
import './LogoImages.scss';

const logoImages = {
    "/": <section className='logo_section client_section'>
        <Container>
            <h2 className='text-center'>Our clients</h2>
            <Row className='align-items-center flex-wrap logo_row'>
                {client_data.map(client => (
                    <div key={client.id} className='text-center logos'>
                        <img src={client.image} alt='clients' />
                    </div>
                ))}
            </Row>
        </Container>
    </section>,
    "/about": <section className='logo_section skill_section'>
        <Container>
            <h2 className='text-center'>Comprehensive skill set, spanning A to Z,<br></br> essential for project success.</h2>
            <Row className='align-items-center flex-wrap logo_row'>
                {skills_data.map(skills => (
                    <div key={skills.id} className='text-center logos'>
                        <img src={skills.image} alt='clients' />
                    </div>
                ))}
            </Row>
        </Container>
    </section>,
    "/services": <section className='logo_section expertise_section'>
        <Container>
            <h2 className='text-center'>We are expertise in</h2>
            <p>We offer a full and comprehensive end-to-end service, including all aspects of technical IT and development services, through to web design and digital marketing.</p>
            <Row className='align-items-center flex-wrap logo_row'>
                {expertise_data.map(expertise => (
                    <div key={expertise.id} className='text-center logos'>
                        <img src={expertise.image} alt='clients' />
                    </div>
                ))}
            </Row>
        </Container>
    </section>,
}

const LogoImages = () => {
    const { pathname } = useLocation();
    return (
        <>
            {logoImages[pathname]}
        </>
    );
};

export default LogoImages;