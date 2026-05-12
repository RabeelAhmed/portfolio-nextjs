"use client"

import { useState } from 'react'
import siteConfig from '../data/siteConfig'
import { m } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { fadeIn, staggerContainer } from '../utils/animations'

// Map social name → icon component (tree-shakeable named imports)
const socialIconMap = {
  LinkedIn: FaLinkedin,
  GitHub:   FaGithub,
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  const contactInfo = [
    { icon: <FiMapPin aria-hidden="true" />, label: 'Location', value: siteConfig.contact.address },
    { icon: <FiPhone aria-hidden="true" />, label: 'Phone', value: siteConfig.contact.phone },
    { icon: <FiMail aria-hidden="true" />, label: 'Email', value: siteConfig.contact.email },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-5 gap-16">
          <m.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
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
              {siteConfig.contact.social.map((s, i) => {
                const Icon = socialIconMap[s.name]
                return (
                  <m.a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Rabeel Ahmed on ${s.name}`}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {Icon
                      ? <Icon size={20} aria-hidden="true" />
                      : <span className="text-sm font-bold">{s.name.charAt(0)}</span>
                    }
                  </m.a>
                )
              })}
            </div>
          </m.div>

          <m.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="lg:col-span-3"
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="glass p-10 rounded-[32px] border border-white/5 space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <m.input
                    id="contact-name"
                    whileFocus={{ scale: 1.01 }}
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent/50 focus:bg-white/10 transition-all outline-none text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <m.input
                    id="contact-email"
                    whileFocus={{ scale: 1.01 }}
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent/50 focus:bg-white/10 transition-all outline-none text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Project Message</label>
                <m.textarea
                  id="contact-message"
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent/50 focus:bg-white/10 transition-all outline-none h-40 resize-none text-white"
                ></m.textarea>
              </div>

              <m.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`btn-accent w-full flex items-center justify-center gap-3 py-4 disabled:opacity-50 ${
                  status === 'success' ? 'bg-emerald-500 hover:bg-emerald-500' :
                  status === 'error'   ? 'bg-red-500 hover:bg-red-500' : ''
                }`}
              >
                {status === 'idle'    && <><span>Send Message</span><FiSend aria-hidden="true" /></>}
                {status === 'sending' && <span>Sending...</span>}
                {status === 'success' && <span>Message Sent ✓</span>}
                {status === 'error'   && <span>Failed. Try Again</span>}
              </m.button>

              {status === 'success' && (
                <div role="alert" className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-center font-medium">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div role="alert" className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-center font-medium">
                  Failed to send message. Please try again or email me directly.
                </div>
              )}
            </form>
          </m.div>
        </div>
      </m.div>
    </section>
  )
}
