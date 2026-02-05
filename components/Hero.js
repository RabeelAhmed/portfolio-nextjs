import Image from 'next/image'
import siteConfig from '../data/siteConfig'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-6">
      {/* Dynamic Background */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full glass-light text-accent text-sm font-semibold tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Available for new opportunities
          </motion.span>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white">Crafting</span> <br />
            <span className="text-gradient">Digital</span> Experiences
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I&apos;m a full-stack developer dedicated to building impactful, user-centric web applications that blend logic with beautiful design.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#portfolio" className="btn-accent flex items-center gap-2 group">
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-3 glass hover:bg-white/5 transition-all duration-300 font-semibold rounded-full flex items-center gap-2 border-white/10">
              Let&apos;s Talk
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            {/* Animated Glow Rings */}
            <div className="absolute inset-x-0 inset-y-0 rounded-full border border-accent/20 animate-slow-spin"></div>
            <div className="absolute inset-x-8 inset-y-8 rounded-full border border-secondary/20 animate-slow-spin [animation-direction:reverse]"></div>
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden glass shadow-2xl border border-white/10 p-4">
              <div className="relative w-full h-full rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/profile.png"
                  alt="Rabeel Ahmed"
                  fill
                  sizes="(max-width: 768px) 300px, 450px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-primary/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl hidden md:block z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold">12+</div>
                <div className="text-xs">
                  <p className="text-white font-bold">Projects</p>
                  <p className="text-gray-400">Completed</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 -left-4 bg-primary/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl hidden md:block z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 font-bold">3+</div>
                <div className="text-xs">
                  <p className="text-white font-bold">Years</p>
                  <p className="text-gray-400">Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

