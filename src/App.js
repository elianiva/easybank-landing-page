import React from "react"
import "./styles/App.scss"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Benefit from "./components/Benefit"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Benefit />
    </div>
  )
}

export default App
