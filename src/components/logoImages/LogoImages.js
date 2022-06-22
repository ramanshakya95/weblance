import React from 'react';
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import './LogoImages.scss'

const clientdata = [
    { id: 1, image: require('../../assets/clients/client.png') },
    { id: 2, image: require('../../assets/clients/client1.png') },
    { id: 3, image: require('../../assets/clients/client2.png') },
    { id: 4, image: require('../../assets/clients/client3.png') },
    { id: 5, image: require('../../assets/clients/client4.png') },
    { id: 6, image: require('../../assets/clients/client5.png') },
    { id: 7, image: require('../../assets/clients/client6.png') },
    { id: 8, image: require('../../assets/clients/client7.png') },
    { id: 9, image: require('../../assets/clients/client8.png') },
    { id: 10, image: require('../../assets/clients/client9.png') },
]

const skillsdata = [
    { id: 1, image: require('../../assets/skills/adobe-illustrator.svg') },
    { id: 2, image: require('../../assets/skills/adobe-photoshop.svg') },
    { id: 3, image: require('../../assets/skills/adobe-xd.svg') },
    { id: 4, image: require('../../assets/skills/figma.svg') },
    { id: 5, image: require('../../assets/skills/html5.svg') },
    { id: 6, image: require('../../assets/skills/css3.svg') },
    { id: 7, image: require('../../assets/skills/shopify.svg') },
    { id: 8, image: require('../../assets/skills/Vector.svg') },
    { id: 9, image: require('../../assets/skills/wordpress.svg') },
    { id: 10, image: require('../../assets/skills/jquery.svg') }
]

const logoImages = {
    "/": <section className='logo_section client_section'>
            <Container>
                <h2 className='text-center'>Our clients</h2>
                <Row className='align-items-center flex-wrap'>
                    {clientdata.map(client => (
                        <Col key={client.id} className='text-center'>
                            <img src={client.image} alt='clients' />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>,
    "/about": <section className='logo_section skill_section'>
                <Container>
                    <h2 className='text-center'>All the skills for a project<br/>from A to Z</h2>
                    <Row className='align-items-center flex-wrap'>
                    {skillsdata.map(skills => (
                        <Col key={skills.id} className='text-center'>
                            <img src={skills.image} alt='clients' />
                        </Col>
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