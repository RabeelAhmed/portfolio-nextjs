import { useState } from 'react'
import siteConfig from '../data/siteConfig'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

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

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (res.ok && result.status === 'success') {
        setStatus('SUCCESS');
        e.target.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    } finally {
      setLoading(false);
    }
  }

  const contactInfo = [
    { icon: <FiMapPin />, label: 'Location', value: siteConfig.contact.address },
    { icon: <FiPhone />, label: 'Phone', value: siteConfig.contact.phone },
    { icon: <FiMail />, label: 'Email', value: siteConfig.contact.email },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let&apos;s Create <br /> <span className="text-gradient">Something Great</span></h2>
            <p className="text-gray-400 text-lg mb-12">
              Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-12">
              {siteConfig.contact.social.map((s, i) => (
                <a 
                  key={i} 
                  href={s.link} 
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent transition-all duration-300"
                >
                  <span className="text-sm font-bold">{s.name.charAt(0)}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass p-10 rounded-[32px] border border-white/5 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    name="name" 
                    required 
                    placeholder="John Doe" 
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent/50 focus:bg-white/10 transition-all outline-none text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="john@example.com" 
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent/50 focus:bg-white/10 transition-all outline-none text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Project Message</label>
                <textarea 
                  name="message" 
                  required 
                  placeholder="Tell me about your project..." 
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent/50 focus:bg-white/10 transition-all outline-none h-40 resize-none text-white"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn-accent w-full flex items-center justify-center gap-3 py-4 disabled:opacity-50"
              >
                {loading ? 'Sending Message...' : 'Send Message'}
                <FiSend />
              </button>

              {status === 'SUCCESS' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-center font-medium">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'ERROR' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-center font-medium">
                  Failed to send message. Please try again or email me directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
