import React, { useState, useEffect } from 'react';
import './Warehouse.scss';
import sort from '../../Assets/Icons/sort-24px.svg';
import { Link } from 'react-router-dom';
import DeleteModal from '../../components/DeleteModal';
import WarehouseList from '../../components/WarehouseList';
import { getWarehouses, deleteWarehouse } from '../../helpers/axiosCalls';

const Warehouse = () => {
  let [warehouseList, setWarehouseList] = useState(null);
  let [modalData, setModalData] = useState(null);
  let [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getWarehouses()
      .then((res) => setWarehouseList(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleOnClick = (warehouseData) => {
    setShowModal(!showModal);
    setModalData(warehouseData);
  };

  const handleOnDelete = (warehouseId) => {
    deleteWarehouse(warehouseId).then((res) => setWarehouseList(res.data));
    setShowModal(!showModal);
  };

  return (
    <div>
      {<DeleteModal handleOnDelete={handleOnDelete} showModal={showModal} setShowModal={setShowModal} modalData={modalData} />}
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
              <img className="bar__arrows--address" alt="Sort icon" src={sort} />
            </div>
            <div className="bar__labels">
              <h4>CONTACT NAME</h4>
              <img className="bar__arrows--name" alt="Sort icon" src={sort} />
            </div>
            <div className="bar__labels">
              <h4>CONTACT INFORMATION</h4>
              <img className="bar__arrows--info" alt="Sort icon" src={sort} />
            </div>
            <div className="bar__labels">
              <h4>ACTIONS</h4>
            </div>
          </div>
          <WarehouseList warehouseList={warehouseList} handleOnClick={handleOnClick} setShowModal={setShowModal} />
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
