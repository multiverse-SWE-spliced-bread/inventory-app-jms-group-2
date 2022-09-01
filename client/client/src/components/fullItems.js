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
    }

    async function oneItem (id) {
      const res = await fetch(`http://localhost:3000/items/${id}`)
      const data = await res.json()
      setItem(data)

    }

    useEffect(() => {
		itemsList();
	}, []);
    


  return (
    <div>
        Hello World!
        {allItems.map(items => <div onClick={() => oneItem(items.id)}>{items.title}</div>)}
    </div>
    )
  }

