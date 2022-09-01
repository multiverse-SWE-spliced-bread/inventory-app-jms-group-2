<<<<<<< HEAD
import React, { useState} from 'react';


export const Items = async () => {
    const [allItems, setAllItems] = useState([])

    const res = await fetch('http://localhost:3000/item')
    console.log(res)
=======
import React, { useState, useEffect } from 'react';

export const Items = async (props) => {
    const [allItems, setAllItems] = useState([])

    const res = await fetch("http://localhost:3005/item")
>>>>>>> master
    const data = await res.json()
    console.log(data)
    setAllItems(data)
  
<<<<<<< HEAD
  return (
    <div>
        {allItems.map(items => <div>{items.title}</div>)}
    </div>
    )
=======
  return <>
    <div>
        {data}
    </div>
    </>
>>>>>>> master
}