import { motion } from 'framer-motion'

export default function Footer(){
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative py-12 border-t border-white/5 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-black tracking-tighter mb-2">
              <span className="text-white">RABEEL</span>
              <span className="text-accent">.</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
              Building modern digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
            <p className="text-xs text-gray-600">
              © {currentYear} Rabeel Ahmed. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <motion.div 
        className="fixed bottom-8 right-8 z-[60]"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all shadow-premium"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </motion.div>
    </footer>
  )
}
