import { useEffect, useState } from "react";
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react';
import ReactPaginate from "react-paginate";
import { Container } from 'react-bootstrap';
import Banner from '../../components/banner/Banner';
import PagArrow from '../../assets/svg/pag-arrow.svg';
import './Portfolio.scss';

const E_Catalogues = () => {
    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    let limit = 9;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `http://localhost:3005/e_catalogues?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(total / limit));
            setItems(data);
        };

        getComments();
    }, [limit]);

    useEffect(() => {
        initLightboxJS("Image lightbox");
    }, []);

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `http://localhost:3005/e_catalogues?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        const commentsFormServer = await fetchComments(currentPage);
        setItems(commentsFormServer);
    };

    return (
        <>
            <Banner />
            <div className='portfolio_view'>
                <Container>
                    <div className="content">
                        <div className="our_all_work scroll_animation">
                            {items.map(work => (
                                <div className='item' key={work.id}>
                                    <div className='img_overlay'>
                                        <SlideshowLightbox modalClose="clickOutside" backgroundColor="rgb(255 228 228 / 98%)" fullScreen={true}>
                                            <img className='preview_img w-100' src={work.image} alt={work.title} loading='lazy' />
                                        </SlideshowLightbox>
                                    </div>
                                    <h3>{work.title}</h3>
                                    <h5>{work.subTitle}</h5>
                                </div>
                            ))}
                        </div>

                        <ReactPaginate
                            previousLabel={<img class="prev" src={PagArrow} alt="prev" />}
                            nextLabel={<img class="next" src={PagArrow} alt="next" />}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={1}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination justify-content-center"}
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName={"active"}
                        />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default E_Catalogues;