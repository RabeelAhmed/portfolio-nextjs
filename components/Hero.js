// Enhanced Hero Component
import Image from 'next/image'
import siteConfig from '../data/siteConfig'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center md:gap-12 relative z-10">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {siteConfig.hero.title}
          </motion.h1>

          <motion.p
            className="mt-6 text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creative solutions for modern products — design & development.
          </motion.p>

          <motion.a
            href="#contact"
            className="btn-accent mt-8 inline-block relative overflow-hidden group shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="relative z-10 px-2 py-4">{siteConfig.hero.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </motion.a>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="relative">
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-pulse"></div>
            <div
              className="absolute inset-4 rounded-full border border-purple-500/20 animate-spin"
              style={{ animationDuration: '8s' }}
            ></div>

            <div className="relative w-80 h-80 rounded-full overflow-hidden splash shadow-2xl">
              <Image
                src="/profile.png"
                alt="profile"
                fill
                sizes="(max-width: 768px) 80vw, 400px"
                className="object-cover hover:scale-110 transition-transform duration-500"
                style={{ objectPosition: 'center 2%' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
