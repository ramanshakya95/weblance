import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Clients.scss'

const clientdata = [
    { id: 1, image: require('../../assets/client.png') },
    { id: 2, image: require('../../assets/client1.png') },
    { id: 3, image: require('../../assets/client2.png') },
    { id: 4, image: require('../../assets/client3.png') },
    { id: 5, image: require('../../assets/client4.png') },
    { id: 6, image: require('../../assets/client5.png') },
    { id: 7, image: require('../../assets/client6.png') },
    { id: 8, image: require('../../assets/client7.png') },
    { id: 9, image: require('../../assets/client8.png') },
    { id: 10, image: require('../../assets/client9.png') },
]

const Clients = () => {
    return (
        <>
            <section className='client_section'>
                <Container>
                    <h2 className='text-center'>Our clients</h2>
                    <Row className='align-items-center'>
                        {clientdata.map(client => (
                            <Col key={client.id}>
                                <img src={client.image} alt='clients' />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Clients;