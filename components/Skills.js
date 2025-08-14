// Enhanced Skills Component
import { useState } from 'react'
import siteConfig from '../data/siteConfig'
import { motion } from 'framer-motion'

export default function Skills(){
  const [tab, setTab] = useState('skills')
  
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{opacity:0, y:30}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.8}}
          viewport={{once: true}}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            What My Programming Skills Included?
          </h3>
          <p className="text-gray-400 text-lg">A short description about the programming skills and tools.</p>
        </motion.div>

        <motion.div 
          className="flex justify-center mb-8"
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.6, delay:0.2}}
          viewport={{once: true}}
        >
          <div className="flex gap-2 p-1 rounded-2xl bg-[#111]/50 backdrop-blur-sm border border-[#333]/50">
            <button 
              onClick={() => setTab('skills')} 
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                tab === 'skills'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Skills
            </button>
            <button 
              onClick={() => setTab('tools')} 
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                tab === 'tools'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Tools
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {(tab === 'skills' ? siteConfig.skills.list : siteConfig.skills.tools).map((s, idx) => (
            <motion.div 
              key={idx} 
              className="card text-center py-6 px-4 bg-[#111]/30 backdrop-blur-sm border border-[#333]/50 hover:border-blue-500/30 hover:bg-[#111]/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
              initial={{opacity:0, y:30, scale:0.9}} 
              whileInView={{opacity:1, y:0, scale:1}} 
              transition={{duration:0.5, delay:idx * 0.05}}
              viewport={{once: true}}
              whileHover={{scale: 1.05, y: -5}}
            >
              <div className="text-sm font-semibold group-hover:text-blue-400 transition-colors duration-300">
                {s}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}