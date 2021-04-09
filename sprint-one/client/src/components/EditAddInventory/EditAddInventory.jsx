import './EditAddInventory.scss';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg';
import { useLocation } from 'react-router-dom';

import React from 'react';

function EditInventory({ formInfo }) {
  const location = useLocation();
  return (
    <section className="editInv-container">
      <article className="editInv-container__title-cont">
        <img
          className="editInv-container__title-cont--img"
          src={backArrow}
          alt="back arrow icon"
        />
        <h2 className="editInv-container__title-cont--title">
          {formInfo.title}
        </h2>
      </article>
      <form className="inv-form" onSubmit={formInfo.handleSubmit}>
        <article className="inv-form__wrapper">
          <article className="inv-form__item-details">
            <h2 className="inv-form__item-details--title">Item Details</h2>
            <label
              className="inv-form__item-details--name-label"
              htmlFor="item-name"
            >
              Item Name
            </label>
            <input
              className="inv-form__item-details--name-input"
              type="input"
              name="item-name"
              id="item-name"
            />
            <label
              className="inv-form__item-details--description-label"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="inv-form__item-details--description-input"
              type="text"
              name="description"
              id="description"
            />
            <label
              className="inv-form__item-details--category-label"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="inv-form__item-details--category-options"
            >
              {/* {categories.map((category) => {
              return <option value={category.category}>{category.category}</option>
            })} */}
              <option value="choose">Please select</option>
            </select>
          </article>

          <article className="inv-form__item-availability">
            <h3 className="inv-form__item-availability--title">
              Item Availability
            </h3>
            <h2 className="inv-form__item-availability--status-title">
              Status
            </h2>
            <div>
              <input
                className="inv-form__item-availability--status-inStock"
                type="radio"
                id="in-stock"
                name="stock"
                value="in-stock"
              />
              <label
                className="inv-form__item-availability--status-inStock-label"
                htmlFor="out-stock"
              >
                In Stock
              </label>
              <input
                className="inv-form__item-availability--status-outStock"
                type="radio"
                id="out-stock"
                name="stock"
                value="out-stock"
              />
              <label
                className="inv-form__item-availability--status-outStock-label"
                htmlFor="out-stock"
              >
                Out of Stock
              </label>
            </div>
            <label
              className="inv-form__item-availability--quantity-label"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              type="text"
              className="inv-form__item-availability--quantity-input"
              id="quantity"
              name="quantity"
            />
            <label
              className="inv-form__item-availability--warehouse-label"
              htmlFor="warehouse"
            >
              Warehouse
            </label>
            <select
              id="warehouse"
              name="warehouse"
              className="inv-form__item-availability--warehouse-options"
            >
              {/* {warehouses.map((warehouse) => {
              return <option value={warehouse.warehouse}>{warehouse.warehouse}</option>
            })} */}
              <option value="choose">Please select</option>
            </select>
          </article>
        </article>

        <article className="button">
          <button type="submit" className="button__cancel">
            Cancel
          </button>
          <button
            type="submit"
            className={
              location.pathname === '/warehouse/edit'
                ? 'button__save'
                : 'button__add'
            }
          >
            {formInfo.button}
          </button>
        </article>
      </form>
    </section>
  );
}

export default EditInventory;
