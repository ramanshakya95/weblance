import React from 'react';
import Banner from '../../components/banner/Banner';
import {testimonial_data} from '../../APIs/TestimonialApi';
import './Review.scss';

const Review = () => {
    return (
        <>
            <Banner />
            <section id="reviews_section">
                <div className="container">
                    <div className='columns_'>
                        <div className='left_column'>
                            <small>Reviews</small>
                            <h1>Hear some reviews, we got about us.</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className='right_column'>
                            <div className='reviews_'>
                                {testimonial_data.map(testimonials => (
                                    <div className='review' key={testimonials.id}>
                                        <p className='des_'>{testimonials.testimonial}</p>
                                        <div className='info'>
                                            <img className="" src={testimonials.image} alt="client" />
                                            <h5>{testimonials.name}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Review;