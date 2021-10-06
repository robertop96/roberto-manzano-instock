import React from 'react';
import './InventoryList.scss';
import deleteIcon from '../../Assets/Icons/delete_outline-24px.svg';
import editIcon from '../../Assets/Icons/edit-24px.svg';
import chevron from '../../Assets/Icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';

function InventoryList({ inventoryItems, handleOnClick }) {
  return (
    <section className="inventory-list">
      {inventoryItems?.map((item) => (
        <article className="inventory-list__container" key={item.id}>
          <article className="inventory-list__item inventory-list__item--big-width">
            <h3 className="inventory-list__title">INVENTORY ITEM</h3>
            <Link className="inventory-list__link" to={`/inventory/${item.id}`}>
              <p className="inventory-list__text">{item.name}</p>
              <img src={chevron} alt="view warehouse" className="inventory-list__chevron" />
            </Link>
          </article>
          <article className="inventory-list__item inventory-list__item--big-width">
            <h3 className="inventory-list__title">CATEGORY</h3>
            <p className="inventory-list__text">{item.category}</p>
          </article>
          <article className="inventory-list__item inventory-list__item--big-width">
            <h3 className="inventory-list__title">STATUS</h3>
            <p className="inventory-list__text">{item.status}</p>
          </article>
          <article className="inventory-list__item inventory-list__item--big-width">
            <h3 className="inventory-list__title">QTY</h3>
            <p className="inventory-list__text">{item.quantity}</p>
          </article>
          <article className="inventory-list__item inventory-list__item--big-width">
            <h3 className="inventory-list__title">WAREHOUSE</h3>
            <p className="inventory-list__text">{item.warehouseName}</p>
          </article>
          <article className="inventory-list__modify inventory-list__item--small-width">
            <figure className="inventory-list__figure">
              <img src={deleteIcon} alt="delete" onClick={() => handleOnClick(item)} />
            </figure>
            <Link to={`/inventory/modify/${item.id}`}>
              <img src={editIcon} alt="edit" />
            </Link>
          </article>
        </article>
      ))}
    </section>
  );
}

export default InventoryList;
