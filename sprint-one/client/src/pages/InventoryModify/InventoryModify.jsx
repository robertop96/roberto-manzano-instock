import './InventoryModify.sass';
import EditAddInventory from '../../components/EditAddInventory/EditAddInventory';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import validator from 'validator';

function InventoryModify(props) {
  const location = useLocation();

  const handleChange = (e) => {
    setStock(e.target.value);
  };

  const edit = {
    title: 'Edit Inventory Item',
    button: 'save',
    handleSubmit: (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formDataObj = Object.fromEntries(formData);

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
    title: 'Add New Inventory Item',
    button: '+ Add item',
    handleSubmit: (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formDataObj = Object.fromEntries(formData);

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
  const [stock, setStock] = useState(false);

  useEffect(() => {
    if (location.pathname === '/inventory/edit') {
      setFormInfo(edit);
    } else if (location.pathname === '/inventory/add') {
      setFormInfo(add);
    }
  }, [props.match.path]);

  return (
    <section className="position">
      <EditAddInventory
        formInfo={formInfo}
        errorMessage={errorMessage}
        handleChange={handleChange}
        stock={stock}
      />
    </section>
  );
}

export default InventoryModify;
