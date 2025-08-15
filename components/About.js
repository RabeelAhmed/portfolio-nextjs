// Enhanced About Component
import Image from 'next/image'
import siteConfig from '../data/siteConfig'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative w-full h-96 rounded-2xl overflow-hidden splash shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/profile.png"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
                style={{ objectPosition: 'center 3.5%' }}
                alt="about"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            {siteConfig.about.heading}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {siteConfig.about.paragraph}
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <motion.a
              href="#contact"
              className="btn-accent text-center relative overflow-hidden group shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 px-6 py-3 flex items-center border border-[#333] rounded-2xl">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.a>

            <motion.a
              href="/CV.pdf"
              download
              className="px-6 py-3 rounded-2xl border border-[#333] bg-[#111]/50 backdrop-blur-sm hover:border-blue-500/50 hover:bg-[#222]/50 transition-all duration-300 text-center hover:shadow-lg transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
