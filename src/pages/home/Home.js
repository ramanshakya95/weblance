import React from 'react';
import Banner from '../../components/banner/Banner';
import Clients from '../../components/clients/Clients';
import MakingBrands from '../../components/makingbrands/MakingBrands';
import MakeSomething from '../../components/makesomething/MakeSomething';
import Services from '../../components/services/Services';
import Testimonials from '../../components/testimonials/Testimonials';
import ThreeThings from '../../components/threethings/ThreeThings';
import Worklist from '../../components/worklist/WorkList';

const Home = () => {
    return (
        <>
            <Banner />
            <MakingBrands />
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