import './WarehouseModify.scss';
import React, { useState, useEffect } from 'react';
import EditAddWarehouse from '../../components/EditWarehouse/EditAddWarehouse';

function WarehouseEdit() {
  const edit = {
    title: 'Edit Warehouse',
    button: 'save'
  };

  const add = {
    title: 'Add New Warehouse',
    button: '+ Add Warehouse'
  };

  const [formInfo, setFormInfo] = useState(edit);

  return (
    <section>
      <h1>NavbarMockup</h1>
      <EditAddWarehouse formInfo={formInfo} />
      <h1>Footer Mockup</h1>
    </section>
  );
}

export default WarehouseEdit;
