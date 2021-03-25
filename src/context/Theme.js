import React, { useState, createContext } from 'react'

const defaultTheme = "dark"
const Theme = createContext(defaultTheme)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)
  const themeToggler = () => setTheme(theme === "light" ? "dark" : "light")

  return (
    <Theme.Provider value={{theme, themeToggler}}>
      {children}
    </Theme.Provider>
  )
}

export default Theme
