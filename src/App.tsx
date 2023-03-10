import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
      </div>
  )
}

export default App
