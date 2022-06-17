import React from 'react';
import './Home.scss';
import Worklist from '../../components/WorkList';
import Banner from '../../components/Banner';
import ImgContent from '../../components/ImgContent';
import ThreeThings from '../../components/ThreeThings';
import Services from '../../components/Services';
import Clients from '../../components/Clients';
import Testimonials from '../../components/Testimonials';
import MakeSomething from '../../components/MakeSomething';

const Home = () => {
    return (
        <>
            <Banner />
            <ImgContent />
            <ThreeThings />
            <Services />
            <Worklist />
            <Clients />
            <Testimonials />
            <MakeSomething />
        </>
    );
};

export default Home;