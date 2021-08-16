import './ModifyWarehouse.scss';
import React, { useState, useEffect } from 'react';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
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

  return (
    <>
      {warehouse && (
        <section className="position">
          <WarehouseForm
            warehouse={warehouse}
            handleWarehouse={handleWarehouse}
            contact={contact}
            handleContact={handleContact}
            errorMessage={errorMessage}
            history={history}
            match={match}
          />
        </section>
      )}
    </>
  );
}

export default WarehouseEdit;
