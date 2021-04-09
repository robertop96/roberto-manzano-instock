import './WarehouseModify.scss';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EditAddWarehouse from '../../components/EditWarehouse/EditAddWarehouse';

function WarehouseEdit() {
  const location = useLocation();

  const edit = {
    title: 'Edit Warehouse',
    button: 'save',
    handleEdit: (e) => {
      e.preventDefault();
      // if (all input == "" ){
      //   alert()
      // }
    }
  };

  const add = {
    title: 'Add New Warehouse',
    button: '+ Add Warehouse'
  };

  const [formInfo, setFormInfo] = useState(edit);

  // useEffect(() => {
  //   setFormInfo(add);
  // }, [location.pathname]);

  return (
    <section className="position">
      <EditAddWarehouse formInfo={formInfo} />
    </section>
  );
}

export default WarehouseEdit;
