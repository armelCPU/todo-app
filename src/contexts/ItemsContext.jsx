import { createContext, useState } from "react";

// Create the context
export const ItemsContext = createContext();

const DATA = [
  {id: 1, name: "Build Docker"},
  {id: 2, name: "Migrate App"}
]


// Create the provider
export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [allItems, setAllItems] = useState([...DATA])
  const [filterValue, setFilterValue] = useState("")
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [idToDelete, setIdToDelete] = useState("")

  const onDelete = (id) => {
    const newItems = allItems.filter( item => item.id !== id);
    setAllItems(newItems);

    setItems(() => [... newItems])
    setAllItems(() => [... newItems])

  }

  const addItem = (newItemValue) => {
    const newItems = [...allItems, {
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
    const itemCopy = [...allItems]
    const filteredItems = itemCopy.filter(item => {
      if (item.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1) {
        return item
      }
    })
    setItems(() => filteredItems)
  }

    return (
      <ItemsContext.Provider value={{ 
        items,
        setItems,
        allItems,
        setAllItems,
        updateItem,
        addItem,
        onFilter,
        onDelete,
        filterValue,
        setFilterValue,
        showDeleteModal,
        setShowDeleteModal,
        idToDelete,
        setIdToDelete,
      }}>
        {children}
      </ItemsContext.Provider>
    );
  };
  