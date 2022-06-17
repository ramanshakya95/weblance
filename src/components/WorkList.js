import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Worklist = [
    { id: 1, image: require('../assets/project.png'), title: 'Provenance Project', shorttitle: 'Website Designing & Development' },
    { id: 2, image: require('../assets/project1.png'), title: 'Proofreading World', shorttitle: 'Advertisements' },
    { id: 3, image: require('../assets/project2.png'), title: 'Snap Car Wash', shorttitle: 'Business Card' },
    { id: 4, image: require('../assets/project3.png'), title: 'The Mut Spa', shorttitle: 'Logo Design' }
]

const WorkList = () => {
    return (
        <>
            <section className='work_section'>
                <Container>
                    <Row className='work_titles align-items-center'>
                        <Col className='first_column'>
                            <h1>wo<br />rk</h1>
                        </Col>
                        <Col className='second_column'>
                            <h2>Projects that are close to our hearts.</h2>
                        </Col>
                    </Row>
                    <Row xs={1} md={2} lg={2} className='projects_ first_row'>
                        {Worklist.map(work => (
                            <Col className='_column'>
                                <img src={work.image} alt='project' />
                                <h3>{work.title}</h3>
                                <h4>{work.shorttitle}</h4>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default WorkList;