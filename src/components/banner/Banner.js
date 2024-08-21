import React from 'react';
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { banner_responsive } from '../../APIs/LatestProjectApi';
import arrow from '../../assets/svg/angle.svg';
import banner1 from '../../assets/svg/Banner1.png';
import banner from '../../assets/svg/Banner.png';
import downarrow from '../../assets/svg/down-arrow.svg';
import './Banner.scss';

const BANNER_CONTENT = {
    "/": <section className='home_banner_section'>
            <Container className='p-0'>
                <Carousel
                    swipeable={true}
                    itemClass='carouselItem'
                    arrows={false}
                    autoPlay={true}
                    autoPlaySpeed={8000}
                    infinite={true}
                    partialVisible={true}
                    responsive={banner_responsive}>
                    <div className='item'>
                        <Row className='banner align-items-center m-0 flex-wrap'>
                            <Col md={6} sm={12} className='banner_content p-0'>
                                <p>We are among the top <b className='theme-color'>5 Freelancers</b></p>
                                <h2>At the <span className='theme-color'>pinnacle</span> on Freelancer</h2>
                                <h5>we're the top-rated company, dedicated to excellent work and client happiness.</h5>
                                <Button href="/weblance/portfolio" className='second_button'>Explore <img src={arrow} alt='right-arrow' /></Button>
                            </Col>
                            <Col md={6} sm={12} className='banner_img ps-xxl-5 ps-lg-4 ps-md-3 ps-sm-2 ps-0 p-0 text-right'>
                                <img src={banner1} alt='banner-img' />
                            </Col>
                        </Row>
                    </div>
                    <div className='item'>
                        <Row className='banner align-items-center m-0 flex-wrap'>
                            <Col md={6} sm={12} className='banner_content p-0'>
                                <p>Fast | Expandable | Protected</p>
                                <h2><span className='theme-color'>Building the</span> Digital Future Together</h2>
                                <h5>The key to great web design is capturing the spirit of the client and the essence of the brand!</h5>
                                <Button href="/weblance/portfolio" className='second_button'>Explore <img src={arrow} alt='right-arrow' /></Button>
                            </Col>
                            <Col md={6} sm={12} className='banner_img ps-xxl-5 ps-lg-4 ps-md-3 ps-sm-2 ps-0 p-0 text-right'>
                                <img src={banner} alt='banner-img' />
                            </Col>
                        </Row>
                    </div>
                </Carousel>
            </Container>
        </section>,
    "/home": <section className='home_banner_section'>
            <Container className='p-0'>
                <Carousel
                    swipeable={true}
                    itemClass='carouselItem'
                    arrows={true}
                    autoPlay={true}
                    autoPlaySpeed={8000}
                    infinite={true}
                    partialVisible={true}
                    responsive={banner_responsive}>
                    <div className='item'>
                        <Row className='banner align-items-center m-0 flex-wrap'>
                            <Col md={6} sm={12} className='banner_content p-0'>
                                <p>We are among the top <b className='theme-color'>5 Freelancers</b></p>
                                <h2>At the <span className='theme-color'>pinnacle</span> on Freelancer</h2>
                                <h5>we're the top-rated company, dedicated to excellent work and client happiness.</h5>
                                <Button className='second_button'>Explore <img src={arrow} alt='right-arrow' /></Button>
                            </Col>
                            <Col md={6} sm={12} className='banner_img ps-xxl-5 ps-lg-4 ps-md-3 ps-sm-2 ps-0 p-0 text-right'>
                                <img src={banner1} alt='banner-img' />
                            </Col>
                        </Row>
                    </div>
                    <div className='item'>
                        <Row className='banner align-items-center m-0 flex-wrap'>
                            <Col md={6} sm={12} className='banner_content p-0'>
                                <p>Fast . Expandable . Protected</p>
                                <h2><span className='theme-color'>Building the</span> Digital Future Together</h2>
                                <h5>The key to great web design is capturing the spirit of the client and the essence of the brand!</h5>
                                <Button className='second_button'>Explore <img src={arrow} alt='right-arrow' /></Button>
                            </Col>
                            <Col md={6} sm={12} className='banner_img ps-xxl-5 ps-lg-4 ps-md-3 ps-sm-2 ps-0 p-0 text-right'>
                                <img src={banner} alt='banner-img' />
                            </Col>
                        </Row>
                    </div>
                </Carousel>
            </Container>
        </section>,
    "/about": <section className='about_banner_section'>
            <Container className='p-0'>
                <Row className='banner align-items-center m-0'>
                    <Col md='auto' className='large-title p-0'>
                        <h1>STU<br />DIO</h1>
                    </Col>
                    <Col className='banner_content'>
                        <h2>We are a web design agency that's like a creative hub.</h2>
                        <p>Empowering Your Digital Presence with Creative Brilliance. We shape digital spaces that mix artistic design with practical use. Our team includes skilled designers, coding experts, and people who know how users feel. We make online personalities for companies that people really connect with. We make websites look cool and work smoothly. Weblance Technologies bring websites to life, turning ideas into amazing sites that people will remember online.</p>
                    </Col>
                </Row>
            </Container>
        </section>,
    "/services": <section className='services_banner_section'>
            <Container className='p-0'>
                <Row className='banner align-items-center m-0'>
                    <Col className='text-center large-title p-0'>
                        <h1>Tech Solutions Tailored for Your Success</h1>
                        <p>Our cutting-edge approach to web technologies and digital marketing, coupled with strong relationship management, ensures you're in good hands</p>
                        <img id="click_bottom" src={downarrow} alt='down arrow' />
                    </Col>
                </Row>
            </Container>
        </section>,
    "/portfolio": <section className='about_banner_section work_banner_section'>
            <Container className='p-0'>
                <Row className='banner align-items-center m-0'>
                    <Col md='auto' className='large-title p-0'>
                        <h1>WO<br />RK</h1>
                    </Col>
                    <Col className='banner_content'>
                        <h2>Transforming Brands, Elevating Experiences: Your Digital Presence Architects.</h2>
                        <p>Weblance stands as a dynamic and forward-thinking design agency, armed with both technical prowess and creative insight to seamlessly transform your brand into its most compelling digital embodiment. Our unique design and development methodology go beyond the ordinary, crafting not just websites but immersive digital realms that captivate your audience. With a blend of technical expertise and creative finesse, we don't just build brands – we sculpt engaging and impactful digital experiences. Trust us to turn your creative investment into a powerful return, where every pixel and line of code contributes to the success story of your brand in the digital landscape.</p>
                    </Col>
                </Row>
            </Container>
        </section>,
    "/reviews": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Reviews</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/all-websites": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>All Websites</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/wordpress-websites": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Wordpress Websites</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/woocommerce-websites": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Woocommerce Websites</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/shopify-websites": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Shopify Websites</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/php-websites": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Php Websites</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/XD-templates": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>XD Templates</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/bootstrap-websites": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Bootstrap Websites</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/emailer-design": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Emailer Design</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/newsletter-design": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Newsletter Design</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/E-catalogues": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>E-catalogues</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/top-websites": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Top Websites</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/animation": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Animation</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/branding": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Branding</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/banner-design": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Banner Design</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/brochure-design": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Brochure Design</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/business-card": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Business Card</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/company-profile": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Company Profile</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/ebook-cover": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Ebook Cover</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/flyer": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Flyer</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/infograhic-design": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Infograhic Design</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/label-design": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Label Design</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/letter-heads": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Letter Heads</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/logo-design": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Logo Design</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/menu-design": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Menu Design</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/packaging-design": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Packaging Design</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/PPT-designs": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>PPT Designs</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/standy-design": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Standy Design</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/Tshirt-design": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Tshirt Design</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/article-writing": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Article Writing</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/business-writing": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Business Writing</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/product-descriptions": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Product Descriptions</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/content-writing": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Content Writing</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/blog-writing": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Blog Writing</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/essay-writing": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Essay Writing</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/proof-reading": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Proof Reading</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/website-audit": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Website Audit</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/competitor-analyse": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Competitor Analyse</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/technical-seo": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Technical SEO</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/website-content": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Website Content</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/blog-posts": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Blog Posts</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/seo-writing": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>SEO Writing</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/quality-backlinks": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Quality Backlinks</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/guest-posts": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Guest Posts</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/social-media-content": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Social Media Content</h2>
                </Col>
            </Row>
        </Container>
    </section>,
    "/portfolio/press-releases": <section className='about_banner_section work_inner_banner'>
        <Container className='p-0'>
            <Row className='banner align-items-center m-0'>
                <Col className='banner_content'>
                    <h2 className='text-center'>Press Releases</h2>
                </Col>
            </Row>
        </Container>
    </section>,
};

const Banner = () => {
    const { pathname } = useLocation();
    return (
        <>
            {BANNER_CONTENT[pathname]}
        </>
    );
};

export default Banner;