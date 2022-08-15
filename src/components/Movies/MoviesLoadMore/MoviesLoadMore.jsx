import React, { useState, useEffect } from "react";
import '../MoviesLoadMore/MoviesLoadMore.css'
import playicon from "../../../assests/favicon.ico";
import axios from "axios";
import { Link } from "react-router-dom";

const MoviesLoadMore = () => {
    const [setBanner] = useState(
        {
          result:[]
        }
      );
      const [array, setArray] = useState([]);
      
      const [visible, setVisible] = useState(4);
    
      const getbanner = async () => {
        const res = await fetch(
          "https://wordpress.crescentek.co.uk/anand/streamlab/api/home"
        );
        const getbanner = await res.json();
        console.log(getbanner);
        setBanner(getbanner);
      };
    
      const getarray = async () => {
        const response = await axios.get(
          "https://wordpress.crescentek.co.uk/anand/streamlab/api/home"
        );
        let arrayName = [];
        for (const [i, inerarray] of response.data.result.entries()) {
          console.log("array", inerarray.post_data);
          arrayName = arrayName.concat(inerarray.post_data);
          console.log("merg", arrayName);
        }
        const getarray = arrayName;
        setArray(getarray);
      };
    
      const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
      };
      useEffect(() => {
        getbanner();
        getarray();
      }, []);
  return (
    <React.Fragment>
    <div className="pagination-bg">
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

      <div className="tv">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="single-more-like">
                <h5 className="single-more-title"> More Like This</h5>
                <div className="row">
                  {array.slice(0, visible).map((post, index) => (
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="single-gallery-contain">
                        <div className="single-image">
                          <img
                            src={post.banner_image}
                            alt=""
                            className="first-images"
                          />
                          <div className="play">
                            <Link  to={`/singlemovie/${post.id}`}>
                              <img src={playicon} alt="" />
                            </Link>
                          </div>
                        </div>
                        <div className="movie-icons">
                          <div className="heart-icon">
                            <i className="fa fa-heart-o"></i>
                          </div>
                          <div className="dropup">
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
                <div className="row">
                  <div className="col-lg-12">
                    <div className="single-load-more-button">
                      <div
                        className="single-btn-container"
                        onClick={showMoreItems} >
                        <a className="single-button single-button-loadmore">
                          <span className="button-text">Load More</span>
                          <span className="loadmore-icon">
                            <i className="fa fa-spinner fa-spin"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}

export default MoviesLoadMore