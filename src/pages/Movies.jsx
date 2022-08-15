import React from "react";
import MovieCategory from "../components/Movies/MovieCategory/MovieCategory";
import MoviesHome from "../components/Movies/MoviesHome/MoviesHome";
import ScrollToTop from "../components/ScrollToTop";
import ThirdSlider from "../components/ThirdSlider/ThirdSlider";
import '../pages/common-css-slider.css'


const Movies = () => {
  return (
    <div className="movies-bg">
      <ScrollToTop/>
     
      <MoviesHome mh_id={1} />
       <div className="common-css-slider">
      <MovieCategory mc_id={1} />
      </div>
      <MovieCategory mc_id={2} />
      <ThirdSlider/>
      <div className="common-css-bottom">
      <MovieCategory mc_id={3} />
      </div>
    </div>
  );
};

export default Movies;
