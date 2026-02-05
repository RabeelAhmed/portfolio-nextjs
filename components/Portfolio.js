import Image from 'next/image'
import siteConfig from '../data/siteConfig'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">Selected Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Recent Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of digital solutions I&apos;ve built, ranging from complex full-stack applications to interactive front-end experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-500 hover:shadow-premium"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-accent transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-accent transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {/* Tag examples, usually would come from data */}
                  {['React', 'Next.js', 'Tailwind'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

