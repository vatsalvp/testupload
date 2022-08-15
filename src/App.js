import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
// import MoviesHome from "./components/MoviesSection/MoviesHome/MoviesHome";
import Home from './pages/Home.jsx';
import Register from "./components/Register/Register";
import MergeComponent from "./pages/MergeComponent";
import Movies from "./pages/Movies.jsx";
import SingleMovie from "./components/SingleMovie/SingleMovie.jsx";
import MoviePagination from "./components/Movies/MoviePagination/MoviePagination.jsx";
import './index.css'
import MoviesLoadMore from "./components/Movies/MoviesLoadMore/MoviesLoadMore.jsx";
import MoviesScroll from "./components/Movies/MoviesScroll/MoviesScroll.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="" element={<MergeComponent />}>
            <Route path="/" element={<Home />} />
            <Route path="/movieshome" element={<Movies/>} />
            <Route path="/singlemovie/:id" element={<SingleMovie/>} />
            <Route path="/moviesloadmore" element={<MoviesLoadMore/>} />
            <Route path="/moviespagination" element={<MoviePagination/>} />
            <Route path="/moviescroll" element={<MoviesScroll/>} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
