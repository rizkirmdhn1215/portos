import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Scrum Master (Internship)',
    company: 'Padepokan Tujuh Sembilan',
    date: 'Oct 2024 - Present',
    description: 'Led agile development teams, facilitated scrum events, and improved team productivity.'
  },
  {
    title: 'Full-stack Developer (Internship)',
    company: 'Padepokan Tujuh Sembilan',
    date: 'Aug 2024 - Oct 2024',
    description: 'Developed and maintained web applications using React and Node.js.'
  },
  {
    title: 'Full-stack Developer (Apprenticeship)',
    company: 'Arutala Lab',
    date: 'Jul 2024',
    description: 'Worked on various full-stack projects, focusing on Laravel and Vue.js.'
  },
  {
    title: 'Programmer (Apprenticeship)',
    company: 'Arutala Lab',
    date: 'Mar 2024',
    description: 'Assisted in developing and testing software applications.'
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  })

  return (
    <section id="experience" className="h-screen flex items-center justify-center" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 mt-1">
                <motion.div
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">{exp.title}</h4>
                <p className="text-sm text-gray-400 flex items-center mt-1">
                  <Briefcase className="w-4 h-4 mr-1" /> {exp.company}
                </p>
                <p className="text-sm text-gray-400 flex items-center mt-1">
                  <Calendar className="w-4 h-4 mr-1" /> {exp.date}
                </p>
                <p className="text-sm text-gray-300 mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
