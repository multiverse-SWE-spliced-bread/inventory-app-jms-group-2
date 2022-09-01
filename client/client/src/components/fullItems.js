import React, { useEffect, useState} from 'react';


export const Items = () => {
    const [allItems, setAllItems] = useState([])
    async function itemsList () {
        const res = await fetch('http://localhost:3000/items')
        console.log(res)
        const data = await res.json()
        console.log(data)
        setAllItems(data)
        console.log(allItems)
    }

    useEffect(() => {
		itemsList();
	}, []);
    


  return (
    <div>
        Hello World!
        {allItems.map(items => <div>{items.title}</div>)}
    </div>
    )
  }

