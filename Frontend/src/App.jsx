import { useState } from 'react'
import Logo from './assets/Logo.png';
import './App.css'

function App() {

  return (
    <>

    <div style={{display: 'flex'}}>
    <img src={Logo} alt="" style={{
          width: '100px',
          height: '100px',
          marginTop: '10px'
        }}/>
        <h1>Pizzamia Web App</h1>
    </div>
      
    </>
  )
}

export default App
