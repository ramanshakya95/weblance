import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Banner from '../../components/banner/Banner';
import LinkIcon from '../../assets/icons/linkicon.svg';
import PagArrow from '../../assets/svg/pag-arrow.svg';
import './Portfolio.scss';

const StandyDesign = () => {
    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    let limit = 9;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `https://weblance.co.in/api/standydesign?_page=1&_limit=${limit}`
            );
            const portfolio = await res.json();
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(total / limit));
            setItems(portfolio.data);
        };

        getComments();
    }, [limit]);

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `https://weblance.co.in/api/standydesign?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        const commentsFormServer = await fetchComments(currentPage);
        setItems(commentsFormServer);
    };

    const imageUrl = `https://www.weblance.co.in/uploads/gallery/`;

    return (
        <>
            <Banner />
            <div className='portfolio_view'>
                <Container>
                    <div className="content">
                        <div className="our_all_work three_column">
                            {items.map(data => (
                                <div className='item' key={data.ID}>
                                    <div className='img_overlay'>
                                        <img className='preview_img w-100' src={imageUrl+data.project_image} alt={data.project_name} loading='lazy' />
                                        <div className='overlay_icons'>
                                            <Link to="#" className="icons">
                                                <img src={LinkIcon} alt='link' />
                                            </Link>
                                        </div>
                                    </div>
                                    <h3>{data.project_name}</h3>
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

export default StandyDesign;