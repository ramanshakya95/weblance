export const latest_project_data = [
    { id: 1, image: require('../assets/work/project.png'), title: 'Provenance Project', subTitle: 'Website Designing & Development' },
    { id: 2, image: require('../assets/work/project1.png'), title: 'Proofreading World', subTitle: 'Advertisements' },
    { id: 3, image: require('../assets/work/project2.png'), title: 'Snap Car Wash', subTitle: 'Business Card' },
    { id: 4, image: require('../assets/work/project3.png'), title: 'The Mut Spa', subTitle: 'Logo Design' },
]

export const responsive = {
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
