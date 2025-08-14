// Enhanced Footer Component
import { motion } from 'framer-motion'

export default function Footer(){
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-[#0b0b0b]/30 to-transparent pointer-events-none"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Decorative line */}
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent mb-8"
          initial={{scaleX: 0}}
          whileInView={{scaleX: 1}}
          transition={{duration: 1}}
          viewport={{once: true}}
        />
        
        <motion.div 
          className="text-center"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
        >
          {/* Main footer content */}
          <div className="flex flex-col items-center gap-6">
            {/* Logo/Brand */}
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent uppercase"
              whileHover={{scale: 1.05}}
              transition={{duration: 0.3}}
            >
              Rabeel.
            </motion.div>
            
            {/* Social links or navigation could go here */}
            <motion.div 
              className="flex items-center gap-2 text-sm text-gray-400"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 0.3}}
              viewport={{once: true}}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Available for freelance work</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </motion.div>
          </div>
          
          {/* Copyright */}
          <motion.p 
            className="mt-8 text-sm text-gray-500 font-medium"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 0.5}}
            viewport={{once: true}}
          >
            © {currentYear} Rabeel. All rights reserved.
          </motion.p>
          
          {/* Subtle tagline */}
          <motion.p 
            className="mt-2 text-xs text-gray-600"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 0.7}}
            viewport={{once: true}}
          >
            Crafted with passion & precision
          </motion.p>
        </motion.div>
        
        {/* Back to top indicator */}
<motion.div 
  className="absolute right-6 top-6 opacity-30 hover:opacity-100 transition-opacity duration-300"
  whileHover={{y: -2}}
  initial={{opacity: 0, scale: 0}}
  whileInView={{opacity: 0.3, scale: 1}}
  transition={{duration: 0.6, delay: 1}}
  viewport={{once: true}}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // ✅ Smooth scroll to top
>
  <div className="w-8 h-8 rounded-full bg-gradient-to-t from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center cursor-pointer">
    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  </div>
</motion.div>

      </div>
    </footer>
  )
}