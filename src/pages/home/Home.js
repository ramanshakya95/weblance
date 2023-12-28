import React from 'react';
import Banner from '../../components/banner/Banner';
import LogoImages from '../../components/logoImages/LogoImages';
import MakingBrands from '../../components/makingbrands/MakingBrands';
import MakeSomething from '../../components/makesomething/MakeSomething';
import Services from '../../components/services/Services';
import Testimonials from '../../components/testimonials/Testimonials';
import ThreeThings from '../../components/threethings/ThreeThings';
import HomeLatest from '../../components/homelatest/HomeLatest';

const Home = () => {
    return (
        <>
            <Banner />
            <HomeLatest />
            <MakingBrands />
            <ThreeThings />
            <Services />
            <LogoImages />
            <Testimonials />
            <MakeSomething />
        </>
    );
};

export default Home;