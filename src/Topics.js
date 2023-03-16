import React from "react";

const Topics = () => {
  return (
    <>
      <div id="Topicbar" className="topbar">
        <div className="top_topics">
          <div className="top_containt">
            <div id="category" className="category">
              <div className="container">
                <div>
                  <ul className="row m-0 p-0">
                    <li className="category_item first col">
                      <div className="category_inner">
                        <div className="category_image_icon category_image_icon_1 d-flex">
                          <img
                            src={require("./Images/assets/01.png")}
                            style={{ width: "22%" }}
                            className="cateogry_img p-2"
                          ></img>
                          <span className="ms-3">
                            <div className="category_title text-start">
                              Heartiness
                            </div>
                            <div className="category_disc">
                              Over 25000 Products
                            </div>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="category_item second col p-0">
                      <div className="category_inner">
                        <div className="category_image_icon category_image_icon_2 d-flex">
                          <img
                            src={require("./Images/assets/02.png")}
                            style={{ width: "22%",fontSize:"12px"}}
                            className="cateogry_img p-2"
                          ></img>
                          <span className="ms-3">
                            <div className="category_title text-start">
                              Individual
                            </div>
                            <div className="category_disc">
                              Book Tests & Checkups
                            </div>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="category_item second col p-0">
                      <div className="category_inner">
                        <div className="category_image_icon category_image_icon_3 d-flex">
                          <img
                            src={require("./Images/assets/03.png")}
                            style={{ width: "22%" }}
                            className="cateogry_img p-2"
                          ></img>
                          <span className="ms-3">
                            <div className="category_title text-start">
                              Medication
                            </div>
                            <div className="category_disc">
                              Over 25000 Products
                            </div>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="category_item second col p-0">
                      <div className="category_inner">
                        <div className="category_image_icon category_image_icon_4 d-flex">
                          <img
                            src={require("./Images/assets/04.png")}
                            style={{ width: "22%" }}
                            className="cateogry_img p-2"
                          ></img>
                          <span className="ms-3">
                            <div className="category_title text-start">
                              Health Center
                            </div>
                            <div className="category_disc">
                              Trending Health Experts
                            </div>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="category_item second col p-0">
                      <div className="category_inner">
                        <div className="category_image_icon category_image_icon_5 d-flex">
                          <img
                            src={require("./Images/assets/05.png")}
                            style={{ width: "28%" }}
                            className="cateogry_img p-2"
                          ></img>
                          <span className="ms-3">
                            <div className="category_title text-start">
                              Others
                            </div>
                            <div className="category_disc">
                              More Information
                            </div>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topics;
