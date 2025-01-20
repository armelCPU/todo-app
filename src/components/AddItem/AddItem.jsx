import React from 'react'
import { useState } from 'react'
import "./AddItem.css"

export default function AddItem({ addItem }) {

  const [newItem, setNewItem] = useState("")
  const handleValueChange = (event) => {
    setNewItem(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    addItem(newItem)
    setNewItem("")
  }
  return (
    <form action="" className='add-form' onSubmit={handleSubmit}>
        <label htmlFor="name" id='label' className='form-input'>Ajouter une chose à faire</label>
        <input 
            className='add-input form-input'
            id="name"
            type="text" 
            value={newItem} 
            onChange={(e) => handleValueChange(e)}
        />
        <input type="submit" value="Ajouter" className='form-input button-input' />
    </form>
  )
}
