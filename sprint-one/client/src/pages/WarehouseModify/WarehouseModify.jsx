import "./WarehouseModify.scss";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EditAddWarehouse from "../../components/EditWarehouse/EditAddWarehouse";

function WarehouseEdit() {
  const location = useLocation();

  const edit = {
    title: "Edit Warehouse",
    button: "save",
    handleEdit: () => {
      console.log(5);
    },
  };

  const add = {
    title: "Add New Warehouse",
    button: "+ Add Warehouse",
  };

  const [formInfo, setFormInfo] = useState(edit);

  return (
    <section className="position">
      <EditAddWarehouse formInfo={formInfo} />
    </section>
  );
}

export default WarehouseEdit;
