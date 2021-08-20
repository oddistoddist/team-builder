import React, { useState } from 'react'
import Form from './Form'
import './App.css';


function App() {
  const [mems, setMems] = useState([])

  const submit = (mem) => {
    setMems([...mems, mem ])
  }
  return (
    <div className="App">
      <h2>Team Members</h2>
      {mems.map((mem, idx ) => {
        return (
          <React.Fragment key={idx}>
           <p>{mem.name}</p>
          <p>{mem.email}</p>
          <p >{mem.role}</p> 
          </React.Fragment>
        )
      })}
      <Form submit = {submit}/>
    </div>
  );
}

export default App;
