import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Items } from './components/fullItems';

function App() {

  // const [items, setItems] = useState([])
  // const [allItems, setAllItems] = useState([])
  // async function getItems() {
  //   const res = await fetch("http://localhost:3000/items")
  //   const data = await res.json()
  //   setAllItems(data)
  // }

=======
import { Items } from './components/fullItems.js';

function App() {

  // const [allItems, setAllItems] = useState([])

  // async function getItems() {
  //   const res = await fetch("http://localhost:3000/items")
  //   const data = await res.json()
  //   setAllItems(data)
  // }

>>>>>>> master
  // useEffect(() => {
  //   getItems();
  // }, [])

  return (
    <div>
<<<<<<< HEAD
     Hello, world!
     <Items />
=======
      <Items />
>>>>>>> master
    </div>
  )
}

export default App;
