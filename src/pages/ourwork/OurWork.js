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
                            {/* <div className="our_all_work">
                                {work_data.map(work => (
                                    <div className='item' key={work.id}>
                                        <div className='img_overlay'>
                                            <img className='w-100' src={work.image} alt={work.title} />
                                            <div className='overlay_icons'>
                                                <Link to="#" className="icons">
                                                    <img src={ViewIcon} alt='view' />
                                                </Link>
                                                <Link to="#" className="icons">
                                                    <img src={LinkIcon} alt='link' />
                                                </Link>
                                            </div>
                                        </div>
                                        <h3>{work.title}</h3>
                                        <h5>{work.subTitle}</h5>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </Container>
            </section>

        </>
    );
};

export default OurWork;