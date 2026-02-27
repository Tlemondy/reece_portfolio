'use client'
import { useState, useEffect } from 'react'

export default function Header() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const handleClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleHover = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav>
        <div className="container">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <h3>
            <img src="/favicon.png" alt="Logo" className="nav-logo" />
            Reece
          </h3>
          <div className="desktop-nav">
            <a href="#home" onClick={() => handleClick('home')} onMouseEnter={() => handleHover('home')}>Home</a>
            <a href="#services" onClick={() => handleClick('services')} onMouseEnter={() => handleHover('services')}>Services</a>
            <a href="#projects" onClick={() => handleClick('projects')} onMouseEnter={() => handleHover('projects')}>Projects</a>
            <a href="#contact" onClick={() => handleClick('contact')} onMouseEnter={() => handleHover('contact')}>Contact</a>
            <a href="#about" onClick={() => handleClick('about')} onMouseEnter={() => handleHover('about')}>About</a>
          </div>
          <button 
            onClick={toggleTheme} 
            className={`theme-toggle ${theme === 'dark' ? 'active' : ''}`}
            aria-label="Toggle theme"
          />
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => handleClick('home')}>Home</a>
        <a href="#services" onClick={() => handleClick('services')}>Services</a>
        <a href="#projects" onClick={() => handleClick('projects')}>Projects</a>
        <a href="#contact" onClick={() => handleClick('contact')}>Contact</a>
        <a href="#about" onClick={() => handleClick('about')}>About</a>
      </div>
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
