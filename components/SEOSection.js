"use client"

import { m } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/animations'

export default function SEOSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary/20">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-5xl mx-auto px-6 relative z-10"
      >
        <m.div
          variants={fadeIn('up', 'tween', 0.2, 0.6)}
          className="glass p-8 md:p-12 rounded-[32px] border border-white/5 hover:border-accent/20 transition-all duration-500 shadow-premium text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            Hire Rabeel Ahmed Sulehria – <span className="text-gradient">Full Stack Developer</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            Looking for a skilled developer to build a performant, custom-tailored web solution? As an experienced <strong>Full Stack Developer</strong> specializing in the MERN stack, I offer high-quality engineering services from backend database design to responsive frontend interfaces. Whether it is building interactive user journeys or establishing secure server-side logic, I ensure your application operates at scale.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            My primary stack covers React and Next.js for high-fidelity web interfaces, supported by Express and Node.js for robust APIs. Data is stored securely and query-optimized in MongoDB and MySQL. By hiring a dedicated <strong>MERN Stack Developer</strong>, <strong>React Developer</strong>, <strong>Next.js Developer</strong>, <strong>MongoDB Developer</strong>, and <strong>Node.js Developer</strong> all in one, you receive a cohesive engineering process focused on performance, Core Web Vitals, and search engine visibility.
          </p>
        </m.div>
      </m.div>
    </section>
  )
}
