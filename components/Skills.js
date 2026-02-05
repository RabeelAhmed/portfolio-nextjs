import { useState, useMemo } from 'react'
import siteConfig from '../data/siteConfig'
import { motion, AnimatePresence } from 'framer-motion'
import * as SiIcons from 'react-icons/si'
import * as VscIcons from 'react-icons/vsc'

export default function Skills() {
  const [tab, setTab] = useState('skills')

  const currentItems = useMemo(() => {
    return tab === 'skills' ? siteConfig.skills.list : siteConfig.skills.tools
  }, [tab])
  
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">My Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tools & Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I leverage a modern tech stack to build high-performance, scalable applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 rounded-2xl glass-light border border-white/5">
            {['skills', 'tools'].map((t) => (
              <button 
                key={t}
                onClick={() => setTab(t)} 
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
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 min-h-[300px]"
          >
            {currentItems.map((s, idx) => {
              const Icon = SiIcons[s.icon] || VscIcons[s.icon]
              return (
                <motion.div 
                  key={s.name} 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                  className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-accent/40 hover:bg-white/5 transition-all group cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 flex-shrink-0">
                    {Icon ? <Icon size={32} /> : <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
                  </div>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors text-center break-words max-w-full">
                    {s.name}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

