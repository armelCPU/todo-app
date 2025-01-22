import React from 'react'
import Item from '../Item/Item'
import "./Items.css"
import { useContext, useEffect } from 'react'
import {ItemsContext} from "../../contexts/ItemsContext"


export default function Items() {
  useEffect( () => {
    setItems([... allItems])
  }, [])

  const {
    items, 
    allItems,
    setItems,
    onFilter,
    filterValue, 
    setFilterValue, 
  } = useContext(ItemsContext);

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
                key={item.id}
            />
            })
        }
        </div>
    </div>
   
  )
}
