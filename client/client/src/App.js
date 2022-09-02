import React, { useState, useEffect } from 'react';
import { AddForm } from './components/form';
import { Items } from './components/fullItems';
import {Updateform} from './components/updateform'

function App() {
  const [forms, setForms] = useState(false)

  return (
    <div>

      <h1>The JMS Store</h1>
     {forms ? <AddForm /> : null}
     <button onClick={() => setForms(!forms)}>Sell an item</button>
     {forms ? <AddForm /> : null}
     <Items />
     <button onClick={() => setForms(!forms)}>Click here to add update Item</button>
     {forms ? <Updateform /> : null}
     {/* <AddForm /> */}
    </div>
  )
}

export default App;
