import React from 'react'
import Item from '../Item/Item'
import "./Items.css"

export default function Items({ items, onUpdate, filterValue, onFilter, setFilterValue, setShowDeleteModal, showDeleteModal, setIdToDelete}) {
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
                onUpdate={onUpdate}
                setShowDeleteModal={setShowDeleteModal}
                showDeleteModal={showDeleteModal}
                setIdToDelete={setIdToDelete}
                key={item.id}
            />
            })
        }
        </div>
    </div>
   
  )
}
