import React from 'react'

function Home() {
  return (
    <div>
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm mb-8 transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 tracking-wide uppercase">Based in India</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white transition-colors duration-300">
          Code <span className="text-zinc-300 dark:text-zinc-700">&</span> Data.
        </h1>

        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 transition-colors duration-300">
          I'm <span className="text-zinc-900 dark:text-white font-semibold">Anurag</span>. I build robust web applications and extract insights from complex data ecosystems.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#projects" className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-3xl font-bold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg shadow-zinc-200 dark:shadow-none">
            See My Work
          </a>
          <button className="px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-3xl font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center gap-2">
           Resume
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
