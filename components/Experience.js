"use client"

import { m } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/animations'
import { FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    role: 'Full Stack Developer (Freelance)',
    period: '2024 - Present',
    description: 'Developing and maintaining responsive web applications using Next.js, React, Node.js, and MongoDB. Built full-stack applications like Voting Apps, Video Downloaders, and Doctor Appointment systems. Integrated AI recommendations and machine learning models for personalized travel platforms.'
  },
  {
    role: 'MERN Stack Developer (Independent Projects)',
    period: '2023 - 2024',
    description: 'Designed and deployed robust database schemas using MongoDB and MySQL. Created full-stack applications with role-based authentication, real-time updates, and responsive layouts. Built custom APIs and optimized website loading speeds using Next.js static generation.'
  },
  {
    role: 'Web Developer (Academic & Open-Source)',
    period: '2022 - 2023',
    description: 'Mastered HTML, CSS, JavaScript, and Bootstrap to build clean, functional websites. Participated in open-source projects, version control workflows with Git/GitHub, and set up Dockerized environments.'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16">
          <m.h2
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Experience
          </m.h2>
          <m.p
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            A history of building responsive, robust, and user-centric digital experiences.
          </m.p>
        </div>

        <div className="relative border-l border-white/10 pl-6 ml-4 md:pl-8 md:ml-8 space-y-12">
          {experiences.map((exp, idx) => (
            <m.div
              key={idx}
              variants={fadeIn('left', 'tween', 0.1 * idx, 0.6)}
              className="relative group"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-primary border-2 border-accent flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <FaBriefcase size={10} />
              </div>

              {/* Experience Card */}
              <div className="glass p-6 md:p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-semibold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20 self-start md:self-auto">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  )
}
