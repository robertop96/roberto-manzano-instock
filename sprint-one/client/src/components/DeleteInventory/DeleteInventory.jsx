import { useState, useEffect } from "react";
import "./DeleteInventory.scss";
import closeIcon from "../../Assets/Icons/close-24px.svg";

import axios from "axios";

const DeleteModal = () => {
  const [item, setItem] = useState();

  const handleDelete = () => {
    axios.delete(`/api/inventory/${item.id}`);
  };

  return (
    <>
      <div className="modal__bg">
        <div className="modal__box">
          <div className="modal__text">
            <img className="modal__close" src={closeIcon} alt="close icon" />

            <h1 className="modal__title"> Delete ITEM inventory item?</h1>

            <p className="modal__p">
              Please confirm you want to delete ITEM from the inventory list.
              You won't be able to undo this action
            </p>
          </div>
          <div className="modal__buttons">
            <button className="modal__cancel" type="input" name="cancel">
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="modal__delete"
              type="input"
              name="delete"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteModal;
