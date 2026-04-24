import { useState } from 'react'
import Todoapp from './Componets/Todoapp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todoapp/>
    </>
  )
}

export default App
