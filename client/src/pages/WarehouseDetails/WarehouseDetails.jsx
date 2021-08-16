import './WarehouseDetails.scss';
import React, { useState, useEffect } from 'react';
import sort from '../../Assets/Icons/sort-24px.svg';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg';
import editInfo from '../../Assets/Icons/edit-24px.svg';
import InventoryList from '../../components/InventoryList';
import DeleteModal from '../../components/DeleteModal';
import { getSingleWarehouse, deleteInventoryItem } from '../../helpers/axiosCalls';

const WarehouseDetails = ({ history, match }) => {
  const [warehouse, setWarehouse] = useState(null);
  const [inventoryItems, setInventoryItems] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [render, setRender] = useState(false);

  const { id } = match.params;

  useEffect(() => {
    getSingleWarehouse(id)
      .then((res) => {
        setWarehouse(res.data.warehouse);
        setInventoryItems(res.data.warehouseInventory);
      })
      .catch((error) => console.log(error));
  }, [id, render]);
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
    warehouse &&
    inventoryItems && (
      <>
        <DeleteModal modalData={modalData} showModal={showModal} setShowModal={setShowModal} handleOnDelete={handleOnDelete} />
        <section className="big-box">
          <div className="background-container" />
          <div className="card-container">
            <div className="warehouse-container">
              <div className="arrow-box">
                <img src={backArrow} alt="back-arrow" onClick={history.goBack} />
                <h1>{warehouse.name}</h1>
              </div>
              <div className="edit-box">
                <button className="btn">
                  <div className="edit-img-flex">
                    <img className="edit" src={editInfo} alt="edit" />
                    <h3 className="edit-text">Edit</h3>
                  </div>
                </button>
              </div>
            </div>
            <div className="address-contact__container">
              <div className="address-container">
                <h4>WAREHOUSE ADDRESS:</h4>
                <p>{warehouse.address}</p>
                <p>
                  {warehouse.city}, {warehouse?.country}
                </p>
              </div>
              <div className="contact-container">
                <div className="contact-container__left">
                  <h4>CONTACT NAME:</h4>
                  <p>{warehouse.contact.name}</p>
                  <p>{warehouse.contact.position}</p>
                </div>
                <div className="contact-container__right">
                  <h4>CONTACT INFORMATION:</h4>
                  <p>{warehouse.contact.phone}</p>
                  <p>{warehouse.contact.email}</p>
                </div>
              </div>
            </div>
            <div className="tablet-label__container">
              <h4 className="tablet-label">
                INVENTORY ITEM
                <img src={sort} alt="" />
              </h4>
              <h4 className="tablet-label">
                CATEGORY
                <img src={sort} alt="" />
              </h4>
              <h4 className="tablet-label">
                STATUS
                <img src={sort} alt="" />
              </h4>
              <h4 className="tablet-label">
                QUANTITY
                <img src={sort} alt="" />
              </h4>
              <h4 className="tablet-label">ACTIONS</h4>
            </div>
            <InventoryList inventoryItems={inventoryItems} handleOnClick={handleOnClick} />
          </div>
        </section>
      </>
    )
  );
};

export default WarehouseDetails;
