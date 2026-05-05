"use client"

import Image from 'next/image'
import siteConfig from '../data/siteConfig'
import { m } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { fadeIn, staggerContainer, textVariant } from '../utils/animations'

export default function Portfolio() {
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
          <m.span variants={textVariant(0.2)} className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">Selected Works</m.span>
          <m.h2 variants={textVariant(0.3)} className="text-4xl md:text-5xl font-bold text-white mb-6">Recent Projects</m.h2>
          <m.p variants={textVariant(0.4)} className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of digital solutions I&apos;ve built, ranging from complex full-stack applications to interactive front-end experiences.
          </m.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.portfolio.map((item, index) => (
            <m.article
              key={item.id}
              variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
              whileHover={{ y: -10 }}
              className="group glass rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-500 hover:shadow-premium"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} — Project by Rabeel Ahmed`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Desktop hover overlay — hidden on mobile */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4">
                  <m.a
                    href={item.github || item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title} on GitHub`}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub size={20} />
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {(item.tags || ['React', 'Next.js', 'Tailwind']).map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile-only link buttons — always visible on touch screens */}
                <div className="flex gap-3 md:hidden mt-2">
                  <a
                    href={item.github || item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title} on GitHub`}
                    className="flex items-center gap-2 flex-1 justify-center py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                  >
                    <FiGithub size={16} />
                    <span>GitHub</span>
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
