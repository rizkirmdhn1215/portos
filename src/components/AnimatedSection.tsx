import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
    >
      {children}
    </motion.section>
  )
}
