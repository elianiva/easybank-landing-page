import React from "react"
import logo from "../assets/logo.svg"
import "../styles/Navbar.scss"
import Button from "./Button"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <img src={logo} alt="easybank-logo.svg" />
        </div>
        <div className="navbar__items">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <span>Blog</span>
          <span>Careers</span>
        </div>
        <div className="navbar__button">
          <Button text="Request Invite" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
