import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegHeart, FaEye } from "react-icons/fa";
import { Scrollbars } from "react-custom-scrollbars-2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { add } from "./Redux/CreateSlice/cartSlice";
import { useDispatch } from "react-redux";

const Home_product = () => {
  const [product, setproduct] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/product/getallproduct")
      .then((response) => {
        let data = response.data;
        // console.log(response.data);
        setproduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const AddToCart = (item) => {
    // navigate('/AddToCart')
    dispatch(add(item));
    console.log(item);
  };
  return (
    <>
      <div id="home_product" className="spacer-tb">
        <div className="container">
          <div className="row gy-5">
            {product.map((item, index) => {
              return (
                <>
                  <div className="col-3" key={index}>
                    <div className="card mt-3 overflow-hidden">
                      <div className="product align-items-center p-2 text-center">
                        <div className="product_img">
                          <img src={item.product_imgurl} width={"60%"}></img>
                        </div>
                        <h5 className="p-1 mt-4 title text-truncate">{item.product_title}</h5>

                        {/* <div className="info">
                          <p className="scroll_controll">
                            <Scrollbars className="">
                              {item.product_discription}
                            </Scrollbars>
                          </p>
                        </div> */}
                        <div className="cost text-dark">
                          <div className="text-center mt-3">
                            ₹ {item.product_price}
                          </div>
                          <div className="star align-items-center text-center mt-3">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                          </div>
                        </div>
                        <div className="single_product text-center text-white mt-3 cursor">
                          <Link to="/AddToCart" className="text-light">
                            <button
                              className="text-uppercase btn-cart"
                              onClick={() => {
                                AddToCart(item);
                              }}
                            >
                              Add to Cart{" "}
                            </button>
                          </Link>

                          {/* <button className="btn-fav"><FaRegHeart/></button> */}
                          {/* <button className="btn-view"><FaEye/></button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_product;
