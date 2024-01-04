import { React, useState } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import arrow from '../../assets/svg/arrow.svg';
import makesomething from '../../assets/svg/make-something.svg';
import logo from '../../assets/svg/logo.svg';
import './MakeSomething.scss';

const MakeSomething = () => {
    const [show, setShow] = useState(false);
    const formClose = () => setShow(false);
    const formShow = () => setShow(true);
    return (
        <>
            <section className='make_something'>
                <Container>
                    <div className='something_row'>
                        <div className='first_column'><img src={makesomething} alt='makesomething' /></div>
                        <div className='second_column'>
                            <h1>Let's collaborate to create something extraordinary,</h1>
                            <p>whether it's for a new venture or an existing brand.</p>
                            <Button onClick={formShow} className='second_button'>Initiate a Project <img src={arrow} alt='right-arrow' /></Button>
                        </div>
                    </div>
                </Container>
            </section>

            <Modal className='initiate_modal' show={show} onHide={formClose} backdrop="static" keyboard={false} centered>
                <Modal.Body>
                    <Modal.Header closeButton></Modal.Header>
                    <img className='w-100 modal_logo' src={logo} alt="logo" />
                    <Form>
                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="" controlId="Attachment">
                            <Form.Label>Attachment</Form.Label>
                            <Form.Control type="file" autoFocus />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default MakeSomething;