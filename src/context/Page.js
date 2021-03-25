import React, { useState, createContext, useEffect } from 'react'
import useTitle from "hooks/useTitle"

const defaultPage = "register"
const Page = createContext(defaultPage)

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(defaultPage)
  const [title, setTitle] = useState("")

  useEffect(() => {
    switch (page) {
      case "posts":
        setTitle("List of all Posts")
        break;
      case "todos":
        setTitle("List of all Tasks")
        break;
      case "users":
        setTitle("List of Members")
        break;
      default:
        setTitle("Login / Restration")
    }
  }, [page])
  useTitle(`${title}`)

  const router = (url) => {
    switch (url) {
      case "posts":
      case "todos":
      case "users":
      case 'register':
        setPage(url)
        break;
      default:
        setPage(false)
    }
  }

  return (
    <Page.Provider value={{ page, router }}>
      {children}
    </Page.Provider>
  )
}

export default Page
