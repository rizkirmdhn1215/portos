import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
  { name: 'MySQL', url: 'https://www.mysql.com/' },
  { name: 'Laravel', url: 'https://laravel.com/' },
  { name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' },
  { name: 'Java', url: 'https://www.java.com/' },
  { name: 'React', url: 'https://reactjs.org/' },
  { name: 'Next.js', url: 'https://nextjs.org/' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
  { name: 'Go', url: 'https://golang.org/' },
  { name: 'Python', url: 'https://www.python.org/' }
];

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  })

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 shadow-lg no-underline"
              whileHover={{ scale: 1.20 }}
              transition={{ duration: 0.4 }} // Fast hover animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium text-center text-white">{skill.name}</h4>
              <motion.div
                className="h-2 bg-gray-600 rounded-full overflow-hidden mt-2"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"
                  initial={{ x: '-100%' }}
                  animate={{ x: `${Math.random() * -40}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
