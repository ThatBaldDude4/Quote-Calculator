import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from './assets/Form.jsx'
import { Input } from './assets/Input.jsx'

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
        onChange={setCount}
      />
    </>
  )
}

export default App
