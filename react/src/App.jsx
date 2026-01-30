import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './calculator/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculator />
    </>
  )
}

export default App
