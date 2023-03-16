import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const Topheader = () => {
  return (
    <>
      <div>
        <div className="header-nav-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-3 main-containt">
                <a className="">
                  <FaLocationArrow className="icon" />
                  <span className="info-text"> Store Location</span>
                </a>
              </div>
              <div className="col-12 col-sm-6 text-center main-containt">
                <a>
                  <FaEnvelope className="icon" />
                  <span className="info-text">
                    {" "}
                    shreesaisurgical2@gmail.com
                  </span>
                </a>
              </div>
              <div className="col-12 col-sm-3  main-containt call_info">
                <a>
                  <FaPhoneAlt className="icon" />
                  <span className="info-text">+91 8652369412</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topheader;
