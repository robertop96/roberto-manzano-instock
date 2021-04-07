import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./warehouseDeatils.scss";
import locationJson from "../../data/warehouses.json";
import itemJson from "../../data/inventories.json";
import backArrow from "../../Assets/Icons/arrow_back-24px.svg";
import chevronRight from "../../Assets/Icons/chevron_right-24px.svg";
import editInfo from "../../Assets/Icons/edit-24px.svg";
import trash from "../../Assets/Icons/delete_outline-24px.svg";
import pencil from "../../Assets/Icons/edit-24px.svg";
import axios from "axios";

const WarehouseDeatils = () => {
  const { id } = useParams();
  // let [list, setList] = useState(locationJson);
  // let [item, setItem] = useState(itemJson);
  const [warehouse, setWarehouse] = useState(null);
  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    // TODO verify URL
    axios
      .get(`/warehouses/${id}`)
      .then((resp) => {
        // TODO verify response
        setWarehouse(resp.data.warehouse);
        setInventory(resp.data.warehouseInventory);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <section className="big-box">
      <div className="warehouse-container">
        <div className="arrow-box">
          <img src={backArrow} alt="back-arrow" />
          <h1>{warehouse.name}</h1>
        </div>
        <div className="edit-box">
          <button className="btn">
            <img className="edit" src={editInfo} alt="edit" />
          </button>
        </div>
      </div>
      <div className="address-container">
        <h5>WAREHOUSE ADDRESS:</h5>
        <p>{warehouse.address}</p>
        <p>
          {warehouse.city}, {warehouse.country}
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-container__left">
          <h5>CONTACT NAME:</h5>
          <p>{warehouse.contact.name}</p>
          <p>{warehouse.contact.position}</p>
        </div>
        <div className="contact-container__right">
          <h5>CONTACT INFORMATION:</h5>
          <p>{warehouse.contact.phone}</p>
          <p>{warehouse.contact.email}</p>
        </div>
      </div>
      {inventory.map((inv) => {
        return (
          <section className="invetory-container">
            <div className="inventory-flex-container">
              <div className="inv-stat-flex">
                <div className="item-container">
                  <h3>INVENTORY ITEM</h3>
                  <a href="http://picsum.com">
                    {inv.itemName} <img src={chevronRight} alt="chevron" />
                  </a>
                </div>
                <div className="staus-container">
                  <h3> STATUS</h3>
                  <button className="status-btn">{inv.status}</button>
                </div>
              </div>
              <div className="inv-stat-flex">
                <div className="category-container">
                  <p>CATEGORY</p>
                  <p>{inv.category}</p>
                </div>
                <div className="qty-container">
                  <h3>QTY</h3>
                  <p>{inv.quantity}</p>
                </div>
              </div>
              <div className="icon-container">
                <img src={trash} alt="trash" />
                <img src={pencil} alt="pencil" />
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default WarehouseDeatils;
