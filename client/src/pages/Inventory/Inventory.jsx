import './Inventory.scss';
import React, { useEffect, useState, useCallback } from 'react';
import del from '../../Assets/Icons/delete_outline-24px.svg';
import edit from '../../Assets/Icons/edit-24px.svg';
import sort from '../../Assets/Icons/sort-24px.svg';
import arrow from '../../Assets/Icons/chevron_right-24px.svg';
import axios from 'axios';
import DeleteModal from '../../components/DeleteModal';
import InventoryList from '../../components/InventoryList';

import { Link } from 'react-router-dom';

const Inventory = () => {
  let [InventoryItems, setInventoryItems] = useState(null);
  let [modalData, setModalData] = useState('');
  let [showModal, setShowModal] = useState(false);

  const fetchData = useCallback(() => {
    axios({
      method: 'GET',
      url: '/api/inventory/list',
      params: {
        language_code: 'en',
      },
    })
      .then((response) => {
        setInventoryItems(response.data);
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
      {<DeleteModal setShowModal={setShowModal} data={modalData} setInventoryItems={setInventoryItems} showModal={showModal} />}
      <div className="big-box">
        <div className={showModal ? 'inventory hide' : 'inventory'}>
          <div className="searchI">
            <div>
              <h1 className="searchI__title">Inventory</h1>
            </div>
            <div>
              <input className="searchI__bar" type="text" name="searchI" placeholder="Search..." />
            </div>
            <div>
              <Link to="/inventory/modify/add">
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
          <InventoryList InventoryItems={InventoryItems} setShowModal={setShowModal} setModalData={setModalData} />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
