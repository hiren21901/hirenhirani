import React from "react";
import { Link } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import {
  BsFillBagPlusFill,
  BsCartPlusFill,
  BsFillEyeFill,
} from "react-icons/bs";

const Sidemenu = () => {
  const userName = localStorage.getItem("userName");
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light display">
            Admin Panel
          </span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <Link href="#" className="d-block display">
                {userName}
              </Link>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    <Link to="/Ge" className="display">
                      General Elements
                    </Link>
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    <Link to="/Datatable" className="display">
                      DataTables
                    </Link>
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link d-flex align-items-center">
                  <span className=" d-flex align-items-center fs-5  me-2 ms-1">
                    <BsFillBagPlusFill />
                  </span>
                  <p>
                    Product
                    <i className="fas fa-angle-left right align-items-center" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a
                      href="pages/tables/simple.html"
                      className="nav-link d-flex align-items-center "
                    >
                      <span className=" d-flex align-items-center fs-5  me-2 ms-1">
                        <BsCartPlusFill />
                      </span>
                      <Link to="/Addproduct" className="display">
                        Add Product
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/tables/data.html"
                      className="nav-link d-flex align-items-center"
                    >
                      <span className=" d-flex align-items-center fs-5  me-2 ms-1">
                        <BsFillEyeFill />
                      </span>
                      <Link to="/Viewproduct" className="display">
                        View Product
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link d-flex align-items-center">
                  <span className=" d-flex align-items-center fs-5  me-2 ms-1">
                    <BsFillBagPlusFill />
                  </span>
                  <p>
                    Category
                    <i className="fas fa-angle-left right align-items-center" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a
                      href="pages/tables/jsgrid.html"
                      className="nav-link d-flex align-items-center"
                    >
                      <span className=" d-flex align-items-center fs-5  me-2 ms-1">
                        <BiCategoryAlt />
                      </span>
                      <Link to="/category" className="display">
                        Add Category
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/tables/jsgrid.html"
                      className="nav-link d-flex align-items-center"
                    >
                      <span className=" d-flex align-items-center fs-5  me-2 ms-1">
                        <BiCategoryAlt />
                      </span>
                      <Link to="/subcategory" className="display">
                        Add subCategory
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link d-flex align-items-center">
                  <span className=" d-flex align-items-center fs-5  me-2 ms-1">
                    <BsFillBagPlusFill />
                  </span>
                  <p>
                    Brand
                    <i className="fas fa-angle-left right align-items-center" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a
                      href="pages/tables/simple.html"
                      className="nav-link d-flex align-items-center "
                    >
                      <span className=" d-flex align-items-center fs-5  me-2 ms-1">
                        <BsCartPlusFill />
                      </span>
                      <Link to="/Addbrand" className="display">
                        Add Brand
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>

              {/* <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    <Link to="/Addproduct" className="display">Addproduct</Link>
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    <Link to="/Viewproduct" className="display">Viewproduct</Link>
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
              </li> */}
              <li className="nav-item">
                <p>
                  <span style={{ margin: "10px" }}>
                    <i className="fas fa-angle-left left" />
                    <Link to="/" className="display">
                      Log Out
                    </Link>
                  </span>
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidemenu;
