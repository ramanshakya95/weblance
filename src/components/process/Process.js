import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Process.scss';
import process from '../../assets/icons/work-process.svg';
import icon from '../../assets/icons/branding.png';
import icon1 from '../../assets/icons/design.png';
import icon2 from '../../assets/icons/development.png';
import icon3 from '../../assets/icons/hosting.png';


const Process = () => {
    return (
        <>
            <section class="text-center work_process_section">
                <Container>
                    <h2>How It Is Going</h2>
                    <p>We offer professional web design services at affordable rates to help your business attract more visitors and keep them on your site!</p>
                    <Row className='position-relative'>
                        <div id="svg-container">
                            <img src={process} alt="process" />
                        </div>
                        <Col class="col-lg-3 col-md-12">
                            <div class="work-process">
                                <div class="step-num-box">
                                    <div class="step-icon"><span><img src={icon} alt="icon" /></span></div>
                                    <div class="step-num">01</div>
                                </div>
                                <div class="step-desc">
                                    <h4>Planning</h4>
                                </div>
                            </div>
                        </Col>
                        <Col class="col-lg-3 col-md-12 md-mt-5">
                            <div class="work-process">
                                <div class="step-num-box">
                                    <div class="step-icon"><span><img src={icon1} alt="icon" /></span>
                                    </div>
                                    <div class="step-num">02</div>
                                </div>
                                <div class="step-desc">
                                    <h4>Design</h4>
                                </div>
                            </div>
                        </Col>
                        <Col class="col-lg-3 col-md-12 md-mt-5">
                            <div class="work-process">
                                <div class="step-num-box">
                                    <div class="step-icon"><span><img src={icon2} alt="icon" /></span>
                                    </div>
                                    <div class="step-num">03</div>
                                </div>
                                <div class="step-desc">
                                    <h4>Development</h4>
                                </div>
                            </div>
                        </Col>
                        <Col class="col-lg-3 col-md-12 md-mt-5">
                            <div class="work-process">
                                <div class="step-num-box">
                                    <div class="step-icon"><span><img src={icon3} alt="icon" /></span>
                                    </div>
                                    <div class="step-num">04</div>
                                </div>
                                <div class="step-desc">
                                    <h4>Testing & Launch</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Process;