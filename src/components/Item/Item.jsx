import React from 'react'
import "./Item.css"
import DeleteImg from "../../assets/delete.png"
import { useState } from 'react'

export default function Item( {item, onDelete, onUpdate} ) {
  const [editing, setEditing] = useState(false)

  const itemRef = React.useRef(null);

  const handleOnchange = (id, e) => {
    onUpdate(id, e.target.value)
  }

  const handleOnMouseEnter = () => {
    itemRef.current.classList.add("item-hover")
    setEditing(true)
  }

  const handleOnMouseLeave = () => {
    itemRef.current.classList.remove("item-hover")
    setEditing(false)
  }

  return (
    <div 
        className="item" ref={itemRef} 
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
    >
        <input
            type="text"
            id="item-text"
            onChange={(e) => handleOnchange(item.id, e)}
            value={item.name}
            disabled={!editing} 
        />
        <img 
            src={DeleteImg} alt="delete item" 
            onClick={() => onDelete(item.id)}
        />
    </div>
  )
}
