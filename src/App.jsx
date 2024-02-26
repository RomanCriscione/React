import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"FitóPlantas"} />
    </>
  )
}

export default App
