
import AddItem from './components/AddItem/AddItem'
import './App.css'
import Items from './components/Items/Items'
import DeleteModal from "./modals/DeleteModal/DeleteModal"
import {ItemsContext} from "./contexts/ItemsContext.jsx"
import { createPortal } from 'react-dom'
import React, { useContext } from "react";

function App() {
  const {showDeleteModal} = useContext(ItemsContext);

  return (
    <div className="container">
      <h1>Ma TODO Liste</h1>
      <AddItem/>
      <Items />

      { showDeleteModal && createPortal(
        <DeleteModal/>,
        document.body)
      }
    </div>
    
  )
}

export default App
