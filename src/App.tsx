import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { NavBar } from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
    </div>
  )
}

export default App
