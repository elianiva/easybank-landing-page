import React, { useContext } from "react"
import "../styles/MobileMenu.scss"

import { ToggleContext } from "../context/ToggleContext"

function MobileMenu() {
  let { state } = useContext(ToggleContext)
  if (state) {
    return (
      <div className="menu">
        <div className="menu__items">
          <div className="menu__item">Home</div>
          <div className="menu__item">About</div>
          <div className="menu__item">Contact</div>
          <div className="menu__item">Blog</div>
          <div className="menu__item">Careers</div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default MobileMenu
