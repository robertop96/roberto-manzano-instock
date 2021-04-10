import './WarehouseModify.scss';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EditAddWarehouse from '../../components/EditWarehouse/EditAddWarehouse';
import validator from 'validator';

function WarehouseEdit(props) {
  const location = useLocation();

  const edit = {
    title: 'Edit Warehouse',
    button: 'save',
    handleSubmit: (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formDataObj = Object.fromEntries(formData);
      console.log(formDataObj);

      for (const property in formDataObj) {
        if (formDataObj[property] === '') {
          setErrorMessage({ message: 'This field is required' });
          break;
        } else if (!validator.isMobilePhone(formDataObj['phone-number'] + '')) {
          setErrorMessage({ phoneMessage: 'Invalid Phone Number' });
          break;
        } else if (!validator.isEmail(formDataObj.email + '')) {
          setErrorMessage({ emailMessage: 'Invalid Email' });
          break;
        }
        setErrorMessage(null);
      }
    }
  };

  const add = {
    title: 'Edit Warehouse',
    button: 'save',
    handleSubmit: (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formDataObj = Object.fromEntries(formData);
      console.log(formDataObj);

      for (const property in formDataObj) {
        if (formDataObj[property] === '') {
          setErrorMessage({ message: 'This field is required' });
          break;
        } else if (!validator.isMobilePhone(formDataObj['phone-number'] + '')) {
          setErrorMessage({ phoneMessage: 'Invalid Phone Number' });
          break;
        } else if (!validator.isEmail(formDataObj.email + '')) {
          setErrorMessage({ emailMessage: 'Invalid Email' });
          break;
        }
        setErrorMessage(null);
      }
    }
  };

  const [formInfo, setFormInfo] = useState(add);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (location.pathname === '/warehouse/edit') {
      setFormInfo(edit);
    } else if (location.pathname === '/warehouse/add') {
      setFormInfo(add);
    }
  }, [props.match.path]);

  return (
    <section className="position">
      <EditAddWarehouse formInfo={formInfo} errorMessage={errorMessage} />
    </section>
  );
}

export default WarehouseEdit;
