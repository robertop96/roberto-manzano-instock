import React, { useEffect, useState, useCallback } from 'react';
import del from '../../Assets/Icons/delete_outline-24px.svg';
import edit from '../../Assets/Icons/edit-24px.svg';
import sort from '../../Assets/Icons/sort-24px.svg';
import arrow from '../../Assets/Icons/chevron_right-24px.svg';
import axios from 'axios';
import './Warehouse.scss';
import { Link } from 'react-router-dom';
import DeleteModal from '../../components/DeleteModal';
import WarehouseList from '../../components/WarehouseList';

const Warehouse = () => {
  let [warehouseList, setWarehouseList] = useState(null);
  let [modalData, setModalData] = useState(null);
  let [showModal, setShowModal] = useState(false);
  const fetchData = useCallback(() => {
    axios({
      method: 'GET',
      url: '/api/warehouses/list/all',
      params: {
        language_code: 'en',
      },
    })
      .then((response) => {
        setWarehouseList(response.data);
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
      {showModal && <DeleteModal setShowModal={setShowModal} data={modalData} setWarehouseList={setWarehouseList} />}
      <div className="big-box">
        <div className={showModal ? 'warehouse hide' : 'warehouse'}>
          <div className="search">
            <div>
              <h1 className="search__title">Warehouses</h1>
            </div>
            <div>
              <input className="search__bar" type="text" name="search" placeholder="Search..." />
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
          <WarehouseList warehouseList={warehouseList} setModalData={setModalData} setShowModal={setShowModal} />
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
