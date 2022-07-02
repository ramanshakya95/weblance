import React from 'react';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { work_data, category_data } from '../../APIs/Work&CategoryListApi';
import Banner from '../../components/banner/Banner';
import ViewIcon from '../../assets/work/viewicon.png';
import LinkIcon from '../../assets/work/linkicon.svg';
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
                                    {category_data.map(categories => (
                                        <li key={categories.id}><Link to="#">{categories.category}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='content'>
                            {work_data.map(work => (
                                <div className='item' key={work.id}>
                                    <div className='img_overlay'>
                                        <img className='w-100' src={work.image} alt={work.title} />
                                        <div class='overlay_icons'>
                                            <Link to="#" class="icons">
                                                <img src={ViewIcon} alt='view'/>
                                            </Link>
                                            <Link to="#" class="icons">
                                                <img src={LinkIcon} alt='link'/>
                                            </Link>
                                        </div>
                                    </div>
                                    <h3>{work.title}</h3>
                                    <h5>{work.subTitle}</h5>
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