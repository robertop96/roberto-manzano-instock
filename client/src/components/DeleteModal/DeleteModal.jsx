import { useLocation } from 'react-router-dom';
import './DeleteModal.scss';
import closeIcon from '../../Assets/Icons/close-24px.svg';

const DeleteModal = ({ modalData, showModal, setShowModal, handleOnDelete }) => {
  const { pathname } = useLocation();
  return (
    <>
      {showModal && (
        <div className="modal__bg">
          <div className="modal__box">
            <div className="modal__text">
              <img className="modal__close" src={closeIcon} alt="close icon" onClick={() => setShowModal(false)} />
              <h1 className="modal__title">
                Delete {modalData.name} {modalData.itemName} {pathname === '/' ? 'warehouse' : 'inventory item'}?
              </h1>
              <p className="modal__p">
                Please confirm you want to delete {modalData.name} from the {pathname === '/' ? 'warehouse' : 'inventory'} list? You won't be able to
                undo this action.
              </p>
            </div>
            <div className="modal__buttons">
              <button className="modal__cancel" type="input" name="cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button onClick={() => handleOnDelete(modalData.id)} className="modal__delete" type="input" name="delete">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DeleteModal;
