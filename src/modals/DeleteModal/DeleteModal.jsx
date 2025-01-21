import React from 'react'
import "../modals.css"
import closeIcon from "../../assets/close.png"

export default function DeleteModal({itemId, onDelete, setShowDeleteModal}) {

  function handleDelete() {
    onDelete(itemId)
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
            <p>{`Voulez-vous vraiment supprimer l'élement d'ID ${itemId}` }</p>
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
