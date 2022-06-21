import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ThreeThings.scss';

const threethings = [
    { id: 1, title: 'Beauty', description: 'Developing stunning one-of-a-kind digital design that catches people’s eye and brings your brand to life online.' },
    { id: 2, title: 'Thought', description: 'As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience.' },
    { id: 3, title: 'Impact', description: 'Designing tailor made solutions that resonate with your customers and drives them to act.' }
]

const ThreeThings = () => {
    return (
        <>
            <section className='three_things_section'>
                <Container className='p-0'>
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
            </section>
        </>
    );
};

export default ThreeThings;