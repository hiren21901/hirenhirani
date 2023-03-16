import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { GrFormSubtract } from "react-icons/gr";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { remove } from "./Redux/CreateSlice/cartSlice";

const Add_To_Cart = () => {
  const totalItems = useSelector((state) => state.cart);
  const displayCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItems = (item) => {
    dispatch(remove(item));
    console.log(item)
  };
  return (
    <>
      <div id="add_to_cart">
        <div className="container">
          <div className="row cart_main mt-2">
            <div className="col-6">
              <div className="cart_navigation">
                <span>
                  <h6>
                    <Link to="/">
                      <BsArrowLeft /> Continue Shopping
                    </Link>
                  </h6>
                </span>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="cart_navigation">
                <span>
                  <h6>Total Cart Items: {totalItems.length}</h6>
                </span>
              </div>
            </div>
          </div>
          <table className="mt-5">
            <tr className="bg-dark name_plate text-center">
              <th className="text-start">Image</th>
              <th>Title</th>
              <th>Quntity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>

            {displayCart.map((item, index) => {
              return (
                <tr className="cart_box_2 text-center" key={item._id}>
                  <td width={"400px"} className="text-start">
                    <img src={item.product_imgurl} width="30%"></img>
                  </td>
                  <td style={{ width: "25%" }}>
                    <h6 className="cart_producttitle">{item.product_title} </h6>
                  </td>
                  <td>
                    <h4>
                      <span>
                        <button>
                          <GrFormSubtract />
                        </button>
                      </span>{" "}
                      1{" "}
                      <span>
                        <button>
                          <GoPlus />
                        </button>
                      </span>
                    </h4>
                  </td>
                  <td>
                    <h4>₹ {item.product_price} </h4>
                  </td>
                  <td>
                    <h4
                      className="text-danger"
                      onClick={() => {
                        removeItems(item);
                      }}
                    >
                      <RiDeleteBin6Line />{" "}
                    </h4>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Add_To_Cart;
