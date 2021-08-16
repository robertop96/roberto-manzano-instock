import './ModifyInventory.sass';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import React, { useState, useEffect } from 'react';
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
  return (
    <>
      {inventoryItem && (
        <section className="position">
          <InventoryForm
            inventoryItem={inventoryItem}
            warehouse={warehouse}
            handleInventoryItem={handleInventoryItem}
            handleOnSubmit={handleOnSubmit}
            errorMessage={errorMessage}
            history={history}
            match={match}
          />
        </section>
      )}
    </>
  );
}

export default InventoryModify;
