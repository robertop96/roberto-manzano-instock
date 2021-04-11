import './WarehouseModify.scss';
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import EditAddWarehouse from '../../components/EditWarehouse/EditAddWarehouse';
import validator from 'validator';
import axios from 'axios';
import isEmpty from '../../helpers/isEmpty';
import isPhone from '../../helpers/isPhone';

function WarehouseEdit(props) {
  const location = useLocation();
  const { id } = useParams();
  const [formInfo, setFormInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [warehouse, SetWarehouse] = useState(null);

  const axiosGet = async (url) => {
    try {
      let res = await axios.get(url);
      SetWarehouse(res.data.warehouse);
    } catch (err) {
      console.log(err);
    }
  };

  const axiosPut = async (url, obj) => {
    try {
      let res = await axios.put(url, obj);
    } catch (err) {
      console.log(err);
    }
  };

  const axiosPost = async (url, obj) => {
    try {
      let res = await axios.post(url, obj);
    } catch (err) {
      console.log(err);
    }
  };

  const edit = {
    title: 'Edit Warehouse',
    button: 'save',
    handleSubmit: (e) => {
      e.preventDefault();
      setErrorMessage(null);
      const formData = new FormData(e.target);
      const formDataObj = Object.fromEntries(formData);
      console.log(formDataObj);
      if (isEmpty(formDataObj)) {
        setErrorMessage({ message: 'This field is required' });
      } else if (!isPhone(formDataObj.phone)) {
        setErrorMessage({ phoneMessage: 'Invalid Phone Number' });
      } else if (!validator.isEmail(formDataObj.email + '')) {
        setErrorMessage({ emailMessage: 'Invalid Email' });
      } else {
        console.log(id);
        axiosPut(`/api/warehouse/${id}`, formDataObj);
        setTimeout(() => {
          props.history.push('/warehouses');
        }, 1000);
      }
    }
  };

  const add = {
    title: 'Add New Warehouse',
    button: '+ Add Warehouse',
    handleSubmit: (e) => {
      e.preventDefault();
      setErrorMessage(null);
      const formData = new FormData(e.target);
      const formDataObj = Object.fromEntries(formData);
      if (isEmpty(formDataObj)) {
        setErrorMessage({ message: 'This field is required' });
      } else if (!isPhone(formDataObj.phone)) {
        setErrorMessage({ phoneMessage: 'Invalid Phone Number' });
      } else if (!validator.isEmail(formDataObj.email + '')) {
        setErrorMessage({ emailMessage: 'Invalid Email' });
      } else {
        axiosPost(`/api/warehouse/`, formDataObj);
        setTimeout(() => {
          props.history.push('/warehouses');
        }, 1000);
      }
    }
  };

  const handleClick = () => {
    props.history.push('/warehouses');
  };

  useEffect(() => {
    axiosGet(`/api/warehouse/${id}`);
    if (location.pathname === '/warehouse/modify/add') {
      setFormInfo(add);
    } else {
      setFormInfo(edit);
    }
  }, []);

  return (
    <>
      {formInfo ? (
        <section className="position">
          <EditAddWarehouse
            formInfo={formInfo}
            errorMessage={errorMessage}
            warehouse={warehouse}
            handleClick={handleClick}
          />
        </section>
      ) : (
        ''
      )}
    </>
  );
}

export default WarehouseEdit;
