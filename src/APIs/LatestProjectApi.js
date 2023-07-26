export const latest_project_data = [
    { id: 1, image: require('../assets/latestprojects/project.jpg'), title: 'Yummy Bar', subTitle: 'INDIAN WINE AND RESTAURANT' },
    { id: 2, image: require('../assets/latestprojects/project1.jpg'), title: 'VAZATI', subTitle: 'MANAGEMENT' },
    { id: 3, image: require('../assets/latestprojects/project2.jpg'), title: 'BRAMBURRA', subTitle: 'PARTNERS' },
    { id: 4, image: require('../assets/latestprojects/project3.jpg'), title: 'LEGEND', subTitle: 'Committed Realty' },
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
