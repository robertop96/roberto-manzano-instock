import './InventoryModify.sass';
import EditAddInventory from '../../components/EditAddInventory/EditAddInventory';
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import isEmpty from '../../helpers/isEmpty';
import {
  axiosPut,
  axiosPost,
  axiosGetInventory
} from '../../helpers/axiosCalls';

function InventoryModify(props) {
  const location = useLocation();
  const { id } = useParams();

  const add = {
    title: 'Add New Inventory Item',
    button: '+ Add item',
    handleSubmit: (e) => {
      e.preventDefault();
      setErrorMessage(null);
      const formData = new FormData(e.target);
      const formDataObj = Object.fromEntries(formData);
      if (isEmpty(formDataObj)) {
        setErrorMessage({ message: 'This field is required' });
      } else {
        axiosPost(`/api/inventory/`, formDataObj);
        setTimeout(() => {
          props.history.push('/inventory');
        }, 1000);
      }
    }
  };

  const edit = {
    title: 'Edit Inventory Item',
    button: 'save',
    handleSubmit: (e) => {
      e.preventDefault();
      setErrorMessage(null);
      const formData = new FormData(e.target);
      let formDataObj = Object.fromEntries(formData);
      formDataObj.warehouseID = id;
      if (isEmpty(formDataObj)) {
        setErrorMessage({ message: 'This field is required' });
      } else {
        axiosPut(`/api/inventory/${id}`, formDataObj);
        setTimeout(() => {
          props.history.push('/inventory');
        }, 1000);
      }
    }
  };

  const handleChange = (e) => {
    setStock(e.target.value);
  };

  const handleClick = () => {
    props.history.push('/');
  };

  // States
  const [formInfo, setFormInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [warehouse, setWarehouse] = useState(null);
  const [stock, setStock] = useState(false);
  const [inventoryItem, setInventoryItem] = useState(null);

  useEffect(() => {
    axiosGetInventory(`/api/warehouses/list/all`, setWarehouse);
    axiosGetInventory(`/api/inventory/${id}`, setInventoryItem);

    if (location.pathname === '/inventory/modify/add') {
      setFormInfo(add);
    } else {
      setFormInfo(edit);
    }
  }, [location]);

  return (
    <>
      {formInfo ? (
        <section className="position">
          <EditAddInventory
            formInfo={formInfo}
            errorMessage={errorMessage}
            handleChange={handleChange}
            stock={stock}
            warehouse={warehouse}
            handleClick={handleClick}
            inventoryItem={inventoryItem}
          />
        </section>
      ) : (
        ''
      )}
    </>
  );
}

export default InventoryModify;
