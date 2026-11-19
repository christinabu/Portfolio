import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-lighter">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-orbitron mb-6"
            >
              About <span className="text-neon-blue">Me</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-300 mb-6"
            >
              I’m a Computer Science Engineer currently pursuing an MSc in Cyber Security and Emerging Threats at Middlesex University Dubai, with a strong interest in cybersecurity, network security, and emerging digital threats. I’m passionate about understanding security challenges, exploring threat prevention strategies, and building secure and reliable digital solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 mb-8"
            >
              With a foundation in software development and hands-on experience in building real-world applications using React, JavaScript, HTML, and CSS, I bring a combination of technical development skills and a security-focused mindset. I’m a continuous learner who values collaboration, analytical thinking, and problem-solving, and I’m eager to explore opportunities in cybersecurity while contributing to innovative projects and growing alongside a global team.

            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href={`${import.meta.env.BASE_URL}assets/resume/Christin Abu_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-card px-6 py-3 text-neon-blue hover:bg-neon-blue/10 transition-colors"
              >
                <Download size={20} />
                View Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 