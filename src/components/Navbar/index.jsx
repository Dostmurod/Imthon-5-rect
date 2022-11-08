import React from "react";
import "./main.scss";
import logo from "../../assets/img/github-logo.png";
import bell from "../../assets/img/bell.png";
import plus from "../../assets/img/plus.png";
import pro from "../../assets/img/pro.webp";
import Search from "../../search" 
export default function index() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo ml-5">
              <a href="#">
                <img src={logo} alt="github" />
              </a>
              <Search/>
            </div>
            <div className="header__text">
              <ul>
                <li>
                  <a href="#">
                    <h6> Requests</h6>
                  </a>
                  <a href="#">
                    <h6>Issues</h6>
                  </a>
                  <a href="#">
                    <h6>Marketplace</h6>
                  </a>
                  <a href="#">
                    <h6>Explore</h6>
                  </a>
                </li>
              </ul>
            </div>
            <div className="profile">
              <div className="bell">
                <img src={bell} alt="" />
              </div>
              <div className="plus">
                <img src={plus} alt="" />
              </div>
              <div className="profile__img">
                <div className="dropdown-toggle">
                <img src={pro} alt="profile react" />

                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
