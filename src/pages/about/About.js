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
import './about.scss';

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
                                        <h1>Innovative <br /> Digital Agency</h1>
                                        <p>We are a bunch of young, skilled, and inspired marketing nerds specialized in offering high-end and reliable services related to website design, development, graphic design, app development, branding, and much more. Our proficient team transforms its journeys into 100% original creativity, insightful strategy, and substances that matter to build brands above the clutter. </p>
                                    </Tab>
                                    <Tab eventKey="mision" title="Our Mision">
                                        <h1>Innovative <br /> Digital Agency</h1>
                                        <p>We are a bunch of young, skilled, and inspired marketing nerds specialized in offering high-end and reliable services related to website design, development, graphic design, app development, branding, and much more. Our proficient team transforms its journeys into 100% original creativity, insightful strategy, and substances that matter to build brands above the clutter. </p>
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