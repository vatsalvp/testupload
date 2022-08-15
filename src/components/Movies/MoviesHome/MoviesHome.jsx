import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import rating from "../../../assests/rating.png";

const MoviesHome = (props) => {
  const [banner, setBanner] = useState(
    {
      result:[]
    }
  );
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    const getbanner = async () => {
      const res = await fetch(
        `https://wordpress.crescentek.co.uk/anand/streamlab/api/get_videos?genre_id=${props.mh_id}`
      );
      const getbanner = await res.json();
      console.log(getbanner);
      setBanner(getbanner);
    };
    getbanner();
  }, []);
  return (
    <React.Fragment>
      <div>
        <div className="homepage">
          <Carousel responsive={responsive} infinite={true}>
            {banner.result.map((value, i) => (
              <div className="banner_img"style={{backgroundImage: `url(${value.banner_image})`}}>
                <div className="home_sec">
                <div className="container-fluid">
                  <div className="row align-items-center" style={{minHeight:600}}>
                    <div className="col-xxl-6  col-xl-6 col-lg-12 col-sm-12  order-xxl-1 order-xl-1 order-2 order-lg-2  ">
                      <div className="left-content">
                        <h3 className="title">{value.title}</h3>
                        <div className="after-title">
                          <ul className="rating-content">
                            <li className="twelve">
                              <span>U/A</span>
                            </li>
                            <li>
                              <img src={rating} alt="ratingimage" />
                              <span>7.6 </span>
                            </li>
                          </ul>
                          <p>
                            Streamlab is a long established fact that a reader
                            will be distracted by the readable content of a page
                            The point of using Lorem Streamlab.
                          </p>
                          <div className="info">
                            <ul className="list">
                              <li>
                                <strong>Category :</strong>{" "}
                                {value.category_name}
                              </li>
                              <li>
                                <strong>Release Date :</strong>{" "}
                                {value.release_date}
                              </li>
                              <li>
                                <strong>Genre :</strong>{" "}
                                <span>
                                  <a href="action.html">{value.genres_name} </a>
                                </span>
                              </li>
                              <li>
                                <strong>Tag :</strong>{" "}
                                <span>
                                  <a href="/">4K Ultra, </a>
                                </span>
                                <span>
                                  <a href="/">Brother, </a>
                                </span>
                                <span>
                                  <a href="/">Dubbing, </a>
                                </span>
                                <span>
                                  <a href="/">Premieres </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="movie-action">
                          <div className="btn-container">
                            <Link
                              to={`/singlemovie/${value.id}`}
                              className="button button-dark"
                            >
                              <i aria-hidden="true" className="fa fa-play"></i>{" "}
                              <span className="text">Play Now</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoviesHome;
