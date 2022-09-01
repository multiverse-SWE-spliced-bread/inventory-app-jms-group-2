import React, { useState, useEffect } from 'react';
// import { Items } from './fullItems';

function App() {

  const [allItems, setAllItems] = useState([])
  const [item, setItem] = useState([])

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
