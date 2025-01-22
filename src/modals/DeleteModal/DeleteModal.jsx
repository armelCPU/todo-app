import React from 'react'
import "../modals.css"
import closeIcon from "../../assets/close.png"
import {ItemsContext} from "../../contexts/ItemsContext"
import { useContext } from 'react'

export default function DeleteModal() {

  const {
    idToDelete, 
    onDelete,
    setShowDeleteModal, 
  } = useContext(ItemsContext);

  function handleDelete() {
    onDelete(idToDelete)
    setShowDeleteModal(false)
  }
  
  return (
    <div className="modal-layout">
      <div className="modal-container">
        <div className="close-block">
            <img 
              src={closeIcon} alt=""
              onClick={ () => setShowDeleteModal(false)}
            />
        </div>
        <div className='modal-body'>
            <p>{`Voulez-vous vraiment supprimer l'élement d'ID ${idToDelete}` }</p>
        </div>
        <div className="confirm-buttons">
            <button onClick={ () => setShowDeleteModal(false)}>
              Annuler
            </button>
            <button onClick={handleDelete}>
              Valider
            </button>
        </div>
      </div>
    </div>
  )
}
