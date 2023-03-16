import React from "react";

const Productcategory = () => {
  return (
    <div className="spacer-tb p-0" id="product_category">
      <div className="bottom_containt">
        <div className="product_list box">
          <div className="container">
            <div className="box_heading text-center">Popular Category</div>
            <div className="row align-items-center g-4">
                <div className="col-4">
                    <div className="product_box d-flex align-items-center">
                        <div className="text-dark">
                            <h4> Blood Pressure</h4>
                           <a><button className="view_more_btn">View More</button></a>
                        </div>
                        <div className="product_category_image">
                            <img src={require('./Images/assets/asset 6.png')}></img>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="product_box d-flex align-items-center">
                        <div className="text-dark">
                            <h4> Blood Pressure</h4>
                           <a><button className="view_more_btn">View More</button></a>
                        </div>
                        <div className="product_category_image">
                            <img src={require('./Images/assets/asset 8.png')}></img>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="product_box d-flex align-items-center">
                        <div className="text-dark">
                            <h4> Blood Pressure</h4>
                           <a><button className="view_more_btn">View More</button></a>
                        </div>
                        <div className="product_category_image">
                            <img src={require('./Images/assets/asset 9.png')}></img>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="product_box d-flex align-items-center">
                        <div className="text-dark">
                            <h4> Blood Pressure</h4>
                           <a><button className="view_more_btn">View More</button></a>
                        </div>
                        <div className="product_category_image">
                            <img src={require('./Images/assets/asset 10.png')}></img>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="product_box d-flex align-items-center">
                        <div className="text-dark">
                            <h4> Blood Pressure</h4>
                           <a><button className="view_more_btn">View More</button></a>
                        </div>
                        <div className="product_category_image">
                            <img src={require('./Images/assets/asset 11.png')}></img>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="product_box d-flex align-items-center">
                        <div className="text-dark">
                            <h4> Blood Pressure</h4>
                           <a><button className="view_more_btn">View More</button></a>
                        </div>
                        <div className="product_category_image">
                            <img src={require('./Images/assets/asset 12.png')}></img>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcategory;
