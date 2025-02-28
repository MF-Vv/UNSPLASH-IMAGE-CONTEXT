import React from "react"
import ThemeToggle from "./components/ThemeToggle"
import SearchForm from "./components/SearchForm"
import Gallery from "./components/Gallery"

import { useGlobalContext } from "./context"

const App = () => {
  console.log(useGlobalContext())
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  )
}

export default App
