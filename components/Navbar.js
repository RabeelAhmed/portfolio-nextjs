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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#portfolio' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass py-3 shadow-glass' : 'bg-transparent py-5'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
          <span className="text-white">RABEEL</span>
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-accent text-sm py-2 px-6">
            Get In Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-xl glass-light hover:bg-white/10 transition-all duration-300" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full glass transition-all duration-500 ease-in-out ${
        open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      } border-t border-white/5`}>
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="block text-lg font-medium py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-accent block text-center"
            onClick={() => setOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  )
}

