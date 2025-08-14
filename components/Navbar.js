"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/50 backdrop-blur-lg shadow-lg' : 'bg-black/30 backdrop-blur-md'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-blue-400 hover:to-purple-500 transition-all duration-300 uppercase">
            Rabeel.
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4">
            <a href="#contact" className="btn-accent relative overflow-hidden group">
              <span className="relative z-10 px-2 py-4">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300" 
          onClick={() => setOpen(!open)}
        >
          <div className="relative w-6 h-6">
            <FiMenu className={`absolute inset-0 transition-all duration-300 ${open ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} size={22}/>
            <FiX className={`absolute inset-0 transition-all duration-300 ${open ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} size={22}/>
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden bg-[#0b0b0b]/95 backdrop-blur-lg transition-all duration-300 ${
        open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-6 py-4 space-y-2">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item, index) => (
            <Link 
              key={item}
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
              className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
