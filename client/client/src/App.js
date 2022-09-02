import React, { useState, useEffect } from 'react';
import { AddForm } from './components/form';
import { Items } from './components/fullItems';
import {Updateform} from './components/updateform'

function App() {
  const [forms, setForms] = useState(false)

  return (
    <div>
     <Items />
     <button onClick={() => setForms(!forms)}>Click here to add new Item</button>
     <button onClick={() => setForms(!forms)}>Click here to add update Item</button>
     {forms ? <AddForm /> : null}
     {forms ? <Updateform /> : null}
     {/* <AddForm /> */}
    </div>
  )
}

export default App;
