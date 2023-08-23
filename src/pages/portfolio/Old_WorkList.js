import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ViewIcon from '../../assets/work/viewicon.png';
import LinkIcon from '../../assets/work/linkicon.svg';
import PagArrow from '../../assets/svg/pag-arrow.svg';

function WorkList() {
    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    let limit = 9;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `http://localhost:3005/List?_page=1&_limit=${limit}`
                // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(total / limit));
            // console.log(Math.ceil(total/12));
            setItems(data);
        };

        getComments();
    }, [limit]);

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `http://localhost:3005/List?_page=${currentPage}&_limit=${limit}`
            // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        // console.log(data.selected);
        let currentPage = data.selected + 1;
        const commentsFormServer = await fetchComments(currentPage);
        setItems(commentsFormServer);
        // scroll to the top
        //window.scrollTo(0, 0)
    };

    return (
        <>
            <div className="our_all_work">
                {items.map(work => (
                    <div className='item' key={work.id}>
                        <div className='img_overlay'>
                            <img className='preview_img w-100' src={work.image} alt={work.title} loading='lazy' />
                            <div className='overlay_icons'>
                                {/* <Link to="#" className="icons">
                                    <img src={ViewIcon} alt='view' />
                                </Link> */}
                                <Link to="#" className="icons">
                                    <img src={LinkIcon} alt='link' />
                                </Link>
                            </div>
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
        </>
    );
}

export default WorkList;