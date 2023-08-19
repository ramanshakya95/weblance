import React from 'react';
import Banner from '../../components/banner/Banner';
import DigitalServices from '../../components/digitalservices/DigitalServices';
import Process from '../../components/process/Process';
import LogoImage from '../../components/logoImages/LogoImages';
import LatestProjects from '../../components/latestprojects/LatestProjects';

const Services = () => {
    return (
        <>
            <Banner />
            <DigitalServices />
            <Process />
            <LogoImage />
            <LatestProjects />
        </>
    );
};

export default Services;