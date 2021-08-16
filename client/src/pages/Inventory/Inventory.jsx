import './Inventory.scss';
import React, { useEffect, useState } from 'react';
import sort from '../../Assets/Icons/sort-24px.svg';
import DeleteModal from '../../components/DeleteModal';
import InventoryList from '../../components/InventoryList';
import { getInventoryItems, deleteInventoryItem } from '../../helpers/axiosCalls';
import { Link } from 'react-router-dom';

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    getInventoryItems()
      .then((res) => setInventoryItems(res.data))
      .then(() => console.log('I ran'))
      .catch((error) => console.log(error));
  }, [render]);

  // Opens Modal and Sets The modal data to be the item clicked.
  const handleOnClick = (inventoryData) => {
    setShowModal(!showModal);
    setModalData(inventoryData);
  };
  // Deletes the item clicked then changes the showModal to false.
  const handleOnDelete = (itemId) => {
    deleteInventoryItem(itemId);
    setShowModal(!showModal);
    setRender(!render);
  };
  return (
    <>
      {<DeleteModal showModal={showModal} setShowModal={setShowModal} modalData={modalData} handleOnDelete={handleOnDelete} />}
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
          <InventoryList inventoryItems={inventoryItems} setModalData={setModalData} handleOnClick={handleOnClick} />
        </div>
      </div>
    </>
  );
};

export default Inventory;
