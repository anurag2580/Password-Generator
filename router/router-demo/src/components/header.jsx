import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-6 md:gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
      <NavLink
      to = "/"
        className={({isActive}) =>
       `hover:text-blue-700 ${isActive ? "text-orange-700" : "text-gray-700"} transition-colors`
      } 
      >
       Home
      </NavLink >
      <NavLink
      to = "/about"
        className={({isActive}) =>
       `hover:text-blue-700 ${isActive ? "text-orange-700" : "text-gray-700"} transition-colors`
      } 
      >
       About
      </NavLink >
      <NavLink
      to = "/github"
        className={({isActive}) =>
       `hover:text-blue-700 ${isActive ? "text-orange-700" : "text-gray-700"} transition-colors`
      } 
      >
       GitHub
      </NavLink >
      <NavLink
      to = "/contact"
        className={({isActive}) =>
       `hover:text-blue-700 ${isActive ? "text-orange-700" : "text-gray-700"} transition-colors`
      } 
      >
       Contact
      </NavLink >
    </div>
    </nav>
  );
}


export default Header;
