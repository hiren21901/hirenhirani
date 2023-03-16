import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Headers from "./Headers";
import Sidemenu from "./Sidemenu";
// import "../App.css";
import { useNavigate } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";

const View_Product = () => {
  const [product, setProduct] = useState([]);

  let navigate = useNavigate();
  // console.log(product);
  useEffect(() => {
    axios
      .get("http://localhost:5000/product/getallproduct")
      .then((response) => {
        // console.log(response);
        setProduct(response.data);
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  const deleteProduct = (product_id) => {
    axios
      .delete(`http://localhost:5000/product/deleteproduct/${product_id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(product_id);
  };

  const editProduct = (product_id) => {
    localStorage.setItem("productId", product_id);
    navigate("/updateProduct");
    // navigate('/updateProduct',{state:{"product_id":product_id}});
    // console.log(product_id);
  };

  return (
    <>
      <div className="wrapper bg-white" id="View_Product">
        <Headers />
        <Sidemenu />
        <div className="content-wrapper bg-white">
          <div className="container">
            <div className="row g-2">
              {product.map((element,index) => {
                // console.log(element._id)
                return (
                  <div className="col-4  p-3" key={index}>
                    <div className="single-place mt-3 overflow-hidden">
                      <div className="place-img">
                        <img
                          src={element.product_imgurl}
                          className="card-img-top"
                        />
                      </div>
                      <div className="place-cap">
                        <div className="place-cap-top text-start px-3">
                          <h4 className="pt-3 text-truncate text-center title">
                            <a href="#">{element.product_title}</a>
                          </h4>
                          <p className="dolor text-center">Rs. {element.product_price}</p>
                          <div className="info2">
                          <p className="fw-500 scroll_controll">
                            <Scrollbars>
                              {element.product_discription}
                            </Scrollbars>
                          </p>
                          </div>
                        </div>
                        <div className="place-cap-bottom d-flex justify-content-evenly py-3">
                          <div className="">
                            <button
                              type="button"
                              className="btn btn-outline-success editbtn"
                              onClick={() => editProduct(element._id)}
                            >
                              Edit
                            </button>
                          </div>
                          <div className="">
                            <button
                              type="button"
                              onClick={() => deleteProduct(element._id)}
                              className="btn btn-outline-danger delbtn"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default View_Product;
