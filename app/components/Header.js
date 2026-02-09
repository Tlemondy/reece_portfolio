'use client'

export default function Header() {
  const handleHover = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <div className="container">
        <h3>Reece</h3>
        <div>
          <a href="#home" onMouseEnter={() => handleHover('home')}>Home</a>
          <a href="#about" onMouseEnter={() => handleHover('about')}>About</a>
          <a href="#services" onMouseEnter={() => handleHover('services')}>Services</a>
          <a href="#projects" onMouseEnter={() => handleHover('projects')}>Projects</a>
          <a href="#contact" onMouseEnter={() => handleHover('contact')}>Contact</a>
        </div>
      </div>
    </nav>
  )
}
