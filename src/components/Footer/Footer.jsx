import React from "react";
import "./Footer.css";
import logo from "../..//assests/logo.png";
import gp from "../../assests/gp.png";
import playstore from "../../assests/app.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row footer-content">
          <div className="col-xl-3 col-md-6">
            <div className="widget">
              <div className="row">
                <div className="col-sm-12 ">
                  <img src={logo} alt="Logo" className="logo-content" />
                  <p className="desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <ul className="social-link">
                    <li>
                      <a href="/" className="facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="facebook">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="facebook">
                        <i className="fa fa-skype"></i>
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
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="widget">
              <h4 class="footer-title">Explore</h4>
              <div class="menu-explore-container">
                <ul class="menu">
                  <li class="menu-item">
                    <a href="index-2.html" aria-current="page">
                      Home
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="movies-pagination.html">Movies</a>
                  </li>
                  <li class="menu-item">
                    <a href="tv-shows-pagination.html">Tv Shows</a>
                  </li>
                  <li class="menu-item">
                    <a href="video-pagination.html">Videos</a>
                  </li>
                  <li class="menu-item">
                    <a href="/">Actors</a>
                  </li>
                  <li class="menu-item">
                    <a href="/">Basketball</a>
                  </li>
                  <li class="menu-item">
                    <a href="/">Celebrity</a>
                  </li>
                  <li class="menu-item">
                    <a href="/">Cross</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="widget">
              <h4 class="footer-title">Company</h4>
              <div class="menu-about-container">
                <ul class="menu">
                  <li class="menu-item">
                    <a href="contact-us.html">Company</a>
                  </li>
                  <li class="menu-item">
                    <a href="contact-us.html">Privacy Policy</a>
                  </li>
                  <li class="menu-item">
                    <a href="contact-us.html">Terms Of Use</a>
                  </li>
                  <li class="menu-item">
                    <a href="contact-us.html">Help Center</a>
                  </li>
                  <li class="menu-item">
                    <a href="contact-us.html">contact us</a>
                  </li>
                  <li class="menu-item">
                    <a href="pricing-style-1.html">Subscribe</a>
                  </li>
                  <li class="menu-item">
                    <a href="/">Our Team</a>
                  </li>
                  <li class="menu-item">
                    <a href="contact-us.html">Faq</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3  col-md-6">
            <div class="widget">
              <h4 class="footer-title">Downlaod App</h4>
              <div class="row">
                <div class="col-sm-12">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="/">
                    <img src={gp} className="gen-playstore-logo" alt="playstore" />
                  </a>
                  <a href="/">
                    <img
                      src={playstore}
                      class="gen-appstore-logo"
                      alt="appstore"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-footer">
        <div class="container text-center">
          <div class="row">
            <div class="col-md-12 align-self-center">
              <span class="gen-copyright">
                <a target="_blank" href="/">
                  {" "}
                  Copyright 2021 stremlab All Rights Reserved.
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
