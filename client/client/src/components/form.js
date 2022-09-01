import React, {useState} from 'react';
export const AddForm = () => {
    function newItem() {
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [price, setPrice] = useState('')
        const [category, setCategory] = useState('')
        const [image, setImage] = useState('')}
        function pageSubmitted() { alert(':tada: Page submitted succesfully! :tada:')}
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>inventory</h1>
        <p>Please fill out this form</p>
        <label></label>
        <input type='test' placeholder='Title' value= {title} onChange={e => setTitle(e.target.value)}/>
        <input type='test' placeholder='description' value={description} onChange={e => setDescription(e.target.value)}/>
        <input type='test' placeholder='price' value={price} onChange={e => setPrice(e.target.value)}/>
        <input type='test' placeholder='category' value={category} onChange={e => setCategory(e.target.value)}/>
        <input type='test' placeholder='image' value={image} onChange={e => setImage(e.target.value)}/>
        <br></br>
        <button onClick={pageSubmitted}>submit</button>
      </form>
    </main>
    );
  }