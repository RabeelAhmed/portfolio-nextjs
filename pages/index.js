import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Stats = dynamic(() => import('../components/Stats'))
const About = dynamic(() => import('../components/About'))
const Skills = dynamic(() => import('../components/Skills'))
const Portfolio = dynamic(() => import('../components/Portfolio'))
const Contact = dynamic(() => import('../components/Contact'))
const Footer = dynamic(() => import('../components/Footer'))

export default function Home(){
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}