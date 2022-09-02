import React, { useEffect, useState} from 'react';

export const Items = () => {

  const [allItems, setAllItems] = useState([])
  const [Item, setItem] = useState([])

  async function itemsList () {
      const res = await fetch('http://localhost:3000/items')
      console.log(res)
      const data = await res.json()
      console.log(data)
      setAllItems(data)
      console.log(allItems)
      setItem([])
  }

  async function oneItem (id) {
    const res = await fetch(`http://localhost:3000/items/${id}`)
    const data = await res.json()
    setItem(data)
    console.log(data.title)
    setAllItems([])

  }

  useEffect(() => {
    itemsList();
	}, []);
    

  return (
    <div>
        {/* system message: fullItems.js is connected!  */}
      {allItems.map(items => <div onClick={() => oneItem(items.id)}>{items.image}<br></br>{items.title}<br></br>{items.price}</div>)}
      <div className='title'>{Item.title}</div>
      <div className='description'>{Item.description}</div>
      <div className='price'>{Item.price}</div>
      <div className='category'>{Item.category}</div>
      <div className='image'>{Item.image}</div>
      <button onClick={() => itemsList()}>Go Back</button>
    </div>
  )
}

