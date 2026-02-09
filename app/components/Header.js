'use client'
import { useState, useEffect } from 'react'

export default function Header() {
  const [theme, setTheme] = useState('dark')

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

  const handleHover = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <div className="container">
        <h3>Reece</h3>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <a href="#home" onMouseEnter={() => handleHover('home')}>Home</a>
          <a href="#about" onMouseEnter={() => handleHover('about')}>About</a>
          <a href="#services" onMouseEnter={() => handleHover('services')}>Services</a>
          <a href="#projects" onMouseEnter={() => handleHover('projects')}>Projects</a>
          <a href="#contact" onMouseEnter={() => handleHover('contact')}>Contact</a>
          <button 
            onClick={toggleTheme} 
            className={`theme-toggle ${theme === 'dark' ? 'active' : ''}`}
            aria-label="Toggle theme"
          />
        </div>
      </div>
    </nav>
  )
}
