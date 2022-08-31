import React, { useState, useEffect } from 'react';
import { Items } from './components/fullItems.js';

function App() {

  // const [allItems, setAllItems] = useState([])

  // async function getItems() {
  //   const res = await fetch("http://localhost:3000/items")
  //   const data = await res.json()
  //   setAllItems(data)
  // }

  // useEffect(() => {
  //   getItems();
  // }, [])

  return (
    <div>
      <Items />
    </div>
  )
}

export default App;
