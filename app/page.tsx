'use client'

import { useState, useEffect } from 'react'
import { SearchIcon, Moon, Sun } from './components/Icons'

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsSearching(true)
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false)
      // In a real app, navigate to results page or show results
      alert(`Searching for: ${searchQuery}`)
    }, 800)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-6 right-6 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun /> : <Moon />}
      </button>

      {/* Main Content */}
      <div className="w-full max-w-2xl flex flex-col items-center space-y-8">
        {/* Logo/Title */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">
            Grokpedia
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            v0.1
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search anything..."
              className="w-full px-6 py-4 pl-14 text-lg rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:opacity-70 transition-opacity disabled:opacity-50"
              aria-label="Search"
            >
              <SearchIcon className={isSearching ? 'animate-pulse' : ''} />
            </button>
          </div>
        </form>

        {/* Quick Links or Tags */}
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {['Technology', 'Science', 'History', 'Culture', 'Philosophy'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchQuery(tag)}
              className="px-4 py-2 text-sm rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Minimalist knowledge exploration</p>
      </div>
    </div>
  )
}
