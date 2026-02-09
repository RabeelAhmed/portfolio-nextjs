import Image from 'next/image'
import siteConfig from '../data/siteConfig'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/animations'

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10"
      >
        <motion.div
          variants={fadeIn('right', 'spring', 0.2, 1)}
          className="relative"
        >
          <div className="absolute -inset-4 bg-accent/20 rounded-[40px] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <motion.div 
            className="relative aspect-square md:aspect-[4/5] rounded-[32px] overflow-hidden glass border border-white/10 p-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/profile.png"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                alt="Rabeel Ahmed"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
        >
          <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Driven by Passion, <br />
            <span className="text-gradient">Defined by Code.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            {siteConfig.about.paragraph}
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a 
              href="#contact" 
              className="btn-accent px-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Work With Me
            </motion.a>
            <motion.a 
              href="/CV.pdf" 
              download 
              className="px-10 py-3 rounded-full border border-white/10 glass hover:bg-white/5 transition-all text-white font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

