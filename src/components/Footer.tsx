import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-r from-gray-800 to-gray-900 py-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Bandung, West Java</p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">rizkirmdhn1215@gmail.com</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/rizki-ramadhan-dev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:rizkirmdhn1215@gmail.com" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
