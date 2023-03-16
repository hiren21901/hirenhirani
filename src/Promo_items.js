import React from "react";
import { GiCommercialAirplane, GiWallet } from "react-icons/gi";
import { FiGift } from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";

const Promo_items = () => {
  return (
    <>
      <div id="promo_items">
        <div className="service_item spacer-tb">
          <div className="container">
            <div className="row g-4">
              <div className="col-3">
                <div className="col service">
                  <div className="service_icon">
                    <GiCommercialAirplane className="promo_icon" />
                  </div>
                  <div>
                    <h5>FREE SHIPPING WORLDWIDE</h5>
                    <h6>On order over $150</h6>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className=" service">
                  <div className="service_icon">
                    <a>
                      <GiWallet />
                    </a>
                  </div>
                  <div>
                    <h5>CASH ON DELIVERY</h5>
                    <h6>100% money back guarantee</h6>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className=" service">
                  <div className="service_icon">
                    <a>
                      <FiGift />
                    </a>
                  </div>
                  <div>
                    <h5>SPECIAL GIFT CARD</h5>
                    <h6>Offer special bonuses with gift</h6>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="service">
                  <div className="service_icon">
                    <a>
                      <RiCustomerService2Fill />
                    </a>
                  </div>
                  <div>
                    <h5>24/7 CUSTOMER SERVICE</h5>
                    <h6>Call us 24/7 at 123-456-789</h6>
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

export default Promo_items;
