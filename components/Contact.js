import { useState } from 'react'
import siteConfig from '../data/siteConfig'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData(e.target);
    const formData = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      message: form.get('message')
    };

    // Log the data being sent (for debugging)
    console.log('Sending data:', formData);

    try {
      // Call your Next.js API route instead of Google Apps Script directly
      const res = await fetch('/api/contact', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      console.log('API response:', result);

      if (res.ok && result.status === 'success') {
        setStatus('SUCCESS');
        e.target.reset(); // Reset form on success
      } else {
        console.error('API error:', result.message);
        setStatus('ERROR');
      }
      
    } catch (error) {
      console.error('Network error:', error);
      setStatus('ERROR');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
        <motion.div
          initial={{opacity:0, x:-50}} 
          whileInView={{opacity:1, x:0}} 
          transition={{duration:0.8}}
          viewport={{once: true}}
        >
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
            Have You Any Project? Please Drop a Message
          </h3>

          <div className="space-y-6 text-gray-300">
            <motion.div 
              className="flex items-center gap-4 p-4 rounded-lg bg-[#111]/30 backdrop-blur-sm border border-[#333]/50 hover:border-blue-500/30 transition-all duration-300"
              whileHover={{scale: 1.02}}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              {siteConfig.contact.address}
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4 p-4 rounded-lg bg-[#111]/30 backdrop-blur-sm border border-[#333]/50 hover:border-green-500/30 transition-all duration-300"
              whileHover={{scale: 1.02}}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              {siteConfig.contact.phone}
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4 p-4 rounded-lg bg-[#111]/30 backdrop-blur-sm border border-[#333]/50 hover:border-purple-500/30 transition-all duration-300"
              whileHover={{scale: 1.02}}
            >
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              {siteConfig.contact.email}
            </motion.div>
            
            <div className="flex gap-4 mt-6 flex-wrap">
              {siteConfig.contact.social.map((s,i)=> (
                <motion.a 
                  key={i} 
                  href={s.link} 
                  className="px-4 py-2 rounded-full bg-[#111]/50 border border-[#333]/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                  whileHover={{scale: 1.1, y: -2}}
                  whileTap={{scale: 0.95}}
                >
                  {s.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          initial={{opacity:0, x:50}} 
          whileInView={{opacity:1, x:0}} 
          transition={{duration:0.8, delay:0.2}}
          viewport={{once: true}}
        >
          <div className="space-y-6">
            <motion.input 
              name="name" 
              required 
              placeholder="Your name" 
              className="w-full p-4 rounded-2xl bg-[#0b0b0b]/80 backdrop-blur-sm border border-[#333]/50 focus:border-blue-500/70 focus:bg-[#111]/80 transition-all duration-300 focus:outline-none"
              whileFocus={{scale: 1.02}}
            />
            
            <motion.input 
              name="email" 
              type="email" 
              required 
              placeholder="Your email" 
              className="w-full p-4 rounded-2xl bg-[#0b0b0b]/80 backdrop-blur-sm border border-[#333]/50 focus:border-blue-500/70 focus:bg-[#111]/80 transition-all duration-300 focus:outline-none"
              whileFocus={{scale: 1.02}}
            />
            
            <motion.input 
              name="phone" 
              placeholder="Phone" 
              className="w-full p-4 rounded-2xl bg-[#0b0b0b]/80 backdrop-blur-sm border border-[#333]/50 focus:border-blue-500/70 focus:bg-[#111]/80 transition-all duration-300 focus:outline-none"
              whileFocus={{scale: 1.02}}
            />
            
            <motion.textarea 
              name="message" 
              required 
              placeholder="Message" 
              className="w-full p-4 rounded-2xl bg-[#0b0b0b]/80 backdrop-blur-sm border border-[#333]/50 focus:border-blue-500/70 focus:bg-[#111]/80 transition-all duration-300 focus:outline-none h-32 resize-none"
              whileFocus={{scale: 1.02}}
            ></motion.textarea>
          </div>
          
          <motion.button 
            type="submit" 
            className="btn-accent w-full relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl py-2"
            disabled={loading}
            whileHover={!loading ? {scale: 1.02, y: -2} : {}}
            whileTap={!loading ? {scale: 0.98} : {}}
          >
            <span className="relative z-10">
              {loading ? 'Sending...' : 'Submit'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </motion.button>
          
          {status === 'SUCCESS' && (
            <motion.p 
              className="text-green-400 text-center p-4 bg-green-400/10 rounded-lg border border-green-400/30"
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
            >
              Thanks! Message sent successfully.
            </motion.p>
          )}
          {status === 'ERROR' && (
            <motion.p 
              className="text-red-400 text-center p-4 bg-red-400/10 rounded-lg border border-red-400/30"
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
            >
              Oops! There was an error sending your message.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}