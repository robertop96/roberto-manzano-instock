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
    <section className="position">
      <EditAddWarehouse formInfo={formInfo} />
    </section>
  );
}

export default WarehouseEdit;
