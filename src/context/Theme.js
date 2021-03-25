import React, { useState, createContext, useEffect } from 'react'
import useTitle from "hooks/useTitle"

const defaultTheme = "dark"
const Theme = createContext(defaultTheme)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)
  useTitle(`Welcome to ${theme} mode`)

  const themeToggler = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Theme.Provider value={{ theme, themeToggler }}>
      {children}
    </Theme.Provider>
  )
}

export default Theme
