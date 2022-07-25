import React from 'react';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { category_data } from '../../APIs/OurWorkApi';
import Banner from '../../components/banner/Banner';
import WorkList from './WorkList';
import './ourwork.scss';

const OurWork = () => {
    return (
        <>
            <Banner />
            <section className='work_category_section'>
                <Container className='p-0'>
                    <div className='work_category_row'>
                        <div className='sidebar'>
                            <h3>All Categories</h3>
                            <div className='category_list'>
                                <ul>
                                    {category_data.map(categories => (
                                        <li key={categories.id}><Link to="#">{categories.category}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='content'>
                            <WorkList />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default OurWork;