import React, { useState } from "react";
import "./warehouseDeatils.scss";
import locationJson from "../../data/warehouses.json";
import itemJson from "../../data/inventories.json";
import backArrow from "../../Assets/Icons/arrow_back-24px.svg";
import chevronRight from "../../Assets/Icons/chevron_right-24px.svg";
import editInfo from "../../Assets/Icons/edit-24px.svg";
import trash from "../../Assets/Icons/delete_outline-24px.svg";
import pencil from "../../Assets/Icons/edit-24px.svg";

const WarehouseDeatils = () => {
  let [list, setList] = useState(locationJson);
  let [item, setItem] = useState(itemJson);

  return (
    list.map((loc) => {
      return (
        <section className="big-box">
          <div className="warehouse-container">
            <div className="arrow-box">
              <img src={backArrow} alt="back-arrow" />
              <h1>{loc.name}</h1>
            </div>
            <div className="edit-box">
              <button className="btn">
                <img className="edit" src={editInfo} alt="edit" />
              </button>
            </div>
          </div>
          <div className="address-container">
            <h5>WAREHOUSE ADDRESS:</h5>
            <p>{loc.address}</p>
            <p>
              {loc.city}, {loc.country}
            </p>
          </div>

          <div className="contact-container">
            <div className="contact-container__left">
              <h5>CONTACT NAME:</h5>
              <p>{loc.contact.name}</p>
              <p>{loc.contact.position}</p>
            </div>

            <div className="contact-container__right">
              <h5>CONTACT INFORMATION:</h5>
              <p>{loc.contact.phone}</p>
              <p>{loc.contact.email}</p>
            </div>
          </div>
        </section>
      );
    }),
    item.map((inv) => {
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
    })
  );
};

export default WarehouseDeatils;
