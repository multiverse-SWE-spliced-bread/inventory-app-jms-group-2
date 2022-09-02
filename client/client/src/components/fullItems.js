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

    async function deleteItem (id) {
        await fetch(`http://localhost:3000/items/${id}`, {
          method: 'DELETE'
        })
        setItem([])
        itemsList()
    }

    useEffect(() => {
		itemsList();
	}, []);
    


  return (
    <div className='render'>
        Hello World!
        {allItems.map(items => <div className='items' onClick={() => oneItem(items.id)}>{items.title}</div>)}
        {allItems.map(items => <button className='items' onClick={() => deleteItem(items.id)}>Delete this item</button>)}
        <div className='title'>{Item.title}</div>
        <div className='description'>{Item.description}</div>
        <div className='price'>{Item.price}</div>
        <div className='category'>{Item.category}</div>
        <div className='image'>{Item.image}</div>
        <button onClick={() => itemsList()}>Go Back</button>
    </div>
    )
  }

