import './WarehouseModify.scss';
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import EditAddWarehouse from '../../components/EditWarehouse/EditAddWarehouse';
import validator from 'validator';
import isEmpty from '../../helpers/isEmpty';
import isPhone from '../../helpers/isPhone';
import {
  axiosPut,
  axiosPost,
  axiosGetWarehouse
} from '../../helpers/axiosCalls';

function WarehouseEdit(props) {
  const location = useLocation();
  const { id } = useParams();

  const edit = {
    title: 'Edit Warehouse',
    button: 'save',
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
        axiosPut(`/api/warehouses/${id}`, formDataObj);
        setTimeout(() => {
          props.history.push('/');
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
        axiosPost(`/api/warehouses/`, formDataObj);
        setTimeout(() => {
          props.history.push('/');
        }, 1000);
      }
    }
  };

  const handleClick = () => {
    props.history.push('/');
  };

  //States
  const [formInfo, setFormInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [warehouse, setWarehouse] = useState(null);

  useEffect(() => {
    axiosGetWarehouse(`/api/warehouses/${id}`, setWarehouse);
    if (location.pathname === '/warehouses/modify/add') {
      setFormInfo(add);
    } else {
      setFormInfo(edit);
    }
  }, [location]);

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
