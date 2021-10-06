import './Inventory.scss';
import React, { useEffect, useState } from 'react';
import SearchIcon from '../../Assets/Icons/search-24px.svg';
import DeleteModal from '../../components/DeleteModal';
import InventoryList from '../../components/InventoryList';
import SortingBar from '../../components/SortingBar/SortingBar';
import { getInventoryItems, deleteInventoryItem } from '../../helpers/axiosCalls';
import { Link } from 'react-router-dom';

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    getInventoryItems()
      .then((res) => setInventoryItems(res.data))
      .catch((error) => console.log(error));
  }, [render]);

  // Opens Modal and Sets The modal data to be the item clicked.
  const handleOnClick = (inventoryData) => {
    setShowModal(!showModal);
    setModalData(inventoryData);
  };
  // Deletes the item clicked then changes the showModal to false.
  const handleOnDelete = (itemId) => {
    deleteInventoryItem(itemId);
    setShowModal(!showModal);
    setRender(!render);
  };
  return (
    <section className="inventories">
      <article className="inventories-header">
        <h1 className="inventories-header__header">Inventory</h1>
        <div className="inventories-header__search">
          <input className="inventories-header__search--input" type="text" placeholder="Search..." />
          <img className="inventories-header__search--icon" src={SearchIcon} alt="search" />
        </div>
        <Link className="inventories-header__button inventories-header__button--primary" to="/inventory/modify/add">
          + Add New Item
        </Link>
      </article>
      <SortingBar labels={['INVENTORY ITEM', 'CATEGORY', 'STATUS', 'QTY', 'WAREHOUSE']} />
      <InventoryList inventoryItems={inventoryItems} setModalData={setModalData} handleOnClick={handleOnClick} />
      {<DeleteModal showModal={showModal} setShowModal={setShowModal} modalData={modalData} handleOnDelete={handleOnDelete} />}
    </section>
  );
};

export default Inventory;
