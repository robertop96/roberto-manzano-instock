import React, { useEffect, useState, useCallback } from 'react';
import del from '../../Assets/Icons/delete_outline-24px.svg';
import edit from '../../Assets/Icons/edit-24px.svg';
import sort from '../../Assets/Icons/sort-24px.svg';
import arrow from '../../Assets/Icons/chevron_right-24px.svg';
import axios from 'axios';
import './InventoryList.scss';

import { Link } from 'react-router-dom';
import DeleteModal from '../DeleteModal/DeleteModal';

const InventoryList = (props) => {
  let [responseData, setResponseData] = useState(null);
  let [modalData, setModalData] = useState(null);
  let [showModal, setShowModal] = useState(false);

  const fetchData = useCallback(() => {
    axios({
      method: 'GET',
      url: '/api/inventory/list',
      params: {
        language_code: 'en'
      }
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {showModal && (
        <DeleteModal setShowModal={setShowModal} data={modalData}  setResponseData={setResponseData} />
      )}
     <div className="big-box">
      <div className={showModal ? 'inventory hide' : 'inventory'}>
        <div className="searchI">
          <div>
            <h1 className="searchI__title">Inventory</h1>
          </div>
          <div>
            <input
              className="searchI__bar"
              type="text"
              name="searchI"
              placeholder="Search..."
            />
          </div>
          <div>
            <Link to="/inventory/modify/add">
              {' '}
              <button className="searchI__button">+ Add New Item </button>
            </Link>
          </div>
        </div>
        <div className="barI">
          <div className="barI__labels">
            <h4>INVENTORY ITEM</h4>
            <img alt="icon" className="barI__arrows--item" src={sort} />
          </div>
          <div className="barI__labels">
            <h4>CATEGORY</h4>
            <img alt="icon" className="barI__arrows--category" src={sort} />
          </div>
          <div className="barI__labels">
            <h4>STATUS</h4>
            <img alt="icon" className="barI__arrows--status" src={sort} />
          </div>
          <div className="barI__labels">
            <h4>QTY</h4>
            <img alt="icon" className="barI__arrows--qty" src={sort} />
          </div>
          <div className="barI__labels">
            <h4>WAREHOUSE</h4>
            <img alt="icon" className="barI__arrows--warehouse" src={sort} />
          </div>
          <div className="barI__labels">
            <h4>ACTIONS</h4>
          </div>
        </div>
        {responseData?.map((data) => {
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
                  <button
                    className={
                      data.status === 'In Stock' ? 'status-btn' : 'status-out'
                    }
                  >
                    {data.status}
                  </button>
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
                      {' '}
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
                    {' '}
                    <img
                      alt="edit-icon"
                      className="cardI__img--edit"
                      src={edit}
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default InventoryList;
