import './InventoryDetails.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrowBack from '../../Assets/Icons/arrow_back-24px.svg';
import { getItem } from '../../helpers/axiosCalls';

const InventoryDetails = ({ history }) => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(
    () =>
      getItem(id)
        .then((res) => setItemDetails(res.data))
        .catch((error) => console.log(error)),
    [id]
  );

  return (
    itemDetails && (
      <div className="Details">
        <div className="space"></div>
        <div className="main-box">
          <div className="main-box__header">
            <div className="main-box__Big-text">
              <img src={arrowBack} alt="back arrow" onClick={history.goBack}></img>
              <h1>{itemDetails.name}</h1>
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
              <p>{itemDetails.description}</p>
              <br></br>
              <p>
                <span className="box-2__title">CATEGORY</span>
              </p>
              <p>{itemDetails.category}</p>
            </div>
            <div className="box-2__col-2">
              <p>
                <span className="box-2__title">STATUS</span>
              </p>
              <p>{itemDetails.status}</p>
              <p>
                <br></br>
                <span className="box-2__title">WAREHOUSE</span>
              </p>
              <p>{itemDetails.warehouseName}</p>
            </div>
            <div className="box-2__col-3">
              <p>
                <span className="box-2__title">QUANTITY</span>
              </p>
              <p>{itemDetails.quantity}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default InventoryDetails;
