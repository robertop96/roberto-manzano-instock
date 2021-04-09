import './InventoryModify.sass';
import EditAddInventory from '../../components/EditAddInventory/EditAddInventory';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function InventoryModify(props) {
  const location = useLocation();
  console.log(location.pathname);
  console.log(props.match.path);

  const edit = {
    title: 'Edit Inventory',
    button: 'save',
    handleSubmit: (e) => {
      e.preventDefault();
      console.log('edit');
    }
  };

  const add = {
    title: 'Add New Inventory Item',
    button: '+ Add Item',
    handleSubmit: (e) => {
      e.preventDefault();
      console.log('add');
    }
  };

  const [formInfo, setFormInfo] = useState(add);

  useEffect(() => {
    if (location.pathname === '/inventory/edit') {
      setFormInfo(edit);
    } else if (location.pathname === '/inventory/add') {
      setFormInfo(add);
    }
  }, [props.match.path]);

  return (
    <section className="position">
      <EditAddInventory formInfo={formInfo} />
    </section>
  );
}

export default InventoryModify;
