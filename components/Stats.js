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
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
        {siteConfig.stats.map((s, index) => {
          const Icon = icons[s.icon] || FaClock
          return (
            <motion.div 
              key={s.id} 
              className="glass p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-2xl bg-accent/5 text-accent group-hover:bg-accent/10 transition-colors">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">{s.title.split(' ').slice(1).join(' ')}</h3>
                  <p className="text-3xl font-bold text-white tracking-tight">
                    {s.title.split(' ')[0]}
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
