import React from 'react';
import { useLocation } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
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
    { id: 1, image: require('../../assets/skills/adobe-illustrator.png') },
    { id: 2, image: require('../../assets/skills/adobe-photoshop.png') },
    { id: 3, image: require('../../assets/skills/adobe-xd.png') },
    { id: 4, image: require('../../assets/skills/figma.png') },
    { id: 5, image: require('../../assets/skills/html5.png') },
    { id: 6, image: require('../../assets/skills/css3.png') },
    { id: 7, image: require('../../assets/skills/shopify.png') },
    { id: 8, image: require('../../assets/skills/php.png') },
    { id: 9, image: require('../../assets/skills/wordpress.png') },
    { id: 10, image: require('../../assets/skills/jquery.png') }
]

const expertisedata = [
    { id: 1, image: require('../../assets/expertise/adobe-photoshop.png') },
    { id: 2, image: require('../../assets/expertise/adobe-xd.png') },
    { id: 3, image: require('../../assets/expertise/figma.png') },
    { id: 4, image: require('../../assets/expertise/adobe-illustrator.png') },
    { id: 5, image: require('../../assets/expertise/coreldraw.png') },
    { id: 6, image: require('../../assets/expertise/WordPress.png') },
    { id: 7, image: require('../../assets/expertise/Shopify.png') },
    { id: 8, image: require('../../assets/expertise/Magento.png') },
    { id: 9, image: require('../../assets/expertise/drupal.png') },
    { id: 10, image: require('../../assets/expertise/php.png') },
    { id: 11, image: require('../../assets/expertise/Joomla.png') },
    { id: 12, image: require('../../assets/expertise/woocommerce.png') },
    { id: 13, image: require('../../assets/expertise/html5.png') },
    { id: 14, image: require('../../assets/expertise/MySQL.png') },
    { id: 15, image: require('../../assets/expertise/codeigniter.png') },
]

const logoImages = {
    "/": <section className='logo_section client_section'>
        <Container>
            <h2 className='text-center'>Our clients</h2>
            <Row className='align-items-center flex-wrap logo_row'>
                {clientdata.map(client => (
                    <div key={client.id} className='text-center logos'>
                        <img src={client.image} alt='clients' />
                    </div>
                ))}
            </Row>
        </Container>
    </section>,
    "/about": <section className='logo_section skill_section'>
        <Container>
            <h2 className='text-center'>All the skills for a project<br />from A to Z</h2>
            <Row className='align-items-center flex-wrap logo_row'>
                {skillsdata.map(skills => (
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
                {expertisedata.map(expertise => (
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