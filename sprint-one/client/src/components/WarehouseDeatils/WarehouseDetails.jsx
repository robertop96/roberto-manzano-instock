import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './warehouseDeatils.scss';
import sort from '../../Assets/Icons/sort-24px.svg';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg';
import chevronRight from '../../Assets/Icons/chevron_right-24px.svg';
import editInfo from '../../Assets/Icons/edit-24px.svg';
import trash from '../../Assets/Icons/delete_outline-24px.svg';
import pencil from '../../Assets/Icons/edit-24px.svg';
import axios from 'axios';

const WarehouseDeatils = () => {
  const { id } = useParams();

  const [warehouse, setWarehouse] = useState([]);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/warehouses/${id}`)
      .then((resp) => {
        setWarehouse(resp.data.warehouse);
        setInventory(resp.data.warehouseInventory);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <section className="big-box">
      <div className="background-container" />
      <div className="card-container">
        <div className="warehouse-container">
          <div className="arrow-box">
            <img src={backArrow} alt="back-arrow" />
            <h1>{warehouse?.name}</h1>
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
              <p>{warehouse.contact?.name}</p>
              <p>{warehouse.contact?.position}</p>
            </div>
            <div className="contact-container__right">
              <h4>CONTACT INFORMATION:</h4>
              <p>{warehouse.contact?.phone}</p>
              <p>{warehouse.contact?.email}</p>
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
        {inventory.map((inv) => {
          return (
            <section className="invetory-container">
              <div className="inventory-flex-container">
                <div className="inv-stat-flex">
                  <div className="item-container">
                    <h4 className="mobile-info">INVENTORY ITEM</h4>
                    <div className="chevron-box">
                      <a href="http://picsum.com">
                        <h3>{inv.itemName}</h3>
                      </a>
                      <img src={chevronRight} alt="chevron" />
                    </div>
                  </div>
                  <div className="category-container">
                    <h4 className="mobile-info">CATEGORY</h4>
                    <p>{inv.category}</p>
                  </div>
                </div>

                <div className="inv-stat-flex">
                  <div className="staus-container">
                    <h4 className="mobile-info"> STATUS</h4>
                    <button
                      className={
                        inv.status === 'In Stock' ? 'status-btn' : 'status-out'
                      }
                    >
                      {inv.status}
                    </button>
                  </div>
                  <div className="qty-container">
                    <h4 className="mobile-info">QTY</h4>
                    <p>{inv.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="icon-container">
                <img className="trash" src={trash} alt="trash" />
                <img src={pencil} alt="pencil" />
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default WarehouseDeatils;
