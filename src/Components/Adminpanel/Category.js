import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Headers from "./Headers";
import Sidemenu from "./Sidemenu";
import { ToastContainer, toast } from "react-toastify";

const Category = () => {
  const [Categoryname, setCategoryname] = useState("");
  const navigate = useNavigate();
  const addCategory = () => {
    if(Categoryname!=="")
    {
    axios
      .post("http://localhost:5000/category/addcategory", {
        Categoryname: Categoryname,
      })
      .then((res) => {
        console.log(res);
        setCategoryname("");
        toast.success(' Category Add Successfully !', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        // navigate("/subcategory");
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else{
      toast.error('Please Fill Category Boxe !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="wrapper bg-white">
        <Headers />
        <Sidemenu />
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2 text-center">
                <div className="col-sm-6 m-auto">
                  <h1>"Add Your Product Category"</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-6 m-auto">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Product Category</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                        title="Collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="inputName">Category Name :</label>
                      <input
                        type="text"
                        id="inputName"
                        className="form-control"
                        value={Categoryname}
                        onChange={(e) => {
                          setCategoryname(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 m-auto text-center">
                <a className="btn btn-success mb-3" onClick={addCategory}>
                  Add category
                </a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Category;
