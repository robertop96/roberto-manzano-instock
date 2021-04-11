import './InventoryModify.sass';
import EditAddInventory from '../../components/EditAddInventory/EditAddInventory';
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import isEmpty from '../../helpers/isEmpty';
import isPhone from '../../helpers/isPhone';
import validator from 'validator';

function InventoryModify(props) {
  const location = useLocation();
  const { id } = useParams();
  const [formInfo, setFormInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [warehouse, SetWarehouse] = useState(null);
  const [stock, setStock] = useState(false);

  const axiosGet = async (url) => {
    try {
      let res = await axios.get(url);
      SetWarehouse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const axiosPut = async (url, obj) => {
    try {
      await axios.put(url, obj);
    } catch (err) {
      console.log(err);
    }
  };

  const axiosPost = async (url, obj) => {
    try {
      await axios.post(url, obj);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setStock(e.target.value);
    console.log(e.target.value);
  };

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
        console.log(id);
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
      console.log(formDataObj);
      if (isEmpty(formDataObj)) {
        setErrorMessage({ message: 'This field is required' });
      } else {
        console.log(id);
        axiosPut(`/api/inventory/${id}`, formDataObj);
        setTimeout(() => {
          props.history.push('/inventory');
        }, 1000);
      }
    }
  };

  useEffect(() => {
    axiosGet(`/api/warehouse/list/all`);
    if (location.pathname === '/inventory/modify/add') {
      setFormInfo(add);
    } else {
      setFormInfo(edit);
    }
  }, []);

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
          />
        </section>
      ) : (
        ''
      )}
    </>
  );
}

export default InventoryModify;
