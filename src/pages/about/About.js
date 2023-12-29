import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import Banner from '../../components/banner/Banner';
import ThreeThings from '../../components/threethings/ThreeThings';
import LogoImages from '../../components/logoImages/LogoImages';
import misionvision from '../../assets/svg/mision-vision.svg';
import frame from '../../assets/badges/frame.png';
import level from '../../assets/badges/level.png';
import activeReward from '../../assets/badges/active-reward.png';
import earnedBadges from '../../assets/badges/earned-badges.png';
import profile_pic from '../../assets/badges/profile.png';
import freelance from '../../assets/svg/freelance.svg';
import './About.scss';

const About = () => {
    const [tabKey, initTabKey] = useState('vision');
    return (
        <>
            <Banner />
            <ThreeThings />
            <section className='vision_mision_section'>
                <Container>
                    <div className='mision-vision'>
                        <Row>
                            <Col className='first_column'>
                                <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
                                    <Tab eventKey="vision" title="Our Vision">
                                        <p>We envision creating exceptional web experiences that seamlessly blend creativity and functionality. Our vision is to be recognised for innovative solutions, a client-centric approach, and a commitment to delivering outstanding results. We strive to be the go-to partner for businesses seeking to elevate their online presence and achieve digital excellence.</p>
                                    </Tab>
                                    <Tab eventKey="mision" title="Our Mision">
                                        <p>At our web design company, our mission is to transform ideas into captivating digital realities. We aspire to craft visually stunning and user-centric websites that not only reflect our client's unique visions but also elevate their online presence. Through innovative design, seamless functionality, and a commitment to excellence, we aim to deliver solutions that resonate with audiences, drive engagement, and foster lasting connections. Our dedicated team works tirelessly to exceed expectations, making our clients' success our ultimate mission.</p>
                                    </Tab>
                                </Tabs>
                            </Col>
                            <Col className='second_column'>
                                <img src={misionvision} alt='mision-vision' />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <LogoImages />
            <section className='freelance_section'>
                <Container>
                    <div className='_column'>
                        <div className='profile'>
                            <img src={profile_pic} alt='profile-pic' />
                            <h2>Dheeraj B</h2>
                            <p>Level 20 Colt</p>
                            <img src={freelance} alt='freelance' />
                        </div>
                        <div className='badges_'>
                            <div className='d-flex align-items-center'>
                                <img className='me-4' src={frame} alt='winner' />
                                <div className='text_badges'>
                                    <h3><span className='theme-color'>Level 20</span> Congratulations !</h3>
                                    <img src={level} alt='level' />
                                </div>
                            </div>
                            <div className='text_badges active_reward'>
                                <h3>Active Rewards</h3>
                                <img src={activeReward} alt='level' />
                            </div>
                            <div className='text_badges earn_badges'>
                                <h3>Active Rewards</h3>
                                <img src={earnedBadges} alt='level' />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default About;