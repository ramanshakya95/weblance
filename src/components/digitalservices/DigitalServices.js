import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DigitalServices.scss';

const digital_services_data = [
    {
        id: 1, image: require('../../assets/digitalservices/website-design.png'), title: 'Website Designing', description: 'Driven with years of experience in designing effective websites, our proficient team of designers follows immaculate coding practices to deliver websites that are secure and scalable. We present all-powerful and exceptional designs with a user-friendly approach and we do all this with the intent to convert traffic into sales. Along with this, you will be provided with SEO-friendly content and 20 days of support after the website goes live. We serve both dynamic as well as static websites as per your requirement.',
        points_list: [
            'Static Web Designing',
            'Dynamic Web Designing',
            'Responsive Web Designing',
            'Custom Web Designing',
            'Ecommerce Web Designing'
        ]
    },
    {
        id: 2, image: require('../../assets/digitalservices/website-development.png'), title: 'Website Development', description: 'Our team is specialized in giving shape to startups and medium-scale businesses by offering world-class website services of PHP, E-commerce, WordPress, Open Cart, CodeIgniter, Zend, and CakePHP that catalyzes business growth. Since inception, we have consistently been evolving as a dependable design and development service provider backed up with cutting-edge technology and functionalities. We promise to provide pixel-perfect, SEO-friendly, and fast-loading business websites that bring assured growth, as we utilize our creative insight to bring the best for our customers.', points_list: [
            'Web-based CMS Development',
            'E-Commerce Development',
            'Custom Web Development',
            'Web Application Development',
            'Website Maintenance Services',
            'Pixel Perfect Custom Theme Construction'
        ]
    },
    {
        id: 3, image: require('../../assets/digitalservices/e-commerce.png'), title: 'E-Commerce', description: 'We have a team of passionate people driven by one persistent goal i.e. to craft innovative solutions and unique results. Backed with years of experience, we have emerged as the most prominent Web Development Company for offering top-notch services with a user-friendly approach. We buckled up a proficient team of skilled, dedicated, and seasoned designers and developers who are specialized in secure payment integration and super functional shopping carts along with the development of seamless E-commerce websites that help business owners to increase their sales and drive high revenues.', points_list: [
            'Premium quality at affordable rates',
            '100% secure services to safeguard e-commerce data',
            'Assured client satisfaction',
            'Creation of flexible & optimized app'
        ]
    },
    {
        id: 4, image: require('../../assets/digitalservices/payment-gateway.png'), title: 'Payment Gateway Integration', description: 'We provide next-generation payment gateway solutions to accelerate business growth, increased process efficiencies, and enhanced service innovations. Our solutions are designed to provide the flexibility to tailor payment solutions to suit simple, complex, and diverse needs. With our years of experience in the integration of different payment gateways, we facilitate end-to-end solutions right from letting you pick the desired service provider to the seamless integration of the services. Payment gateways allow you to securely collect and make payments anytime, anywhere. These will help you to make real-time financial transactions in a scalable, flexible, safe, and secure environment. We utilize different gateways:', points_list: [
            'PayPal',
            'Stripe payment gateway',
            'E-way payment solution',
            'Credit card payment gateway',
            'Graphic Design Services'
        ]
    },
    {
        id: 5, image: require('../../assets/digitalservices/graphic-design.png'), title: 'Graphic Designing', description: 'We are a squad of strategists, designers, and developers putting people at the center of everything we build and aim to illustrate only those designs that are trending, eye-catching, unique, and create the same that’s going on in your mind. We sustain faith and integrity in everything we do and strive to be simple, transparent, and empathetic. We acknowledge the value of various perspectives and distinct expertise in designing different online elements and print materials such as', points_list: [
            'Flyers',
            'Logo',
            'Brochures',
            'Posters, Advertisements, Newsletters, and more'
        ]
    },
    {
        id: 6, image: require('../../assets/digitalservices/brand-identity.png'), title: 'Brand Identity', description: 'Our skilled, experienced, and creative team converts your concept and ideas into visually exciting tangible solutions that would not only astound your customers but also leave a long-lasting impression of your brand identity. Our strength lies in the freshness of our designs. Bearing in mind your requirements, we aim to strike the right dot. In an ocean full of possibilities, you just need to dive in to get the right one! Our team can proficiently do that for you and represents aesthetic designs that perfectly amalgamate with your identity.', points_list: [
            'Logo',
            'Company Profile',
            'Corporate Identity',
            'T-shirt Design',
            'E-Cards'
        ]
    },
    {
        id: 7, image: require('../../assets/digitalservices/pack-design.png'), title: 'Packaging Design', description: 'Our team creatively mug up all the astounding ideas and package them with perfection. With a unique aesthetic sense and keen observance, our team creates exactly what may be on your mind. We know the best way to convey your intended purpose through images, design elements, and carefully placed words. Our efficient team respects customer’s intelligence and prepares designs that send the right messages to the buyers you want to reach. We are confident that our graphic packaging designs can bump your sales and improve your company’s prospects, most assuredly.', points_list: [
            'Grocery Packaging',
            'Medical Packaging',
            'kids Product packaging',
            'Cosmetic labes and packaging'
        ]
    },
    {
        id: 8, image: require('../../assets/digitalservices/content-writing.png'), title: 'Content Writing', description: 'Our proficient content writers have equipped robust knowledge in delivering innovative and informative high-quality content that catalyzes business growth. Also, we’re adept at the creativity that mobilizes thoughts to words and articulating fresh content in producing exceptional work. Driven with years of experience, we have emerged as a one-stop solution for aspiring businesses and marketing tycoons. We hold proficiency in some of the following:', points_list: [
            'Article Writing',
            'Website Content',
            'Creation of Blogs',
            'Proofreading',
            'Copywriting'
        ]
    },
]

const DigitalServices = () => {
    return (
        <>
            <section className='digital_services_section' id='click_bottom'>
                <Container>
                    {digital_services_data.map(digital_services => (
                        <Row className='digital_services_row' key={digital_services.id}>
                            <Col className='first_column'>
                                <h2>{digital_services.title}</h2>
                                <p>{digital_services.description}</p>
                                <ul>
                                    {digital_services.points_list.map((list, index) => (
                                        <li key={index}>{list}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col className='second_column'>
                                <div className='services_images'>
                                    <img src={digital_services.image} alt='website' />
                                </div>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </section>
        </>
    );
};

export default DigitalServices;