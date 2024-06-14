import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
