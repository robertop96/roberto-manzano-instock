import './EditAddWarehouse.scss';
import { useLocation } from 'react-router-dom';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg';
import error from '../../Assets/Icons/error-24px.svg';

function EditWarehouse({ formInfo, errorMessage, warehouse, handleClick }) {
  const location = useLocation();

  return (
    <section className="edit-container">
      <article className="edit-container__title-cont">
        <img
          className="edit-container__title-cont--img"
          src={backArrow}
          alt="back arrow icon"
        />
        <h2 className="edit-container__title-cont--title">{formInfo.title}</h2>
      </article>
      <form onSubmit={formInfo.handleSubmit} className="form">
        <article className="form__wrapper">
          <article className="form__warehouse">
            <h2 className="form__warehouse--title">Warehouse Details</h2>
            <label className="form__warehouse--name-label" htmlFor="name">
              Warehouse Name
            </label>
            <input
              className="form__warehouse--name-input"
              type="input"
              name="name"
              id="name"
              defaultValue={warehouse?.name || ''}
            />
            <div className="error-message">
              {errorMessage?.message ? <img src={error} alt="error" /> : ''}
              <h5> {errorMessage?.message}</h5>
            </div>
            <label className="form__warehouse--address-label" htmlFor="address">
              Street Address
            </label>
            <input
              className="form__warehouse--address-input"
              type="text"
              name="address"
              id="address"
              defaultValue={warehouse?.address || ''}
            />
            <div className="error-message">
              {errorMessage?.message ? <img src={error} alt="error" /> : ''}
              <h5> {errorMessage?.message}</h5>
            </div>
            <label className="form__warehouse--city-label" htmlFor="city">
              City
            </label>
            <input
              className="form__warehouse--city-input"
              type="text"
              name="city"
              id="city"
              defaultValue={warehouse?.city || ''}
            />
            <div className="error-message">
              {errorMessage?.message ? <img src={error} alt="error" /> : ''}
              <h5> {errorMessage?.message}</h5>
            </div>
            <label className="form__warehouse--country-label" htmlFor="country">
              Country
            </label>
            <input
              className="form__warehouse--country-input"
              type="text"
              name="country"
              id="country"
              defaultValue={warehouse?.country || ''}
            />
            <div className="error-message">
              {errorMessage?.message ? <img src={error} alt="error" /> : ''}
              <h5> {errorMessage?.message}</h5>
            </div>
          </article>
          <article className="form__contact">
            <h2 className="form__contact--title">Contact Details</h2>
            <label className="form__contact--name-label" htmlFor="cname">
              Contact Name
            </label>
            <input
              className="form__contact--name-input"
              type="text"
              name="cname"
              id="cname"
              defaultValue={warehouse?.contact.name || ''}
            />
            <div className="error-message">
              {errorMessage?.message ? <img src={error} alt="error" /> : ''}
              <h5> {errorMessage?.message}</h5>
            </div>
            <label className="form__contact--position-label" htmlFor="position">
              Position
            </label>
            <input
              className="form__contact--position-input"
              type="text"
              name="position"
              id="position"
              defaultValue={warehouse?.contact.position || ''}
            />
            <div className="error-message">
              {errorMessage?.message ? <img src={error} alt="error" /> : ''}
              <h5> {errorMessage?.message}</h5>
            </div>
            <label className="form__contact--phone-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="form__contact--phone-input"
              type="tel"
              name="phone"
              id="phone"
              defaultValue={warehouse?.contact.phone || ''}
            />
            <div className="error-message">
              {errorMessage?.phoneMessage || errorMessage?.message ? (
                <img src={error} alt="error" />
              ) : (
                ''
              )}
              <h5> {errorMessage?.message || errorMessage?.phoneMessage}</h5>
            </div>
            <label className="form__contact--email-label" htmlFor="email">
              Email
            </label>
            <input
              className="form__contact--email-input"
              type="text"
              name="email"
              id="email"
              defaultValue={warehouse?.contact.email || ''}
            />
            <div className="error-message">
              {errorMessage?.emailMessage || errorMessage?.message ? (
                <img src={error} alt="error" />
              ) : (
                ''
              )}
              <h5> {errorMessage?.message || errorMessage?.emailMessage}</h5>
            </div>
          </article>
        </article>

        <article className="button">
          <button
            onClick={handleClick}
            type="button"
            className="button__cancel"
          >
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

export default EditWarehouse;
