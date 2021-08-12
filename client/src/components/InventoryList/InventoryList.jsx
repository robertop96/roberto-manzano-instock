import React from 'react';
import './InventoryList.scss';
import del from '../../Assets/Icons/delete_outline-24px.svg';
import edit from '../../Assets/Icons/edit-24px.svg';
import arrow from '../../Assets/Icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';

function InventoryList({ InventoryItems, setShowModal, setModalData }) {
  return (
    <div>
      {InventoryItems?.map((data) => {
        return (
          <div key={data.id}>
            <div className="cardI">
              <div className="cardI__item">
                <h4 className="cardI__label">INVENTORY ITEM</h4>
                <Link to={`/inventory/${data.id}`}>
                  <div className="arrow__align">
                    <p className="cardI__text--name">{data.itemName}</p>
                    <img alt="arrow" className="arrow" src={arrow} />
                  </div>
                </Link>
              </div>
              <div className="cardI__category">
                <h4 className="cardI__label">CATEGORY</h4>
                <p className="cardI__text">{data.category}</p>
              </div>
              <div>
                <Link to={`/`}>
                  <img
                    alt="delete icon"
                    className="cardI__img--delete"
                    src={del}
                    onClick={() => {
                      setModalData(data);
                      setShowModal(true);
                    }}
                  />
                </Link>
              </div>

              <div className="cardI__status">
                <h4 className="cardI__label">STATUS</h4>
                <button className={data.status === 'In Stock' ? 'status-btn' : 'status-out'}>{data.status}</button>
              </div>
              <div className="cardI__qty">
                <h4 className="cardI__label">QTY</h4>
                <p className="cardI__text--br">{data.quantity}</p>
              </div>
              <div className="cardI__warehouse">
                <h4 className="cardI__label">WAREHOUSE</h4>
                <p className="cardI__text--br">{data.warehouseName}</p>
              </div>
              <div className="cardI__icons">
                <div>
                  <Link>
                    <img
                      alt="delete icon"
                      className="cardI__img--delete2"
                      src={del}
                      onClick={() => {
                        setModalData(data);
                        setShowModal(true);
                      }}
                    />
                  </Link>
                </div>
                <Link to={`/inventory/modify/${data.id}`}>
                  <img alt="edit-icon" className="cardI__img--edit" src={edit} />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default InventoryList;
