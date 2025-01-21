import { useState } from 'react'
import AddItem from './components/AddItem/AddItem'
import './App.css'
import Items from './components/Items/Items'
import DeleteModal from "./modals/DeleteModal/DeleteModal"
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const DATA = [
  {id: 1, name: "Build Docker"},
  {id: 2, name: "Migrate App"}
]

function App() {
  const [items, setItems] = useState([])
  const [allitems, setAllItems] = useState([...DATA])
  const [filterValue, setFilterValue] = useState("")
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [idToDelete, setIdToDelete] = useState("")

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
      if (item.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1) {
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
        onUpdate={updateItem}
        onFilter={onFilter}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        setShowDeleteModal={setShowDeleteModal}
        showDeleteModal={showDeleteModal}
        setIdToDelete={setIdToDelete}
      />

      { showDeleteModal && createPortal(
        <DeleteModal
          itemId={idToDelete}
          onDelete={onDelete}
          setShowDeleteModal={setShowDeleteModal}
        />,
        document.body)
      }
    </div>
  )
}

export default App
