import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function HomeSection() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  })

  return (
    <section id="home" className="h-screen flex items-center justify-center" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        {/* Add more content here */}
      </motion.div>
    </section>
  )
}
