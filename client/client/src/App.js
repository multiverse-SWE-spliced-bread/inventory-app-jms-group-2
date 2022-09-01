import React, { useState, useEffect } from 'react';
import { AddForm } from './components/form';
import { Items } from './components/fullItems';

function App() {
  const [forms, setForms] = useState(false)

  return (
    <div>
     <Items />
     <button onClick={() => setForms(!forms)}>Click here to add new Item</button>
     {forms ? <AddForm /> : null}
     {/* <AddForm /> */}
    </div>
  )
}

export default App;
