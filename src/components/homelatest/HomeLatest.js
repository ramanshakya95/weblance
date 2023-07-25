import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import {latest_project_data} from '../../APIs/LatestProjectApi'
import './HomeLatest.scss';

const HomeLatest = () => {
    return (
        <>
            <section className='work_section'>
                <Container>
                    <Row className='work_titles align-items-center'>
                        <Col md={6} sm={12} className='first_column'>
                            <h1>Showcase</h1>
                        </Col>
                        <Col md={6} sm={12} className='second_column'>
                            <h2>Projects that hold a special place in our hearts.</h2>
                        </Col>
                    </Row>
                    <Row xs={1} md={2} lg={2} className='projects_ first_row'>
                        {latest_project_data.map(latest_project => (
                            <Col className='_column' key={latest_project.id}>
                                <img src={latest_project.image} alt='project' />
                                <h3>{latest_project.title}</h3>
                                <h4><Link to='/'>{latest_project.subTitle}</Link></h4>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomeLatest;