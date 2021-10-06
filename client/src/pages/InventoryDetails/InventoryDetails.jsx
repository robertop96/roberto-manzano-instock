import './InventoryDetails.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrowBackIcon from '../../Assets/Icons/arrow_back-24px.svg';
import editIcon from '../../Assets/Icons/edit-24px.svg';
import { Link } from 'react-router-dom';
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
      <section>
        <div className="item-details-header">
          <img className="item-details-header__icon" src={arrowBackIcon} alt="Back" onClick={history.goBack} />
          <h1 className="item-details-header__header">{itemDetails.itemName}</h1>
          <Link
            className="item-details-header__button item-details-header__button--primary item-details-header__button--circle"
            to={`/warehouses/modify/${itemDetails.id}`}
          >
            <img className="item-details-header__icon item-details-header__icon--light" src={editIcon} alt="Edit" />
          </Link>
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
      </section>
    )
  );
};
export default InventoryDetails;
