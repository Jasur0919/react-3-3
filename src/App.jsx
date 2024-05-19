import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState([])

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }


  const handleChange = (event) => {
    event.preventDefault()
    setCount(Number(event.target.value))
  }

  return (
    <>
      <input
        type="number"
        placeholder='Create number'
        onChange={handleChange}
      />
      <div className="step_size">
        <h2>{count}</h2>
        <button onClick={incrementCount}>Qadam kengaytmasi</button>
      </div>
    </>
  )
}

export default App

