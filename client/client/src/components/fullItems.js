import React, { useState} from 'react';
import apiURL from '../api'

export const Items = async () => {
    const [allItems, setAllItems] = useState([])

    const res = await fetch(`${apiURL}item`, {
      headers: {'Access-Control-Allow-Origin': '*'}
    })
    console.log(res)
    const data = await res.json()
    console.log(data)
    setAllItems(data)
  
  return (
    <div>
        {allItems.map(items => <div>{items.title}</div>)}
    </div>
    )
}


