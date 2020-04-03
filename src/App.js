import React from "react"
import "./styles/App.scss"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Benefit from "./components/Benefit"
import Articles from "./components/Articles"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Benefit />
      <Articles />
    </div>
  )
}

export default App
