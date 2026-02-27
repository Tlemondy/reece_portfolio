'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [stats, setStats] = useState({ repos: '10+', commits: '0' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/Tlemondy')
        const userData = await userRes.json()
        
        if (userData.message && userData.message.includes('rate limit')) {
          setLoading(false)
          return
        }
        
        const reposRes = await fetch('https://api.github.com/users/Tlemondy/repos?sort=updated&per_page=100')
        const reposData = await reposRes.json()
        
        if (Array.isArray(reposData)) {
          const filtered = reposData.filter(repo => !repo.fork)
          const excludeRepos = ['html-portfolio', 'reece_portfolio']
          const displayRepos = filtered.filter(repo => !excludeRepos.includes(repo.name)).slice(0, 4)
          setRepos(displayRepos)
          
          setStats({ repos: userData.public_repos || filtered.length, commits: '500+' })
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    

    fetchGitHub()
  }, [])

  useEffect(() => {
    if (repos.length > 0) {
      setTimeout(() => {
        document.querySelectorAll('.repo-card').forEach(el => el.classList.add('visible'))
      }, 100)
    }
  }, [repos])

  return (
    <section id="projects">
      <div className="container">
        <h2>GitHub Projects</h2>
        
        <div className="github-stats">
          <div className="stat-card">
            <div className="stat-number">{stats.repos}</div>
            <div className="stat-label">Repositories</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.commits}</div>
            <div className="stat-label">Contributions</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              <a href="https://github.com/Tlemondy" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                View
              </a>
            </div>
            <div className="stat-label">Profile</div>
          </div>
        </div>

        <h3 style={{fontSize: '2rem', marginBottom: '2rem', color: 'var(--light)', textAlign: 'center'}}>
          Flutter Projects
        </h3>
        <div className="grid" style={{marginBottom: '3rem'}}>
          <Link href="/focus_one" className="card" style={{textDecoration: 'none', color: 'inherit'}}>
            <h3>Focus One</h3>
            <p>Productivity timer for focused work sessions</p>
          </Link>
          <Link href="/bottled" className="card" style={{textDecoration: 'none', color: 'inherit'}}>
            <h3>Bottled</h3>
            <p>Flutter web project showcase</p>
          </Link>
        </div>

      </div>
    </section>
  )
}
