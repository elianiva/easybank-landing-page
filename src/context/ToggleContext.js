import React, { createContext, useState } from "react"

// Context of the state
export const ToggleContext = createContext()

// Provider wrapper
export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false) // State of hamburger menu

  // make provider to give wrapped element data of toggle state
  return (
    <ToggleContext.Provider
      value={{ state: toggle, setToggle: (value) => setToggle(value) }}
    >
      {children}
    </ToggleContext.Provider>
  )
}
