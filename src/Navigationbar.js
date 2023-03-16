import React, { useState } from "react";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import navigate from "navigate";

const Navigationbar = () => {
  let userId = localStorage.getItem("userId");
  let userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    navigate("/");
  };
  return (
    <>
      <header>
        <div id="navigationbar">
          <div className="header_containt py-4 sticky-top">
            <div className="container">
              <div className="align-items-center">
                <div className="" id="menubar">
                  <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                      <button
                        className="navbar-toggler border-none "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>
                      <a className="navbar-brand" href="#">
                        <div id="logo">
                          <a href="#">
                            <img
                              src={require("./Images/Company Image/Logo 1.png")}
                              alt="sri sai surgical"
                              style={{ Width: "100%" }}
                            ></img>
                          </a>
                        </div>
                      </a>
                      <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo03"
                      >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              aria-current="page"
                              href="#"
                            >
                              Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Link
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                          </li>
                          <li>
                            <a className="nav-link">{userName}</a>
                          </li>
                        </ul>
                        <form className="d-flex" role="search">
                          <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                          <button
                            className="btn btn-outline-primary opacity-75"
                            type="submit"
                          >
                            Search
                          </button>
                        </form>
                      </div>
                      <div className="header_myaccount">
                        <DropdownButton
                          id="myaccount"
                          title={<FaUserAlt className="fs-5 text-dark" />}
                        >
                          {userId !== null ? (
                            <Dropdown.Item>
                              <Link
                                onClick={() => {
                                  logout();
                                }}
                                className="admin_menu"
                              >
                                Logout
                              </Link>
                            </Dropdown.Item>
                          ) : (
                            <>
                              <Dropdown.Item>
                                <Link to="/login" className="admin_menu">
                                  Login
                                </Link>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <Link to="/register" className="admin_menu">
                                  Register
                                </Link>
                              </Dropdown.Item>
                            </>
                          )}
                        </DropdownButton>
                      </div>
                      <div className=" header_cart">
                        <DropdownButton
                          id="cart"
                          title={
                            <HiOutlineShoppingBag className="fs-2 text-dark" />
                          }
                        >
                          <Dropdown.Item>
                            <Link to='/AddToCart'>View Cart</Link>
                          </Dropdown.Item>
                        </DropdownButton>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigationbar;
