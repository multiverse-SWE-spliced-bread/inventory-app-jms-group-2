import React, {useState} from 'react';

export const AddForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')

  // extras
  const [tickedCheckbox, setTickedCheckbox] = useState(false)


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
  
  // Pop up page submitted alert
  function pageSubmitted() { 
    alert('Page submitted succesfully! :)')
  }

  // checked box
  const checkBox = (props) => {
    const tickedCheckbox = props.isChecked ?
        "checkbox-marked" : "checkbox-blank-outline";
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2>Inventory</h2>
        <p>Please fill out the form below</p>

        {/* Title box */}
        <div>
          <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} required/>
        </div>

        <br></br>

        {/* Description box */}
        <div>
          <textarea type='text' placeholder='Description' value={description} wrap='hard' rows='5' onChange={e => setDescription(e.target.value)} required/>
        </div>

        {/* Price box */}
        <div>
          <input type='number' placeholder='£' value={price} onChange={e => setPrice(e.target.value)} required/>
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

        {/* Select category box OLD*/}
        {/* <div>
          <input type='text' placeholder='Category' value={category} onChange={e => setCategory(e.target.value)}/>
        </div> */}

        <div>
          <input type='file' value={image} onChange={e => setImage(e.target.value)} required/>  
        </div>

        {/* Select image box OLD*/}
        {/* note: this is simply an input box, and doesnt allow the selection of an image */}
        {/* <div>
          <input type='text' placeholder='Image' value={image} onChange={e => setImage(e.target.value)}/>  
        </div> */}

        {/* Quality of item selection radios */}
        <div> 
        <input type='radio' className='radioGroup'/>
        <label>New</label>
        </div>

        <div> 
        <input type='radio' className='radioGroup'/>
        <label>Like New</label>
        </div>

        <div> 
        <input type='radio' className='radioGroup'/>
        <label>Used</label>
        </div>

        <label>
        The information above is correct.
        <input type='checkbox' value= {tickedCheckbox} onChange ={e => setTickedCheckbox(true)}/><br></br>
      </label>



        <button onClick={pageSubmitted}>Submit</button>

      </form>
    </main>
  );
}