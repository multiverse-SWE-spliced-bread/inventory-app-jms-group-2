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
  
  function pageSubmitted() { alert(':tada: Page submitted succesfully! :tada:')}


        


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>inventory</h1>
        <p>Please fill out this form</p>
        <label></label>
        <input type='text' placeholder='Title' value= {title} onChange={e => setTitle(e.target.value)}/>
        <input type='text' placeholder='description' value={description} onChange={e => setDescription(e.target.value)}/>
        <input type='text' placeholder='price' value={price} onChange={e => setPrice(e.target.value)}/>
        <input type='text' placeholder='category' value={category} onChange={e => setCategory(e.target.value)}/>
        <input type='text' placeholder='image' value={image} onChange={e => setImage(e.target.value)}/>
        <br></br>
        <button onClick={pageSubmitted}>submit</button>
      </form>
    </main>
    );
  }