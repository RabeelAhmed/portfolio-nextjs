import Image from 'next/image'
import siteConfig from '../data/siteConfig'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { fadeIn, staggerContainer, textVariant } from '../utils/animations'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.span variants={textVariant(0.2)} className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">Selected Works</motion.span>
          <motion.h2 variants={textVariant(0.3)} className="text-4xl md:text-5xl font-bold text-white mb-6">Recent Projects</motion.h2>
          <motion.p variants={textVariant(0.4)} className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of digital solutions I&apos;ve built, ranging from complex full-stack applications to interactive front-end experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
              whileHover={{ y: -10 }}
              className="group glass rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-500 hover:shadow-premium"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   <motion.a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub size={20} />
                  </motion.a>
                  <motion.a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
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
      </motion.div>
    </section>
  )
}

