import { useState } from 'react'
import AddItem from './components/AddItem/AddItem'
import './App.css'
import Items from './components/Items/Items'
import { useEffect } from 'react'

const DATA = [
  {id: 1, name: "Build Docker"},
  {id: 2, name: "Migrate App"}
]

function App() {
  const [items, setItems] = useState([])
  const [allitems, setAllItems] = useState([...DATA])
  const [filterValue, setFilterValue] = useState("")

  const onDelete = (id) => {
    const newItems = allitems.filter( item => item.id !== id);
    setAllItems(newItems);

    setItems(() => [... newItems])
    setAllItems(() => [... newItems])

  }

  const addItem = (newItemValue) => {
    const newItems = [...allitems, {
      id: items.length + 1,
      name: newItemValue
    }]

    setItems(() => [... newItems])
    setAllItems(() => [... newItems])
  }

  const updateItem = (id, newValue) => {
    const newItems = allitems.map(item => {
      if (item.id !== id) return item
      else {
        item.name = newValue
        return item
      }
    })

    setItems(() => [... newItems])
    setAllItems(() => [... newItems])
  }

  const onFilter = (searchTerm) => {
    const itemCopy = [...allitems]
    const filteredItems = itemCopy.filter(item => {
      if (item.name.toLocaleLowerCase().indexOf(searchTerm) !== -1) {
        return item
      }
    })
    setItems(() => filteredItems)
  }

  useEffect( () => {
    setItems([... allitems])
  }, [])

  return (
    <div className="container">
      <h1>Ma TODO Liste</h1>
      <AddItem 
        addItem={addItem}
      />
      <Items 
        items={items}
        onDelete={onDelete}
        onUpdate={updateItem}
        onFilter={onFilter}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
    </div>
  )
}

export default App
