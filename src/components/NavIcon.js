import React, { useContext } from "react"
import "../styles/NavIcon.scss"

import hamburger from "../assets/icon-hamburger.svg"
import close from "../assets/icon-close.svg"
import { ToggleContext } from "../context/ToggleContext"

function NavIcon() {
  // get data from context
  const { state, setToggle } = useContext(ToggleContext)

  // change hamburger menu icon on click
  const toggleNav = () => {
    setToggle(!state)
  }

  return (
    <button className="nav-icon" onClick={toggleNav}>
      {state ? (
        <img src={close} alt="close" />
      ) : (
        <img src={hamburger} alt="hamburger" />
      )}
    </button>
  )
}

export default NavIcon
