import './ModifyWarehouse.scss';
import React, { useState, useEffect } from 'react';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg';
import validator from 'validator';
import isEmpty from '../../helpers/isEmpty';
import isPhone from '../../helpers/isPhone';
import { getSingleWarehouse } from '../../helpers/axiosCalls';

function WarehouseEdit({ match, history }) {
  const { id } = match.params;
  //States
  const [errorMessage, setErrorMessage] = useState(null);
  const [warehouse, setWarehouse] = useState(null);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (id) {
      getSingleWarehouse(id).then((res) => {
        setWarehouse(res.data.warehouse);
        setContact(res.data.warehouse.contact);
      });
    } else {
      setWarehouse({});
    }
  }, [id]);

  const handleWarehouse = (e, input) => {
    setWarehouse({ ...warehouse, [input]: e.target.value });
  };

  const handleContact = (e, input) => {
    setContact({ ...contact, [input]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const cat = { ...warehouse, contact: contact };
    console.log(cat);
  };

  return (
    <section className="warehouse-modify">
      <article className="warehouses-modify__header">
        <img
          className="warehouses-modify__icon"
          src={backArrow}
          alt="back arrow icon"
          onClick={() => history.goBack()}
        />
        <h2 className="warehouses-modify__title">{match.params.id ? 'Edit Warehouse' : 'Add Warehouse'}</h2>
      </article>
      {warehouse && (
        <WarehouseForm
          warehouse={warehouse}
          contact={contact}
          handleWarehouse={handleWarehouse}
          handleContact={handleContact}
          handleOnSubmit={handleOnSubmit}
          errorMessage={errorMessage}
          history={history}
          match={match}
        />
      )}
    </section>
  );
}

export default WarehouseEdit;
