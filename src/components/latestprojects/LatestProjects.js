import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { latest_project_data, responsive } from '../../APIs/LatestProjectApi';
import "./latestprojects.scss";

const LatestProjects = () => {
    return (
        <>
            <section className='latest_project_'>
                <div className='slider_container'>
                    <h2>Latest from our studio</h2>
                    <div className='latest_project_slider'>
                        <Carousel
                            swipeable={true}
                            itemClass='carouselItem'
                            arrows={false}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            infinite={true}
                            partialVisible={true}
                            responsive={responsive}>
                            {latest_project_data.map(latest_project => (
                                <div className='item' key={latest_project.id}>
                                    <img className='w-100' src={latest_project.image} alt={latest_project.title} />
                                    <h3>{latest_project.title}</h3>
                                    <h5>{latest_project.subTitle}</h5>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LatestProjects;