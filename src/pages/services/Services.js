import React from 'react';
import Banner from '../../components/banner/Banner';
import DigitalServices from '../../components/digitalservices/DigitalServices';
import LogoImage from '../../components/logoImages/LogoImages';
import LatestProjects from '../../components/latestprojects/LatestProjects';
import './Services.scss';

const Services = () => {
    return (
        <>
            <Banner />
            <DigitalServices />
            <LogoImage />
            <LatestProjects />
        </>
    );
};

export default Services;