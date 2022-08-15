import React from "react";
import Slider from "react-slick";
import "./ThirdSlider.css";

const ThirdSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="third-sec">
      <div className="container-fluid">
        <Slider {...settings}>
          <div className="background-img">
            <div className="third-content">
              <div className="left-side">
                <div className="movie-info">
                  <h3>Command in your hand</h3>
                </div>
                <div className="movie-meta-holder">
                  <ul>
                    <li>1 Season</li>
                    <li>3 Episode</li>
                    <li>2013</li>
                    <li>
                      <a href="/">
                        <span>Comedy</span>
                      </a>
                    </li>
                  </ul>
                  <p>
                    Streamlab is a long established fact that a reader will be
                    distracted by the readable content of a page when Streamlab
                    at its layout Streamlab.
                  </p>
                </div>
                <div className="btn-container">
                  <a
                    href="single-episode.html"
                    className="gen-button gen-button-dark"
                  >
                    <span className="text">Play now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="background-img2">
            <div className="third-content">
              <div className="left-side">
                <div className="movie-info">
                  <h3>stories of the dark</h3>
                </div>
                <div className="movie-meta-holder">
                  <ul>
                    <li>1 Season</li>
                    <li>3 Episode</li>
                    <li>2015 to 2016</li>
                    <li>
                      <a href="/">
                        <span>Comedy</span>
                      </a>
                    </li>
                  </ul>
                  <p>
                    Streamlab is a long established fact that a reader will be
                    distracted by the readable content of a page when Streamlab
                    at its layout Streamlab.
                  </p>
                </div>
                <div className="btn-container">
                  <a
                    href="single-episode.html"
                    className="gen-button gen-button-dark"
                  >
                    <span className="text">Play now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="background-img3">
            <div className="third-content">
              <div className="left-side">
                <div className="movie-info">
                  <h3>Against Beast</h3>
                </div>
                <div className="movie-meta-holder">
                  <ul>
                    <li>1 Season</li>
                    <li>3 Episode</li>
                    <li>2017 to 2018</li>
                    <li>
                      <a href="/">
                        <span>Comedy</span>
                      </a>
                    </li>
                  </ul>
                  <p>
                    Streamlab is a long established fact that a reader will be
                    distracted by the readable content of a page when Streamlab
                    at its layout Streamlab.
                  </p>
                </div>
                <div className="btn-container">
                  <a
                    href="single-episode.html"
                    className="gen-button gen-button-dark"
                  >
                    <span className="text">Play now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ThirdSlider;
