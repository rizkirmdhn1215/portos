'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const glowVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: [0, 1, 0],
    scale: [1, 1.2, 1],
    transition: { 
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
    }
  },
}

const quotes = [
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code.",
  "The best error message is the one that never shows up.",
  "Programming isn't about what you know; it's about what you can figure out.",
  "The only way to learn a new programming language is by writing programs in it.",
]

const scrambleText = (text: string, progress: number) => {
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return text.split('').map((char, index) => {
    if (char === ' ') return ' '
    if (index < text.length * progress) {
      return char
    }
    return chars[Math.floor(Math.random() * chars.length)]
  }).join('')
}

export default function Header() {
  const [quote, setQuote] = useState('')
  const [scrambledName, setScrambledName] = useState('RIZKI RAMADHAN')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 1) {
          clearInterval(interval)
          return 1
        }
        return prev + 0.02 // Slower progress
      })
    }, 50) // Faster interval for smoother animation

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const scrambleInterval = setInterval(() => {
      setScrambledName(scrambleText('RIZKI RAMADHAN', progress))
    }, 50) // Faster scramble rate

    return () => clearInterval(scrambleInterval)
  }, [progress])

  return (
    <div id="home">
      <header className="py-6 px-4 sm:px-6 lg:px-8 relative">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-death-rabbits"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {scrambledName}
        </motion.h1>
        {quote && (
          <motion.p
            className="text-lg sm:text-xl text-center mt-4 text-gray-300 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2, ease: "easeOut" }}
          >
            "{quote}"
          </motion.p>
        )}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
        />
      </header>
    </div>
  )
}
