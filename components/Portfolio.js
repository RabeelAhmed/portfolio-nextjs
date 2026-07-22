"use client"

import Image from 'next/image'
import siteConfig from '../data/siteConfig'
import { m } from 'framer-motion'
import { FiGithub, FiExternalLink, FiZap } from 'react-icons/fi'
import { fadeIn, staggerContainer, textVariant } from '../utils/animations'

export default function Portfolio() {
  const featuredProjects = siteConfig.portfolio.filter(item => item.featured)
  const regularProjects = siteConfig.portfolio.filter(item => !item.featured)

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16">
          <m.h2 variants={textVariant(0.3)} className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</m.h2>
          <m.p variants={textVariant(0.4)} className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of digital solutions I&apos;ve engineered — from flagship AI-integrated web applications to real-time interactive full-stack platforms.
          </m.p>
        </div>

        {/* Featured / Special Flagship Projects Section */}
        {featuredProjects.map((item, index) => (
          <m.article
            key={item.id}
            variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
            className="group relative glass rounded-3xl overflow-hidden mb-16 border border-accent/30 hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20"
          >
            {/* Glowing background gradient accent */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 items-center relative z-10">
              {/* Media Preview Column */}
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden group/img border border-white/10 shadow-lg">
                <Image
                  src={item.image}
                  alt={`${item.title} — Flagship Project by Rabeel Ahmed`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <m.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open Live Demo of ${item.title}`}
                    className="px-5 py-3 rounded-xl bg-accent text-white font-semibold flex items-center gap-2 shadow-lg hover:bg-accent/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink size={18} />
                    <span>Live Demo</span>
                  </m.a>
                  {item.github && (
                    <m.a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.title} on GitHub`}
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub size={20} />
                    </m.a>
                  )}
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-wider uppercase mb-4">
                    <FiZap className="animate-pulse" size={14} />
                    <span>{item.badge || 'FLAGSHIP PROJECT • AI INTEGRATED'}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1 group-hover:text-accent transition-colors">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {item.title}
                    </a>
                  </h3>

                  {/* Subtitle */}
                  {item.subtitle && (
                    <p className="text-accent/70 text-xs font-semibold tracking-widest uppercase mb-4">{item.subtitle}</p>
                  )}


                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Features List */}
                  {item.keyFeatures && (
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Highlights:</h4>
                      <ul className="text-xs md:text-sm text-gray-300 space-y-2">
                        {item.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent font-bold mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(item.tags || []).map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-6 rounded-xl bg-accent text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/25"
                  >
                    <FiExternalLink size={18} />
                    <span>Explore Traveler Live</span>
                  </a>
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.title} on GitHub`}
                      className="py-3 px-5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-semibold"
                    >
                      <FiGithub size={18} />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </m.article>
        ))}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((item, index) => (
            <m.article
              key={item.id}
              variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
              whileHover={{ y: -10 }}
              className="group glass rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-500 hover:shadow-premium flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} — Project by Rabeel Ahmed`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Desktop hover overlay */}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4">
                    <m.a
                      href={item.link || item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.title}`}
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-accent transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {item.link ? <FiExternalLink size={20} /> : <FiGithub size={20} />}
                    </m.a>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                  )}
                  
                  {item.keyFeatures && (
                    <ul className="text-xs text-gray-500 mb-4 list-disc pl-4 space-y-1">
                      {item.keyFeatures.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {(item.tags || ['React', 'Next.js', 'Tailwind']).map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                <div className="flex gap-3">
                  <a
                    href={item.link || item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title}`}
                    className="flex items-center gap-2 flex-1 justify-center py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                  >
                    {item.link ? <FiExternalLink size={16} /> : <FiGithub size={16} />}
                    <span>{item.link ? 'View Project' : 'GitHub'}</span>
                  </a>
                </div>
              </div>
            </m.article>
          ))}
        </div>
      </m.div>
    </section>
  )
}
