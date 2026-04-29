"use client"

import { useState, useMemo } from 'react'
import siteConfig from '../data/siteConfig'
import { m, AnimatePresence } from 'framer-motion'
// ─────────────────────────────────────────────────────────────
// Individual icon imports (tree-shakeable) — replaces the
// bundle-killing `import * as SiIcons from 'react-icons/si'`
// which loaded the ENTIRE simple-icons library (~500+ icons).
// ─────────────────────────────────────────────────────────────
import { SiHtml5 }       from 'react-icons/si'
import { SiCss3 }        from 'react-icons/si'
import { SiJavascript }  from 'react-icons/si'
import { SiReact }       from 'react-icons/si'
import { SiNextdotjs }   from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiExpress }     from 'react-icons/si'
import { SiNodedotjs }   from 'react-icons/si'
import { SiMongodb }     from 'react-icons/si'
import { SiBootstrap }   from 'react-icons/si'
import { SiGit }         from 'react-icons/si'
import { SiPostman }     from 'react-icons/si'
import { SiGithub }      from 'react-icons/si'
import { SiNpm }         from 'react-icons/si'
import { SiMysql }       from 'react-icons/si'
import { VscVscode }     from 'react-icons/vsc'
import { fadeIn, staggerContainer, textVariant } from '../utils/animations'

// Map icon name strings (from siteConfig) → imported components
const iconMap = {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiBootstrap,
  SiGit,
  SiPostman,
  SiGithub,
  SiNpm,
  SiMysql,
  VscVscode,
}

export default function Skills() {
  const [tab, setTab] = useState('skills')

  const currentItems = useMemo(() => {
    return tab === 'skills' ? siteConfig.skills.list : siteConfig.skills.tools
  }, [tab])

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <m.span variants={textVariant(0.2)} className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">My Expertise</m.span>
          <m.h2 variants={textVariant(0.3)} className="text-4xl md:text-5xl font-bold text-white mb-6">Tools &amp; Technologies</m.h2>
          <m.p variants={textVariant(0.4)} className="text-gray-400 text-lg max-w-2xl mx-auto">
            I leverage a modern tech stack to build high-performance, scalable applications that deliver exceptional user experiences.
          </m.p>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn('up', 'tween', 0.4, 0.5)}
          className="flex justify-center mb-12"
        >
          <div className="flex p-1.5 rounded-2xl glass-light border border-white/5" role="tablist" aria-label="Skills categories">
            {['skills', 'tools'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                role="tab"
                aria-selected={tab === t}
                className={`px-8 py-3 rounded-xl transition-all duration-500 font-semibold capitalize ${
                  tab === t
                    ? 'bg-accent text-white shadow-premium'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </m.div>

        <AnimatePresence mode="wait">
          <m.div
            key={tab}
            variants={staggerContainer(0.05, 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 min-h-[300px]"
            role="tabpanel"
          >
            {currentItems.map((s, idx) => {
              const Icon = iconMap[s.icon]
              return (
                <m.div
                  key={s.name}
                  variants={fadeIn('up', 'spring', idx * 0.05, 0.75)}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-accent/40 hover:bg-white/5 transition-all group cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 flex-shrink-0">
                    {Icon
                      ? <Icon size={32} aria-hidden="true" />
                      : <div className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                    }
                  </div>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors text-center break-words max-w-full">
                    {s.name}
                  </span>
                </m.div>
              )
            })}
          </m.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
