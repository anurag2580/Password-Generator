import React from 'react'

function Footer() {
  return (
      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://github.com//anurag2580" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Github</a>
          <a href="#" className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Linkdin</a>
          <a href="#" className="text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">MAIL</a>
        </div>
        <p className="text-zinc-400 text-sm">© 2026 Anurag. Built with React (router) & Tailwind.</p>
      </footer>
  )
}

export default Footer
