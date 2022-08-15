import React ,{useEffect,useState} from "react";
import "./SingleMovie.css";
 import ReactPlayer from "react-player";
 import playicon from "../../assests/favicon.ico";
// import image2 from "../../assests/asset-10.jpg";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const [banner, setBanner] = useState({
    rel_post_data:[]
  });
  const {id} =useParams ()
 
  useEffect(() => {
    const getbanner = async () => {
      const res = await fetch(
        'https://wordpress.crescentek.co.uk/anand/streamlab/api/get_single_post?post_id=' +id
      );
      const getbanner = await res.json();
      console.log('singlemovie',getbanner);
      setBanner(getbanner);
    };
    getbanner();
  }, [id]);
 
  return (
    <div className="single-movie">
      <div className="container-fluid">
         <div className="row">
           <div className="col-md-12">
             <div className="video-sec">
                <ReactPlayer
                url={`https://www.youtube.com/watch/${banner.video_link}`}
                controls
                width="100%"
                height="70vh"
              />
            </div>
            <div className="single-movie-info">
              <h2 className="single-movie-title">{banner.title}</h2>
            </div>
            <div className="single-movie-holder">
              <ul>
                <li className="sen-rating">TV-PG</li>
                <li>
                  <i className="fas fa-eye"></i>
                  <span>237 Views</span>
                </li>
              </ul>
            </div>
            <div className="single-movie-desc">
              <p>
               {banner.description}
              </p>
            </div>
            <div className="single-movie-details">
              <div className="extra-data">
                <ul>
                  <li>
                    <span>Category Name :</span>
                    <span>{banner.category_name}</span>
                  </li>
                  <li>
                    <span>Audio Languages :</span>
                    <span>{banner.languages_name}</span>
                  </li>
                  <li>
                    <span>Director :</span>
                    <span>{banner.director}</span>
                  </li>
                  <li>
                    <span>Writer :</span>
                    <span>{banner.writer}</span>
                  </li>
                  <li>
                    <span>Genre :</span>
                    <span>
                      <a href="action.html">{banner.genres_name} </a>
                    </span>
                  </li>
                 
                  <li>
                    <span>Release Date :</span>
                    <span>{banner.release_date}</span>
                  </li>
                  <li>
                    <span>Created At:</span>
                    <span>{banner.created_at}</span>
                  </li>
                </ul>
              </div>
              <div className="single-social-share">
                <h4 className="align-self-center">Social Share :</h4>
                <ul className="social-inner">
                  <li>
                    <a href="/" className="facebook">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="facebook">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="facebook">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="single-more-like">
              <h5 className="single-more-title"> More Like This</h5>
              <div className="row">
              {banner.rel_post_data.map((post)=> (
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="single-gallery-contain">
                    <div className="single-image">
                      <img src={post.banner_image} alt="" className="singleimg" /> 
                      <div className="play">
                        <a href='/movieshome'>
                          <img src={playicon} alt="" />
                        </a>
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
                    <div className="single-btn-container">
                      <a
                        className="single-button single-button-loadmore"
                        href="/">
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
  );
};

export default SingleMovie;
