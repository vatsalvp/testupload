import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assests/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top ">
      <div className="container-fluid">
        <div className="site-logo">
          <a className="navbar-brand mt-2 mt-lg-0" href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="menu">
          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <li className="nav-item dropdown">
              <a
                className="nav-link active"
                href="/"
                id="navbarDropdownMenuAvatar"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                Home <i class="fa fa-chevron-down gen-submenu-icon"></i>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Main Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/movieshome">
                    Movies Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/movieshome">
                    Tv Shows Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/movieshome">
                    Video Home
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link "
                href="/"
                id="navbarDropdownMenuLinkRight"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Movies <i class="fa fa-chevron-down gen-submenu-icon"></i>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLinkRight"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    {" "}
                    Movies List &raquo;{" "}
                  </a>
                  <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                    <li>
                      <a className="dropdown-item" href="/moviescroll">
                        All Movies List
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/moviesloadmore">
                        Load More
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/moviespagination">
                        Pagination
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    {" "}
                    Movies Style &raquo;{" "}
                  </a>
                  <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                    <li>
                      <a className="dropdown-item" href="/moviespagination">
                        Style 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/moviespagination">
                        Style 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/moviespagination">
                        Style 4
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/singlemovie/${5}`}>
                    Single Movie
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="/"
                id="navbarDropdownMenuLinkRight"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Tv Shows <i class="fa fa-chevron-down gen-submenu-icon"></i>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLinkRight"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    {" "}
                    Submenu &raquo;{" "}
                  </a>
                  <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                    <li>
                      <a className="dropdown-item" href="/">
                        Submenu item 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Submenu item 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Submenu item 4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Submenu item 5
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="/"
                id="navbarDropdownMenuLinkRight"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Video <i class="fa fa-chevron-down gen-submenu-icon"></i>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLinkRight"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    {" "}
                    Submenu &raquo;{" "}
                  </a>
                  <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                    <li>
                      <a className="dropdown-item" href="/">
                        Submenu item 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Submenu item 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Submenu item 4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Submenu item 5
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="/"
                id="navbarDropdownMenuLinkRight"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Pages <i class="fa fa-chevron-down gen-submenu-icon"></i>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLinkRight"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    {" "}
                    Submenu &raquo;{" "}
                  </a>
                  <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                    <li>
                      <a className="dropdown-item" href="/">
                        Submenu item 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Submenu item 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Submenu item 4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Submenu item 5
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? <ImCross /> : <FaBars />}
          </button>
        </div>
        <div className="icons d-flex ">
          <div className="search">
            <a
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              href="/"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa fa-search"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <div className="input-group">
                  <div className="form-outline">
                    <input
                      id="search-input"
                      type="search"
                      placeholder="Search"
                      lass="form-control"
                    />
                  </div>
                  <button
                    id="search-button"
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="User">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="/"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="/">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <Link className="sub-btn" to="/register">
            <button class="btn btn-primary" type="button">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
