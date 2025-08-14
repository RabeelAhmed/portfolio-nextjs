// Enhanced Portfolio Component
import Image from 'next/image'
import siteConfig from '../data/siteConfig'
import { motion } from 'framer-motion'

export default function Portfolio(){
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{opacity:0, y:30}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.8}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            See My Works Which Will Amaze You!
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.portfolio.map((item, index) => (
            <motion.a 
              key={item.id} 
              href={item.link} 
              className="group block overflow-hidden rounded-2xl bg-[#111]/30 backdrop-blur-sm border border-[#333]/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
              initial={{opacity:0, y:30}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:0.6, delay:index * 0.1}}
              viewport={{once: true}}
              whileHover={{y: -10}}
            >
              <div className="relative w-full h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 bg-gradient-to-br from-[#0b0b0b]/80 to-[#111]/60 backdrop-blur-sm">
                <h4 className="font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <span>View Project</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
      </div>
    </section>
  )
}