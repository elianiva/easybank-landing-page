import React from "react"
import "./styles/App.scss"

import { ToggleProvider } from "./context/ToggleContext"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Benefit from "./components/Benefit"
import Articles from "./components/Articles"
import Footer from "./components/Footer"
import MobileMenu from "./components/MobileMenu"

function App() {
  return (
    <ToggleProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <MobileMenu />
        <Benefit />
        <Articles />
        <Footer />
      </div>
    </ToggleProvider>
  )
}

export default App
