import './Warehouse.scss';
import React, { useState, useEffect } from 'react';
import search from '../../Assets/Icons/search-24px.svg';
import { Link } from 'react-router-dom';
import DeleteModal from '../../components/DeleteModal';
import WarehouseList from '../../components/WarehouseList';
import SortingBar from '../../components/SortingBar/SortingBar';
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
    <section className="warehouses">
      <article className="warehouses-header">
        <h1 className="warehouses-header__header">Warehouses</h1>
        <div className="warehouses-header__search">
          <input className="warehouses-header__search--input" type="text" name="search" placeholder="Search..." />
          <img className="warehouses-header__search--icon" src={search} alt="search" />
        </div>
        <Link className="warehouses-header__button warehouses-header__button--primary" to="/warehouses/modify/add">
          + Add New Warehouse
        </Link>
      </article>
      <SortingBar labels={['WAREHOUSE', 'ADDRESS', 'CONTACT NAME', 'CONTACT INFORMATION']} />
      <WarehouseList warehouseList={warehouseList} handleOnClick={handleOnClick} setShowModal={setShowModal} />
      {<DeleteModal handleOnDelete={handleOnDelete} showModal={showModal} setShowModal={setShowModal} modalData={modalData} />}
    </section>
  );
};

export default Warehouse;
