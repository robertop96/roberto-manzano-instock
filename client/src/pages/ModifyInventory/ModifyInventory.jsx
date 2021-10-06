import './ModifyInventory.scss';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import React, { useState, useEffect } from 'react';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg';
import isEmpty from '../../helpers/isEmpty';
import { getItem, getWarehouses } from '../../helpers/axiosCalls';

function InventoryModify({ match, history }) {
  // States
  const [inventoryItem, setInventoryItem] = useState(null);
  const [warehouse, setWarehouse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [stock, setStock] = useState(false);

  const { id } = match.params;

  useEffect(() => {
    if (id) {
      getWarehouses().then((res) => setWarehouse(res.data));
      getItem(id).then((res) => setInventoryItem(res.data));
    } else {
      getWarehouses().then((res) => setWarehouse(res.data));
      setInventoryItem({});
    }
  }, [id]);

  const handleInventoryItem = (e) => {
    setInventoryItem({ ...inventoryItem, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(inventoryItem);
  };

  const trail = () => {
    setErrorMessage(false);
  };
  return (
    <section className="inventory-modify">
      <article className="inventory-modify__header">
        <img
          className="inventory-modify__icon"
          src={backArrow}
          alt="back arrow icon"
          onClick={() => history.goBack()}
        />
        <h2 className="inventory-modify__title">{match.params.id ? 'Edit Inventory' : 'Add Inventory'}</h2>
      </article>
      {inventoryItem && (
        <InventoryForm
          inventoryItem={inventoryItem}
          warehouse={warehouse}
          handleInventoryItem={handleInventoryItem}
          handleOnSubmit={handleOnSubmit}
          errorMessage={errorMessage}
          history={history}
          match={match}
        />
      )}
    </section>
  );
}

export default InventoryModify;
