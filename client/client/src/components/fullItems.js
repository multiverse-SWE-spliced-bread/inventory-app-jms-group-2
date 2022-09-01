import React, { useState} from 'react';


export const Items = async () => {
    const [allItems, setAllItems] = useState([])

    const res = await fetch('http://localhost:3000/item')
    console.log(res)
    const data = await res.json()
    console.log(data)
    setAllItems(data)
}

  return (
    <div>
        {allItems.map(items => <div>{items.title}</div>)}
    </div>
    )