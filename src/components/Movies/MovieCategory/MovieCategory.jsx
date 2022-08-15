import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import playicon from "../../../assests/favicon.ico";
import "./MovieCategory.css";

const MovieCategory = (props) => {
  const [banner, setBanner] = useState(
    {
      result:[]
    }
  );
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    const getbanner = async () => {
      const res = await fetch(
        `https://wordpress.crescentek.co.uk/anand/streamlab/api/get_videos?genre_id=${props.mc_id}`
      );
      const getbanner = await res.json();
      console.log(getbanner);
      setBanner(getbanner);
    };
    getbanner();
  }, []);
  
  return (
    <React.Fragment>
      <div className="multi-bg">
        <div className="category-content">
          <div className="container-fluid">
          <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                  <h1 className="multi-title">{banner.genre_name}</h1>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
                    <div className="more-container">
                      <div className="gen-btn-container text-right">
                        <a
                          href="/moviespagination"
                          className="multi-button gen-button-flat"
                        >
                          <span className="text">More Videos</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            
            <Carousel responsive={responsive}>
              {banner.result.map((value, i) => (
                <div className="multi-category movie">
                  <div className="img-container">
                    <img src={value.banner_image} alt="" className="images" />
                    <div className="play">
                      <Link to={`/singlemovie/${value.id}`}>
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
                  <div className="data-content">
                    <h4 className="heading-title">{value.title}</h4>
                    <div className="img-meta-title">
                      <ul>
                        <li>{value.languages_name}</li>
                        <li>
                          <a href="action.html">
                            <span>{value.genres_name}</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieCategory;
