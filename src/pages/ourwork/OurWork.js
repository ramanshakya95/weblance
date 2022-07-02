import React from 'react';
import { Container } from 'react-bootstrap';
import { latest_project_data } from '../../APIs/LatestProjectApi';
import Banner from '../../components/banner/Banner';
import './ourwork.scss';

const OurWork = () => {
    return (
        <>
            <Banner />

            <section className='work_category_section'>
                <Container>
                    <div className='work_category_row'>
                        <div className='sidebar'>
                            <h3>All Categories</h3>
                            <div className='category_list'>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className='content'>
                            {latest_project_data.map(latest_project => (
                                <div className='item' key={latest_project.id}>
                                    <img className='w-100' src={latest_project.image} alt={latest_project.title} />
                                    <h3>{latest_project.title}</h3>
                                    <h5>{latest_project.subTitle}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

        </>
    );
};

export default OurWork;