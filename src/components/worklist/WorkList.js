import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import {work_list} from '../../APIs/WorkListApi'
import './worklist.scss';

const WorkList = () => {
    return (
        <>
            <section className='work_section'>
                <Container>
                    <Row className='work_titles align-items-center'>
                        <Col md={6} sm={12} className='first_column'>
                            <h1>wo<br />rk</h1>
                        </Col>
                        <Col md={6} sm={12} className='second_column'>
                            <h2>Projects that are close to our hearts.</h2>
                        </Col>
                    </Row>
                    <Row xs={1} md={2} lg={2} className='projects_ first_row'>
                        {work_list.map(work => (
                            <Col className='_column' key={work.id}>
                                <img src={work.image} alt='project' />
                                <h3>{work.title}</h3>
                                <h4><Link to='/'>{work.shorttitle}</Link></h4>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default WorkList;