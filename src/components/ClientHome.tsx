'use client'

import { useEffect, useState } from 'react'
import Layout from './Layout'
import Header from './Header'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Footer from './Footer'
import { ArrowUp } from 'lucide-react'

export default function ClientHome() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Implement smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault()
        const href = this.getAttribute('href')
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          })
        }
      })
    })

    // Show/hide scroll-to-top button
    const toggleScrollTop = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleScrollTop)

    return () => window.removeEventListener('scroll', toggleScrollTop)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home">
          <Header />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
      <Footer />
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </Layout>
  )
}
