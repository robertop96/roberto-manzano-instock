import './InventoryForm.scss';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg';
import { useLocation } from 'react-router-dom';
import React from 'react';
import error from '../../Assets/Icons/error-24px.svg';

function InventoryForm({
  warehouse,
  inventoryItem,
  errorMessage,
  handleInventoryItem,
  handleOnSubmit,
  history,
  match,
}) {
  const location = useLocation();
  return (
    <section className="editInv-container">
      <article className="editInv-container__title-cont">
        <img
          className="editInv-container__title-cont--img"
          src={backArrow}
          alt="back arrow icon"
          onClick={() => history.goBack()}
        />
        <h2 className="editInv-container__title-cont--title">{match.params.id ? 'Edit Inventory' : 'Add Inventory'}</h2>
      </article>
      <form className="inv-form" onSubmit={handleOnSubmit}>
        <article className="inv-form__wrapper">
          <article className="inv-form__item-details">
            <h2 className="inv-form__item-details--title">Item Details</h2>
            <label className="inv-form__item-details--name-label" htmlFor="itemName">
              Item Name
            </label>
            <input
              className="inv-form__item-details--name-input"
              type="input"
              name="name"
              id="name"
              onChange={handleInventoryItem}
              value={inventoryItem ? inventoryItem.name : ''}
            />
            <div className="error-message">
              {errorMessage?.message ? <img src={error} alt="error" /> : ''}
              <h5> {errorMessage?.message}</h5>
            </div>

            <label className="inv-form__item-details--description-label" htmlFor="description">
              Description
            </label>
            <input
              className="inv-form__item-details--description-input"
              type="text"
              name="description"
              id="description"
              onChange={handleInventoryItem}
              value={inventoryItem ? inventoryItem.description : ''}
            />
            <div className="error-message">
              {errorMessage?.message ? <img src={error} alt="error" /> : ''}
              <h5> {errorMessage?.message}</h5>
            </div>
            <label className="inv-form__item-details--category-label" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="inv-form__item-details--category-options"
              onChange={handleInventoryItem}
              value={inventoryItem ? inventoryItem.category : ''}
            >
              <option value={inventoryItem.category}>{inventoryItem?.category}</option>
              <option value="Electronic">Electronic</option>
              <option value="Gears">Gears</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessory">Accessory</option>
              <option value="Health">Health</option>
            </select>
            <div className="error-message">
              {errorMessage?.message ? <img src={error} alt="error" /> : ''}
              <h5> {errorMessage?.message}</h5>
            </div>
          </article>

          <article className="inv-form__item-availability">
            <h3 className="inv-form__item-availability--title">Item Availability</h3>
            <h2 className="inv-form__item-availability--status-title">Status</h2>
            <div>
              <input
                className="inv-form__item-availability--status-inStock"
                type="radio"
                id="in-stock"
                name="status"
                value="In Stock"
                checked={inventoryItem?.status === 'In Stock'}
                onChange={handleInventoryItem}
              />
              <label className="inv-form__item-availability--status-inStock-label" htmlFor="out-stock">
                In Stock
              </label>
            </div>
            <div>
              <input
                className="inv-form__item-availability--status-outStock"
                type="radio"
                id="out-stock"
                name="status"
                value="Out of Stock"
                checked={inventoryItem?.status === 'Out of Stock'}
                onChange={handleInventoryItem}
              />
              <label className="inv-form__item-availability--status-outStock-label" htmlFor="out-stock">
                Out of Stock
              </label>
            </div>
            <div className="error-message">
              {errorMessage?.message ? <img src={error} alt="error" /> : ''}
              <h5> {errorMessage?.message}</h5>
            </div>
            <label
              className={
                inventoryItem.status === 'In Stock' ? 'inv-form__item-availability--quantity-label' : ' hidden'
              }
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              type="text"
              className={
                inventoryItem.status === 'In Stock' ? 'inv-form__item-availability--quantity-label' : ' hidden'
              }
              id="quantity"
              name="quantity"
              onChange={handleInventoryItem}
              value={inventoryItem ? inventoryItem.quantity : ''}
            />
            <div className={'stock' === 'In Stock' ? 'error-message' : 'hidden'}>
              {errorMessage?.message ? <img src={error} alt="error" /> : ''}
              <h5> {errorMessage?.message}</h5>
            </div>
            <label className="inv-form__item-availability--warehouse-label" htmlFor="warehouse">
              Warehouse
            </label>
            <select
              id="warehouseName"
              name="warehouseName"
              className="inv-form__item-availability--warehouse-options"
              onChange={handleInventoryItem}
              value={inventoryItem ? inventoryItem.warehouseName : ''}
            >
              {warehouse?.map((warehouse) => {
                return (
                  <option key={warehouse.id} value={warehouse.name}>
                    {warehouse.name}
                  </option>
                );
              })}
              <option value={inventoryItem?.warehouseName}>{inventoryItem?.warehouseName}</option>
            </select>
            <div className="error-message">
              {errorMessage?.message ? <img src={error} alt="error" /> : ''}
              <h5> {errorMessage?.message}</h5>
            </div>
          </article>
        </article>

        <article className="button">
          <button type="button" className="button__cancel">
            Cancel
          </button>
          <button type="submit" className={location.pathname === '/inventory/edit' ? 'button__save' : 'button__add'}>
            {match.params.id ? 'Edit Inventory' : 'Add Inventory'}
          </button>
        </article>
      </form>
    </section>
  );
}

export default InventoryForm;
