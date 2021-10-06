import React from 'react';
import './WarehouseList.scss';
import deleteIcon from '../../Assets/Icons/delete_outline-24px.svg';
import editIcon from '../../Assets/Icons/edit-24px.svg';
import chevron from '../../Assets/Icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';

function WarehouseList({ warehouseList, handleOnClick }) {
  return (
    <section className="warehouse-list">
      {warehouseList?.map((warehouse) => (
        <article className="warehouse-list__container" key={warehouse.id}>
          <article className="warehouse-list__item warehouse-list__item--big-width">
            <h3 className="warehouse-list__title">WAREHOUSE</h3>
            <Link className="warehouse-list__link" to={`/warehouse/${warehouse.id}`}>
              <p className="warehouse-list__text">{warehouse.name}</p>
              <img src={chevron} alt="view warehouse" className="warehouse-list__chevron" />
            </Link>
          </article>
          <article className="warehouse-list__item warehouse-list__item--big-width">
            <h3 className="warehouse-list__title">ADDRESS</h3>
            <p className="warehouse-list__text">
              {warehouse.address}, {warehouse.city}, {warehouse.country}
            </p>
          </article>
          <article className="warehouse-list__item warehouse-list__item--big-width">
            <h3 className="warehouse-list__title">CONTACT NAME</h3>
            <p className="warehouse-list__text">{warehouse.contact.name}</p>
          </article>
          <article className="warehouse-list__item warehouse-list__item--big-width">
            <h3 className="warehouse-list__title">CONTACT INFORMATION</h3>
            <p className="warehouse-list__text">{warehouse.contact.phone}</p>
            <p className="warehouse-list__text">{warehouse.contact.email}</p>
          </article>
          <article className="warehouse-list__modify warehouse-list__item--small-width">
            <figure className="warehouse-list__figure">
              <img src={deleteIcon} alt="delete" onClick={() => handleOnClick(warehouse)} />
            </figure>
            <Link to={`/warehouses/modify/${warehouse.id}`}>
              <img src={editIcon} alt="edit" />
            </Link>
          </article>
        </article>
      ))}
    </section>
  );
}

export default WarehouseList;
