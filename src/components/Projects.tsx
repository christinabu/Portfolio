import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const projects = [
  {
    title: 'Cattle Management and Lumpy Skin Disease Detection System',
    description: 'An integrated AgriTech platform leveraging Machine Learning for automated Lumpy Skin Disease detection and real-time financial tracking to optimize cattle health and farm profitability.',
    image: `${import.meta.env.BASE_URL}assets/images/C-Doc.jpg`,
    tags: ['Html', 'Css', 'JavaScript', 'Flask', 'Python', 'Firebase'],
    github: 'https://github.com/christinabu/FINAL-YEAR-PROJECT', // Placeholder link
    date: 'Jan 2024'
  },
  {
    title: 'Vehicle Authentication Application',
    description: 'A Flutter app connected to Firebase for secure, real-time vehicle information access. Emphasized clean design and consistent navigation to provide a seamless experience for users.',
    image: `${import.meta.env.BASE_URL}assets/images/DOCmo.jpg`,
    tags: ['Flutter', 'Dart', 'Firebase'],
    date: 'Jun 2023'
  }
]

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-orbitron text-center mb-12"
        >
          My <span className="text-neon-blue">Projects</span>
        </motion.h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card h-full overflow-hidden flex flex-col">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback in case image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/600x400/020617/93c5fd?text=${project.title.split(' ').join('+')}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-orbitron">{project.title}</h3>
                    <span className="text-sm text-neon-blue flex-shrink-0 ml-2 text-right">{project.date}</span>
                  </div>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-neon-blue/10 text-neon-blue rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}


