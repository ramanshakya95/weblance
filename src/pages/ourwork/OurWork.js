import React from 'react';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { design_dev_data, graphic_data, content_data } from '../../APIs/OurWorkApi';
import Banner from '../../components/banner/Banner';
// import WorkList from './WorkList';
import './ourwork.scss';

const OurWork = () => {
    return (
        <>
            <Banner />
            <section className='work_category_section'>
                <Container className='p-0'>
                    <div className='work_category_row'>
                        <div className='each_cat sidebar'>
                            <h3>Web Design & Dev</h3>
                            <div className='category_list'>
                                <ul>
                                    {design_dev_data.map(categories => (
                                        <li key={categories.id}><Link to="#">{categories.category}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='each_cat sidebar'>
                            <h3>Graphic Design</h3>
                            <div className='category_list'>
                                <ul>
                                    {graphic_data.map(categories => (
                                        <li key={categories.id}><Link to="#">{categories.category}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='each_cat sidebar'>
                            <h3>Content Writing</h3>
                            <div className='category_list'>
                                <ul>
                                    {content_data.map(categories => (
                                        <li key={categories.id}><Link to="#">{categories.category}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default OurWork;