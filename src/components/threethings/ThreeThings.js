import React from 'react';
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import './ThreeThings.scss';

const threethings = [
    { id: 1, title: 'Beauty', description: 'Developing stunning one-of-a-kind digital design that catches people’s eye and brings your brand to life online.' },
    { id: 2, title: 'Thought', description: 'As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience.' },
    { id: 3, title: 'Impact', description: 'Designing tailor made solutions that resonate with your customers and drives them to act.' }
]

const digitalExperts = [
    { id: 1, title: 'Meaningful', description: 'Because each project should begin by asking the right questions. We bring you the best UX Researchers, UX Prototyper, UX Copywriters, Market Researchers, Digital Auditors.' },
    { id: 2, title: 'Desirable', description: 'Because creative excellence comes from a belief in the brand.  We bring you the best Art Directors, UI Designers, Strategists, Creatives, Storytellers.' },
    { id: 3, title: 'Codable', description: 'Because each release requires development excellence, good practice and knowledge sharing. We bring you the best Web Architects, Functional Analysts, Technical Analysts, Front-end and Back-end Developers, Testers.' },
    { id: 4, title: 'Planable', description: 'Because success requires vision, planning and operational guidance. We bring you the best Scrum Masters, Project Managers, Program Managers, Product Owners, Product Managers.' }
]

const project_points = {
    "/": <section className='three_things_section'>
            <Container>
                <h1>Our creative digital agency design and develop projects with <br /> <span className='theme-color'>three things in mind;</span></h1>
                <Row>
                    {threethings.map(things => (
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
                    <h1 className="text-center text-white p-0">Our digital experts make your projects</h1>
                    <Row>
                        {digitalExperts.map(experts => (
                            <Col sm={6} key={experts.id} className='spacing'>
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