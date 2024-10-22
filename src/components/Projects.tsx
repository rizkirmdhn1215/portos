import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  { 
    title: 'Android App with Kotlin', 
    description: 'Firebase Firestore Integration',
    previews: ['android-app-preview1.jpg', 'android-app-preview2.jpg'],
    technologies: ['Kotlin', 'Android SDK', 'Firebase'],
    githubLink: 'https://github.com/yourusername/android-app',
    liveLink: 'https://play.google.com/store/apps/details?id=com.yourusername.androidapp'
  },
  { 
    title: 'Absence Management App', 
    description: 'Spring Boot & Next.js',
    previews: ['absence-app-preview1.png', 'absence-app-preview2.png', 'absence-app-preview3.png'],
    technologies: ['Spring Boot', 'Next.js', 'PostgreSQL'],
    githubLink: 'https://github.com/yourusername/absence-management',
    liveLink: 'https://absence-management-app.com'
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  })

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {projects.map((project, index) => (
                <div key={index} className="relative group">
                  <div className="w-full h-48 relative overflow-hidden rounded-lg">
                    <Image 
                      src={`/images/${project.previews[0]}`}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm mb-2 text-center">{project.description}</p>
                      <div className="flex space-x-2">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-300"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}
