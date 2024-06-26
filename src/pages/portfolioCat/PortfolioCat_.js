import React from 'react';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { design_dev_data, graphic_data, content_data, seo_data } from '../../APIs/PortfolioCatApi';
import Banner from '../../components/banner/Banner';
import './PortfolioCat_.scss';

const PortfolioCat = () => {
    return (
        <>
            <Banner />
            <section className='work_category_section'>
                <Container className='p-0'>
                    <div className='work_category_row'>
                        <div className='each_cat sidebar'>
                            <h3>Web Development</h3>
                            <div className='category_list'>
                                <ul>
                                    {design_dev_data.map(categories => (
                                        <li key={categories.id}><Link to={`${categories.url}`}>{categories.category}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='each_cat sidebar'>
                            <h3>Brand Design</h3>
                            <div className='category_list'>
                                <ul>
                                    {graphic_data.map(categories => (
                                        <li key={categories.id}><Link to={`${categories.url}`}>{categories.category}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='each_cat sidebar'>
                            <h3>Creative Writing</h3>
                            <div className='category_list'>
                                <ul>
                                    {content_data.map(categories => (
                                        <li key={categories.id}>{categories.category}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='each_cat sidebar'>
                            <h3>Digital Marketing</h3>
                            <div className='category_list'>
                                <ul>
                                    {seo_data.map(categories => (
                                        <li key={categories.id}>{categories.category}</li>
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

export default PortfolioCat;