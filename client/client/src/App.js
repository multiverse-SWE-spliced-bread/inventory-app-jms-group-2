import React, { useState, useEffect } from 'react';
// import { Items } from './fullItems';

function App() {

  const [items, setItems] = useState([])
  const [allItems, setAllItems] = useState([])
  async function getItems() {
    const res = await fetch("http://localhost:3000/items")
    const data = await res.json()
    setAllItems(data)
  }

  useEffect(() => {
    getItems();
  }, [])

  return (
    <div>
     Hello, world!
     
    </div>
  );
}

export default App;
