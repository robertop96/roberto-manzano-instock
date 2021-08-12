import React from 'react';
import './WarehouseList.scss';
import del from '../../Assets/Icons/delete_outline-24px.svg';
import edit from '../../Assets/Icons/edit-24px.svg';
import arrow from '../../Assets/Icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';

function WarehouseList({ warehouseList, setModalData, setShowModal }) {
  return (
    <>
      {warehouseList?.map((data) => {
        return (
          <div key={data.id}>
            <div className="card">
              <div className="card__warehouse">
                <h4 className="card__label">WAREHOUSE</h4>
                <Link to={`/warehouse/${data.id}`}>
                  <div className="arrow__align">
                    <p className="card__text--name">{data.name}</p>
                    <img className="arrow" alt="simple back arrow" src={arrow} />
                  </div>
                </Link>
              </div>
              <div className="card__address">
                <h4 className="card__label">ADDRESS</h4>
                <p className="card__text">
                  {data.address}, {''}
                  {data.city},{''} {data.country}
                </p>
              </div>
              <div>
                <img
                  className="card__img--delete"
                  src={del}
                  alt="delete card"
                  onClick={() => {
                    setModalData(data);
                    setShowModal(true);
                  }}
                />
              </div>
              <div className="card__name">
                <h4 className="card__label">CONTACT NAME</h4>
                <p className="card__text">{data.contact.name}</p>
              </div>
              <div className="card__info">
                <h4 className="card__label">CONTACT INFORMATION</h4>
                <p className="card__text--br">{data.contact.phone}</p>
                <p className="card__text--br">{data.contact.email}</p>
              </div>
              <div className="card__icons">
                <div>
                  <img
                    onClick={() => {
                      setModalData(data);
                      setShowModal(true);
                    }}
                    className="card__img--delete2"
                    src={del}
                    alt="delete card"
                  />
                </div>
                <Link to={`/warehouses/modify/${data.id}`}>
                  <img className="card__img--edit" alt="Simple pencil icon to edit warehouse" src={edit} />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WarehouseList;
