import React from "react";
// import "./App.scss";
import "./InventoryD.css";
import arrowBack from "../../Assets/Icons/arrow_back-24px.svg";
import Header from "../Header/Header";

const InventoryItemDetails = () => {
  return (
    <div className="Details">
      <Header />
      <div className="space"></div>
      <div className="main-box">
        <div className="main-box__header">
          <div classname="main-box__Big-text">
            <h1>
              <img src={arrowBack} alt="back arrow"></img> Television
            </h1>
          </div>
          <div>
            <a href="/" className="main-box__btn">
              <i class="fas fa-pen"></i> Edit
            </a>
          </div>
        </div>
      </div>
      <div className="box-2">
        <div className="box-2__details">
          <div className="box-2__col-1">
            <p>
              <span className="box-2__title">ITEM DESCRIPTION</span>
            </p>
            <p>
              This 50", 4K LED TV provides a crystal-clear picture and vivid
              colors.
            </p>
            <br></br>
            <p>
              <span className="box-2__title">CATEGORY</span>
            </p>
            <p>ELECTRONICS</p>
          </div>
          <div className="box-2__col-2">
            <p>
              <span className="box-2__title">STATUS</span>
            </p>
            <p>INSTOCK</p>
            <p>
              <br></br>
              <span className="box-2__title">WAREHOUSE</span>
            </p>
            <p>Manhattan</p>
          </div>
          <div className="box-2__col-3">
            <p>
              <span className="box-2__title">QUANTITY</span>
            </p>
            <p>5000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InventoryItemDetails;
