import React, { useState, useEffect } from 'react';

export const Items = async (props) => {
    const [allItems, setAllItems] = useState([])

    const res = await fetch("http://localhost:3005/item")
    const data = await res.json()
    console.log(data)
    setAllItems(data)
  
  return <>
    <div>
        {data}
    </div>
    </>
}