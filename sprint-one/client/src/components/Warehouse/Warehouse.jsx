import React, { useEffect, useState, useCallback } from 'react';
import del from '../../Assets/Icons/delete_outline-24px.svg';
import edit from '../../Assets/Icons/edit-24px.svg';
import sort from '../../Assets/Icons/sort-24px.svg';
import arrow from '../../Assets/Icons/chevron_right-24px.svg';
import axios from 'axios';
import './Warehouse.scss';
import { Link } from 'react-router-dom';
import DeleteModal from '../DeleteModal/DeleteModal';


const Warehouse = () => {
  let [responseData, setResponseData] = useState(null);
  let [modalData, setModalData] = useState(null);
  let [showModal, setShowModal] = useState(false);
  const fetchData = useCallback(() => {
    axios({
      method: 'GET',
      url: '/api/warehouses/list/all',
      params: {
        language_code: 'en'
      }
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {showModal && (
        <DeleteModal
          setShowModal={setShowModal}
          data={modalData}
          setResponseData={setResponseData}
        />
      )}
      <div className="big-box">
      <div className={showModal ? 'warehouse hide' : 'warehouse'}>
        <div className="search">
          <div>
            <h1 className="search__title">Warehouses</h1>
          </div>
          <div>
            <input
              className="search__bar"
              type="text"
              name="search"
              placeholder="Search..."
            />
          </div>
          <div>
            <Link to="/warehouses/modify/add">
              <button className="search__button">+ Add New Warehouse </button>
            </Link>
          </div>
        </div>
        <div className="bar">
          <div className="bar__labels">
            <h4>WAREHOUSE</h4>
            <img className="bar__arrows--warehouse" src={sort} alt="sort" />
          </div>
          <div className="bar__labels">
            <h4>ADDRESS</h4>
            <img className="bar__arrows--address" src={sort} />
          </div>
          <div className="bar__labels">
            <h4>CONTACT NAME</h4>
            <img className="bar__arrows--name" src={sort} />
          </div>
          <div className="bar__labels">
            <h4>CONTACT INFORMATION</h4>
            <img className="bar__arrows--info" src={sort} />
          </div>
          <div className="bar__labels">
            <h4>ACTIONS</h4>
          </div>
        </div>

        {responseData?.map((data) => {
          return (
            <div key={data.id}>
              <div className="card">
                <div className="card__warehouse">
                  <h4 className="card__label">WAREHOUSE</h4>
                  <Link to={`/warehouses/${data.id}`}>
                    <div className="arrow__align">
                      <p className="card__text--name">{data.name}</p>
                      <img className="arrow" src={arrow} />
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
                    <img className="card__img--edit" src={edit} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Warehouse;
