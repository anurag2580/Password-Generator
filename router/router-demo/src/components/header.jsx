import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
      <NavLink
      to = "/"
        className={({isActive}) =>
        'block py-2 pr-4 ${isActive ? "text-orange-700" :"text-gray-700"} '
      } 
      >
       Home
      </NavLink >
      <NavLink
      to = "/about"
        className={({isActive}) =>
        'block py-2 pr-4 ${isActive ? "text-orange-700" :"text-gray-700"} '
      } 
      >
       About
      </NavLink >
      <Link to = "/contact">Contact</Link>
      <Link to = "/github">Github</Link>
    </div>
  );
}

export default Header;
