import React from 'react';
import { Container, Button } from 'react-bootstrap';
import arrow from '../../assets/svg/arrow.svg';
import makesomething from '../../assets/svg/make-something.svg';
import './MakeSomething.scss';

const MakeSomething = () => {
    return (
        <>
            <section className='make_something'>
                <Container>
                    <div className='something_row'>
                        <div className='first_column'><img src={makesomething} alt='makesomething' /></div>
                        <div className='second_column'>
                            <h1>Let's collaborate to create something extraordinary,</h1>
                            <p>whether it's for a new venture or an existing brand.</p>
                            <Button className='second_button'>Initiate a project <img src={arrow} alt='right-arrow' /></Button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default MakeSomething;