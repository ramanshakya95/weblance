import React from 'react';
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import {three_thing, digital_experts} from '../../APIs/ThreeThingsApi'
import './ThreeThings.scss';

const project_points = {
    "/": <section className='three_things_section'>
            <Container>
                <h1>In our digital agency, we focus on three core aspects during project <span className='theme-color'>Design and Development.</span></h1>
                <Row>
                    {three_thing.map(things => (
                        <Col key={things.id}>
                            <div className='each-agency'>
                                <div className='number'>
                                    {things.id}
                                </div>
                                <div className='content'>
                                    <h3>{things.title}</h3>
                                    <p>{things.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>,
    "/about": <section className='three_things_section digital_experts'>
                <Container>
                    <h1 className="text-white p-0">Project Perfection, Expertly Delivered.</h1>
                    <Row>
                        {digital_experts.map(experts => (
                            <Col md={6} key={experts.id} className='spacing'>
                                <div className='each-agency'>
                                    <div className='number'>
                                        {experts.id}
                                    </div>
                                    <div className='content'>
                                        <h3>{experts.title}</h3>
                                        <p>{experts.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>,
}

const ThreeThings = () => {
    const { pathname } = useLocation();
    return (
        <>
            {project_points[pathname]}
        </>
    );
};

export default ThreeThings;