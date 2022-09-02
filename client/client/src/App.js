import React, { useState, useEffect } from 'react';
import { AddForm } from './components/form';
import { Items } from './components/fullItems';

function App() {
  const [forms, setForms] = useState(false)

  return (
    <div>
      <h1>The JMS Store</h1>
     {forms ? <AddForm /> : null}
     <button onClick={() => setForms(!forms)}>Sell an item</button>
     <Items />

     {/* <AddForm /> */}
    </div>
  )
}

export default App;
