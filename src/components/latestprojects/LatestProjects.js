import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { latest_studio, responsive } from '../../APIs/LatestProjectApi';
import "./LatestProjects.scss";

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
                            {latest_studio.map(web_project => (
                                <div className='item' key={web_project.id}>
                                    <img className='w-100' src={web_project.image} alt={web_project.title} />
                                    <h3>{web_project.title}</h3>
                                    <h5>{web_project.subTitle}</h5>
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