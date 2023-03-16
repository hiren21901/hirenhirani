import React, { useState } from "react";

const Trending_products = () => {
  const [active, setactive] = useState(0)
  return (
    <>
      <div id="trending_products" className="spacer-tb trending_product">
        <div className="container">
          <div className="title">
            <div className="box_heading mb-7">Trending Products</div>
            <div className="nav_tabs">
              <div className="trending_product_btn text-center">
                <button className={active===0 ?"active":""} onClick={()=>{setactive(0)}}>Rubber Gloves</button>
                <button className={active===1 ?"active":""} onClick={()=>{setactive(1)}}>Thermometer</button>
                <button className={active===2 ?"active":""} onClick={()=>{setactive(2)}}>Surgical Mask</button>
              </div>
                {/* <ul className="row align-items-center">
                    <li className="col-4 text-end fs-5 btn bg-primary text-light p-2"><a>Rubber Gloves</a></li>
                    <li className="col-4 text-center fs-5 bg-success text-light p-2"><a>Thermometer</a></li>
                    <li className="col-4 text-start fs-5 bg-info text-light p-2"><a>Surgical Mask</a></li>
                </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending_products;
