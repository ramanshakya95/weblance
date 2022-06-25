import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./LatestProjects.scss"

const responsive = {
    lg_desktop: {
        breakpoint: { max: 3000, min: 1500 },
        items: 3,
        partialVisibilityGutter: 60
    },
    desktop: {
        breakpoint: { max: 1500, min: 1024 },
        items: 3,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 30
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 20
    }
};

const latestProjectData = [
    { id: 1, image: require('../../assets/work/project.png'), title: 'Provenance Project', subTitle: 'Website Designing & Development' },
    { id: 2, image: require('../../assets/work/project1.png'), title: 'Proofreading World', subTitle: 'Advertisements' },
    { id: 3, image: require('../../assets/work/project2.png'), title: 'Snap Car Wash', subTitle: 'Business Card' },
    { id: 4, image: require('../../assets/work/project3.png'), title: 'The Mut Spa', subTitle: 'Logo Design' },
]

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
                            {latestProjectData.map(latestProject => (
                                <div className='item' key={latestProject.id}>
                                    <img className='w-100' src={latestProject.image} alt={latestProject.title} />
                                    <h3>{latestProject.title}</h3>
                                    <h5>{latestProject.subTitle}</h5>
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