import { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"

const AppContext = createContext()

const getInitialDarkMode = () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const storedDarkMode = localStorage.getItem("darkTheme")

  if (storedDarkMode === null) {
    console.log("storedDarkMode is null")
    return isDark
  }
  return storedDarkMode === "true"
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchTerm, setSearchTerm] = useState("cat")

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem("darkTheme", newDarkTheme)
  }

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme)
  }, [isDarkTheme])

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppContext
