import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-lighter py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-400"
          >
            © {currentYear} Christin Abu. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/christinabu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/christinabu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:christinabu647@gmail.com"
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 