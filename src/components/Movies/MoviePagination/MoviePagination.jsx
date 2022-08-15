import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import playicon from "../../../assests/favicon.ico";
import "../MoviePagination/MoviePagination.css";
import { Link } from "react-router-dom";

const PER_PAGE = 4;

function MoviePagination() {
  const [array, setArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getarray = async () => {
    const response = await axios.get(
      "https://wordpress.crescentek.co.uk/anand/streamlab/api/home"
    );
    let arrayName = [];
    for (const [i, inerarray] of response.data.result.entries()) {
      arrayName = arrayName.concat(inerarray.post_data);
    }
    const getarray = arrayName;
    setArray(getarray);
  };
  
  useEffect(() => {
    getarray();
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  console.log("offset", offset);
  console.log("array", array);

  const currentPageData = (
    <div className="tv">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="single-more-like">
              <div className="row">
                {array.slice(offset, offset + PER_PAGE).map((post, index) => (
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="single-gallery-contain">
                      <div className="single-image">
                        <img
                          key={index}
                          src={post.banner_image}
                          alt=""
                          className="first-images"
                        />
                        <div className="play">
                          <Link to={`/singlemovie/${post.id}`}>
                            <img src={playicon} alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className="movie-icons">
                        <div className="heart-icon">
                          <i className="fa fa-heart-o"></i>
                        </div>
                        <div class="dropup">
                          <i className="fa fa-share-alt"></i>
                          <div class="dropup-content">
                            <a href="/" className="facebook">
                              <i className="fa fa-facebook-f"></i>
                            </a>{" "}
                            <a href="/" className="facebook">
                              <i className="fa fa-instagram"></i>
                            </a>
                            <a href="/" className="facebook">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                        <div className="plus-icon">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                      <div className="single-info-content">
                        <div className="single-info">
                          <h3>
                            <a href="/">{post.title}</a>
                          </h3>
                        </div>
                        <div className="single-movie-meta-holder">
                          <ul>
                            <li>2hr 00mins</li>
                            <li>
                              <a href="/">
                                <span>Action</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const pageCount = Math.ceil(array.length / PER_PAGE);
  return (
    <div className="movie-pagination">
      <div className="tvshow-background">
        <div className="moviepage-title">
          <h1>Movies</h1>
        </div>
        <div className="moviepage-container">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">
                <i className="fa fa-home mr-2"></i>Home
              </a>
            </li>
            <li className="breadcrumb-item active">Movie</li>
          </ul>
        </div>
      </div>
      {currentPageData}

      <ReactPaginate
        pageCount={pageCount}
        previousLabel={"Previous"}
        onPageChange={handlePageClick}
        nextLabel={"Next"}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination_link"}
        nextLinkClassName={"pagination_link"}
        disabledClassName={"pagination_link--disabled"}
        subContainerClassName={"pages_pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default MoviePagination;
