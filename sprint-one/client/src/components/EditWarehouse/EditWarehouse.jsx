import './EditWarehouse.scss';
import React from 'react';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg';

function EditWarehouse() {
  return (
    <section className="edit-container">
      <article className="edit-container__title-cont">
        <img
          className="edit-container__title-cont--img"
          src={backArrow}
          alt="back arrow icon"
        />
        <h2 className="edit-container__title-cont--title">Edit Warehouse</h2>
      </article>
      <form className="form">
        <article className="form__warehouse">
          <h2 className="form__warehouse--title">Warehouse Details</h2>
          <label className="form__warehouse--name-label" for="warehouse-name">
            Warehouse Name
          </label>
          <input
            className="form__warehouse--name-input"
            type="input"
            name="warehouse-name"
            id="warehouse-name"
            required
          />
          <label className="form__warehouse-address-label" for="address">
            Street Address
          </label>
          <input
            className="form__warehouse--address-input"
            type="text"
            name="address"
            id="address"
            required
          />
          <label className="form__warehouse--city-label" for="city">
            City
          </label>
          <input
            className="form__warehouse--city-input"
            type="text"
            name="city"
            id="city"
            required
          />
          <label className="form__warehouse--country-label" for="country">
            Country
          </label>
          <input
            className="form__warehouse--country-input"
            type="text"
            name="country"
            id="country"
            required
          />
        </article>
        <article className="form__contact">
          <h2 className="form__contact--title">Contact Details</h2>
          <label className="form__contact--name-label" for="contact-name">
            Contact Name
          </label>
          <input
            className="form__contact--name-input"
            type="text"
            name="contact-name"
            id="contact-name"
            required
          />
          <label className="form__contact--position-label" for="position">
            Position
          </label>
          <input
            className="form__contact--position-input"
            type="text"
            name="position"
            id="position"
            required
          />
          <label className="form__contact--phone-label" for="phone-number">
            Phone Number
          </label>
          <input
            className="form__contact--phone-input"
            type="tel"
            name="phone-number"
            id="phone-number"
            required
          />
          <label className="form__contact--email-label" for="email">
            Email
          </label>
          <input
            className="form__contact--email-input"
            type="email"
            name="email"
            id="email"
            required
          />
        </article>
      </form>
      <articles className="button">
        <button className="button__cancel">Cancel</button>
        <button className="button__save">Save</button>
      </articles>
    </section>
  );
}

export default EditWarehouse;
