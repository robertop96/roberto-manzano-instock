import './WarehouseModify.scss';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EditAddWarehouse from '../../components/EditWarehouse/EditAddWarehouse';

function WarehouseEdit(props) {
  const location = useLocation();
  console.log(location.pathname);
  console.log(props.match.path);

  const edit = {
    title: 'Edit Warehouse',
    button: 'save',
    handleSubmit: (e) => {
      e.preventDefault();
      console.log('edit');
    }
  };

  const add = {
    title: 'Add New Warehouse',
    button: '+ Add Warehouse',
    handleSubmit: (e) => {
      e.preventDefault();
      console.log('add');
    }
  };

  const [formInfo, setFormInfo] = useState(add);

  useEffect(() => {
    if (location.pathname === '/warehouse/edit') {
      setFormInfo(edit);
    } else if (location.pathname === '/warehouse/add') {
      setFormInfo(add);
    }
  }, [props.match.path]);

  return (
    <section className="position">
      <EditAddWarehouse formInfo={formInfo} />
    </section>
  );
}

export default WarehouseEdit;
