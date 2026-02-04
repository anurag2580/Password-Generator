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
    <div className="min-h-screen bg-[#FDFCF8] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
   <Header />
   <Outlet />
   <Footer />
    </div>
   </>
  )
}

export default App
export {Home,About,Contact,Github} 
