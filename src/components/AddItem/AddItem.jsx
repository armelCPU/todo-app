import React from 'react'
import { useState, useContext } from 'react'
import {ItemsContext} from "../../contexts/ItemsContext"
import "./AddItem.css"


export default function AddItem() {

  const [newItem, setNewItem] = useState("")

  const {addItem} = useContext(ItemsContext);

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
        <label htmlFor="name" id='label' className='form-input'>Ajouter quelque chose à faire</label>
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
