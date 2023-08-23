import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../components/banner/Banner';
import WorkList from './WorkList';
import './Portfolio.scss';

const TshirtDesign = () => {
    return (
        <>
            <Banner />
            <div className='portfolio_view'>
                <Container>
                    <WorkList />
                </Container>
            </div>
        </>
    );
};

export default TshirtDesign;