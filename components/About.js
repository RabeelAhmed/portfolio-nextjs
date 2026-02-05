import Image from 'next/image'
import siteConfig from '../data/siteConfig'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-accent/20 rounded-[40px] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative aspect-square md:aspect-[4/5] rounded-[32px] overflow-hidden glass border border-white/10 p-4">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/profile.png"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Rabeel Ahmed"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
            <a href="#contact" className="btn-accent px-10">
              Work With Me
            </a>
            <a 
              href="/CV.pdf" 
              download 
              className="px-10 py-3 rounded-full border border-white/10 glass hover:bg-white/5 transition-all text-white font-semibold"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

