export const web_data = [
    { id: 1, image: require('../assets/latestprojects/skinbeautyandbeyond.png'), title: 'Skin Beauty and Beyond', subTitle: 'Website Designing & Development' },
    { id: 2, image: require('../assets/latestprojects/mamasista.png'), title: 'Mama Sista', subTitle: 'Website Designing & Development' },
    { id: 3, image: require('../assets/latestprojects/berrimanestate.png'), title: 'Berriman Estate', subTitle: 'Website Designing & Development' }
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
