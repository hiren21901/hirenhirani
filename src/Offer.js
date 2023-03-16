import React from "react";

const Offer = () => {
  return (
    <>
      <div id="offer_page">
        <div className="spacer-tb">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="offer_box align-items-center">
                  <div className="offer_heading">
                    <h4 className="text-danger">Biggest Offer</h4>
                    <h3>Shop Surgical Mask</h3>
                  </div>
                  <div className="offer_image overflow-hidden">
                    <img src={require("./Images/Cms-Banner-01.jpg")} width={'100%'}></img>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="offer_box align-items-center">
                  <div className="offer_heading">
                    <h4 className="text-danger">Festival Offer</h4>
                    <h3>Shop Rubber Gloves</h3>
                  </div>
                  <div className="offer_image overflow-hidden">
                    <img src={require("./Images/Cms-Banner-02.jpg")} width={'100%'}></img>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="offer_box align-items-center">
                  <div className="offer_heading">
                    <h4 className="text-danger">Summer Offer</h4>
                    <h3>Shop Hand Senitizer</h3>
                  </div>
                  <div className="offer_image overflow-hidden">
                    <img src={require("./Images/Cms-Banner-03.jpg")} width={'100%'}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
