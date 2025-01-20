import React from 'react'
import Item from '../Item/Item'
import "./Items.css"

export default function Items({ items, onDelete, onUpdate, filterValue, onFilter, setFilterValue}) {
  function handleFilter(e) {
    setFilterValue(e.target.value)
    onFilter(e.target.value)
  }
  return (
    <div className="list">
        <div className="filter-container">
            <input 
                type="text"
                onChange={handleFilter}
                value={filterValue}
                placeholder='Recherchez quelque chose'
                className='filter-value'
            >
            </input>
        </div>
        <div className="items">
            {
            items.map((item) => {
            return <Item
                item={item}
                onDelete={onDelete}
                onUpdate={onUpdate}
                key={item.id}
            />
            })
        }
        </div>
    </div>
   
  )
}
