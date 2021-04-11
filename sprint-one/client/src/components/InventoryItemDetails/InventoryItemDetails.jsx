import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryD.css';
import arrowBack from '../../Assets/Icons/arrow_back-24px.svg';
import Header from '../Header/Header';
import axios from 'axios';

const InventoryItemDetails = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/inventory/${id}`)
      .then((response) => {
        setItemDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="Details">
      <Header />
      <div className="space"></div>
      <div className="main-box">
        <div className="main-box__header">
          <div className="main-box__Big-text">
            <h1>
              <img src={arrowBack} alt="back arrow"></img>{' '}
              {itemDetail?.itemName}
            </h1>
          </div>
          <div>
            <a href="/" className="main-box__btn">
              <i className="fas fa-pen"></i> Edit
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
            <p>{itemDetail?.description}</p>
            <br></br>
            <p>
              <span className="box-2__title">CATEGORY</span>
            </p>
            <p>{itemDetail?.category}</p>
          </div>
          <div className="box-2__col-2">
            <p>
              <span className="box-2__title">STATUS</span>
            </p>
            <p>{itemDetail?.status}</p>
            <p>
              <br></br>
              <span className="box-2__title">WAREHOUSE</span>
            </p>
            <p>{itemDetail?.warehouseName}</p>
          </div>
          <div className="box-2__col-3">
            <p>
              <span className="box-2__title">QUANTITY</span>
            </p>
            <p>{itemDetail?.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InventoryItemDetails;
