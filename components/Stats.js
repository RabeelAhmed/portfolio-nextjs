// Enhanced Stats Component
import { FaClock, FaTasks, FaSmile } from 'react-icons/fa'
import siteConfig from '../data/siteConfig'
import { motion } from 'framer-motion'

import { 
  FaCode, 
  FaLaptopCode, 
  FaTools, 
  FaProjectDiagram 
} from 'react-icons/fa'

const icons = { 
  FaCode, 
  FaLaptopCode, 
  FaTools, 
  FaProjectDiagram 
}


export default function Stats(){
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/5 to-blue-900/10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {siteConfig.stats.map((s, index) => {
          const Icon = icons[s.icon] || FaClock
          return (
            <motion.div 
              key={s.id} 
              className="card bg-[#111]/30 backdrop-blur-sm border border-[#333]/50 hover:border-blue-500/30 hover:bg-[#111]/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 group"
              initial={{opacity:0, y:30, scale:0.9}} 
              whileInView={{opacity:1, y:0, scale:1}} 
              transition={{duration:0.6, delay:index * 0.1}}
              viewport={{once: true}}
              whileHover={{y: -8, scale: 1.02}}
            >
              <div className="flex items-center gap-6 p-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 group-hover:border-blue-500/40 transition-all duration-300">
                  <Icon size={28} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                    {s.title}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}