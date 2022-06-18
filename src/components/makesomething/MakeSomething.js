import React from 'react';
import { Container, Button } from 'react-bootstrap';
import arrow from '../../assets/arrow.svg';
import makesomething from '../../assets/make-something.svg';
import './MakeSomething.scss';

const MakeSomething = () => {
    return (
        <>
            <section className='make_something'>
                <Container>
                    <div className='something_row'>
                        <div className='first_column'><img src={makesomething} alt='makesomething' /></div>
                        <div className='second_column'>
                            <h1>Let's make something great together.</h1>
                            <p>Whether it’s a new venture or existing brand.</p>
                            <Button className='second_button'>Start a Project <img src={arrow} alt='right-arrow' /></Button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default MakeSomething;