import React, {useState} from 'react';

export const AddForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const postContent = async () => {
      const res = await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'title': title, 'description': description, 'price': price, 'category': category})
      // const data = await res.json()
      
    })
  }
    postContent()
    // setPages([...pages, {title, content}])
    // setTitle('') 
    // setContent('')
  }
  
  function pageSubmitted() { 
    alert('Page submitted succesfully! :)')
  }


        


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2>Inventory</h2>
        <p>Please fill out this form</p>

        {/* Description box */}
        <div>
          <input type='text' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)}/>
        </div>

        {/* Price box */}
        <div>
          <input type='text' placeholder='Price' value={price} onChange={e => setPrice(e.target.value)}/>
        </div>

        {/* Select Category dropdown */}
        <div>
          <select>
            <option>Select Category</option>
            <option>Clothing & Footwear</option>
            <option>Beauty</option>
            <option>Jewellery</option>
            <option>Technology</option>
            <option>Books</option>
            <option>Children</option>
            <option>Other</option>,
          </select> 
        </div>

          {/* Select category box */}
        {/* <div>
          <input type='text' placeholder='Category' value={category} onChange={e => setCategory(e.target.value)}/>
        </div> */}

        <div>
          <input type='text' placeholder='Image' value={image} onChange={e => setImage(e.target.value)}/>  
        </div>

        <button onClick={pageSubmitted}>Submit</button>
      </form>
    </main>
  );
}