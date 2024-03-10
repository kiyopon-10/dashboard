import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'

function App() {
  

  return (
    <div className='body'>
      <Navbar/>
      <Menu/>
      <Home/>
    </div>
  )
}

export default App
