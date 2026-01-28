import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from './calculator/components/Form.jsx'
import { Input } from './calculator/components/Input.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
      <div className="container">{count}</div>
      <Input 
        type="number"
        id="1"
        key="2323"
        label="TEST"
        onChange={setCount}
      />
    </>
  )
}

export default App
