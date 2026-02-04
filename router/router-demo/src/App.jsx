import Footer from "./components/footer"
import Header from "./components/header"
import React from "react"
import Home from "./components/layout/home"
import About from "./components/layout/about"
import Contact from "./components/layout/contact"
import Github from "./components/layout/github"
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
   <Header />
   <Outlet />
   <Footer />
   </>
  )
}

export default App
export {Home,About,Contact,Github} 
