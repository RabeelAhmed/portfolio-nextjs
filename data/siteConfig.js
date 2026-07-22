const siteConfig = {
  siteTitle: 'Rabeel Ahmed — Web Developer',
  description: 'Creative & Functional Web Solutions',
  hero: {
    title: 'Building Modern, User-Focused Web Apps',
    cta: 'Contact Me'
  },
  stats: [
    { id: 1, title: '3+ Years Development Experience', icon: 'FaCode' },
    { id: 2, title: '12+ Full-Stack Projects', icon: 'FaLaptopCode' },
    { id: 3, title: '5+ Technologies Mastered', icon: 'FaTools' },
    { id: 4, title: '1 FYP with ML Integration', icon: 'FaProjectDiagram' }
  ],
  about: {
    heading: 'Need a Modern Web App?',
    paragraph: 'I am Rabeel Ahmed Sulehria, a passionate web developer with over two years of experience in building full-stack applications using the MERN stack, and SQL/NoSQL databases. My work ranges from travel platforms with AI recommendations to secure role-based login systems and real-time features. I focus on creating applications that are not only visually appealing but also secure, scalable, and optimized for performance.'
  },
  skills: {
    list: [
      { name: 'HTML', icon: 'SiHtml5' },
      { name: 'CSS', icon: 'SiCss3' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'React', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Express', icon: 'SiExpress' },
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'Bootstrap', icon: 'SiBootstrap' },
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub Actions', icon: 'SiGithubactions' },
      { name: 'Docker', icon: 'SiDocker' }
    ],
    tools: [
      { name: 'VS Code', icon: 'VscVscode' },
      { name: 'Postman', icon: 'SiPostman' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'Npm', icon: 'SiNpm' },
      { name: 'MongoDB Compass', icon: 'SiMongodb' },
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'Docker Desktop', icon: 'SiDocker' }
    ]
  },
  portfolio: [
    {
      id: 'traveler',
      featured: true,
      badge: 'FLAGSHIP PROJECT • AI INTEGRATED',
      title: 'Traveler — Social Travel Platform',
      subtitle: 'AI-Powered · Real-Time · Cloud-Native',
      image: '/traveler-social.png',
      link: 'https://traveler-social.netlify.app/',
      github: 'https://github.com/RabeelAhmed/Traveler',
      description: 'A production-grade social travel platform with a custom KNN AI Travel Advisor, geo-tagged interactive map stories, real-time messaging, collaborative journey planning, and serverless Redis caching — deployed across Netlify & Vercel.',
      tags: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Leaflet Maps', 'Socket.io', 'Upstash Redis', 'Cloudinary'],
      keyFeatures: [
        'KNN AI Advisor — personalized destination recommendations across 69 Pakistani locations',
        'Geo-tagged map stories, live weather dashboard & travel wishlist',
        'JWT auth, Cloudinary media uploads, Redis caching with MongoDB fallback',
        'Collaborative journeys, achievement badges & real-time DMs'
      ]
    },


    {
      id: 1,
      title: 'Asteroid Explorer',
      image: '/portfolio1.png',
      link: 'https://github.com/RabeelAhmed/asteroid-explorer',
      description: 'An interactive web application that retrieves and visualizes real-time asteroid data using NASA\'s NeoWS API.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'NASA API', 'Framer Motion'],
      keyFeatures: ['NASA API Integration', 'Asteroid Size charts', 'Distance visualizer']
    },
    {
      id: 2,
      title: 'Voting App',
      image: '/portfolio2.png',
      link: 'https://github.com/RabeelAhmed/Voting_app',
      description: 'A secure, real-time online voting system with role-based dashboard controls for administrators and voters.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      keyFeatures: ['JWT Authentication', 'Real-time voting tallies', 'Admin candidate controls']
    },
    {
      id: 3,
      title: 'Universal Video Downloader',
      image: '/portfolio3.png',
      link: 'https://github.com/RabeelAhmed/universal-video-downloader',
      description: 'A lightweight web utility that allows users to download videos from multiple online video platforms.',
      tags: ['React', 'Express', 'Node.js', 'Tailwind CSS', 'API Integration'],
      keyFeatures: ['Fast video format extraction', 'Multi-source downloads', 'Sleek progress bar']
    },
    {
      id: 4,
      title: 'Mood Changer',
      image: '/portfolio4.png',
      link: 'https://github.com/RabeelAhmed/QuranicMood',
      description: 'A reflective web app offering Quranic verses and positive affirmations selected according to the user\'s emotional state.',
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Next.js'],
      keyFeatures: ['Interactive mood selector', 'Curated translations', 'Dark-themed responsive UI']
    },
    {
      id: 5,
      title: 'Animated Website',
      image: '/portfolio5.png',
      link: 'https://github.com/RabeelAhmed/ochi-clone',
      description: 'A high-fidelity frontend clone of the award-winning Ochi design website, loaded with premium animations.',
      tags: ['React', 'Framer Motion', 'GSAP', 'Tailwind CSS', 'Locomotive Scroll'],
      keyFeatures: ['Inertial smooth scrolling', 'Interactive parallax panels', 'Custom mouse follower']
    },
    {
      id: 6,
      title: 'Pinterest Clone',
      image: '/portfolio6.png',
      link: 'https://github.com/RabeelAhmed/pinterest-clone',
      description: 'A full-stack photo sharing platform featuring masonry layout grids, user uploads, and customizable boards.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      keyFeatures: ['Masonry grid layout', 'User uploads & dashboard', 'Save to boards feature']
    },
    {
      id: 7,
      title: 'Doctor Appointment App',
      image: '/doctor-appointment.png',
      link: 'https://github.com/RabeelAhmed/doctor-appointment',
      description: 'A medical scheduling platform that allows patients to search for healthcare providers and book consults.',
      tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      keyFeatures: ['Appointment scheduler', 'Doctor & patient portal', 'Secure medical reports']
    },
    {
      id: 8,
      title: 'Blood Donation Finder',
      image: '/donor-finder.png',
      link: 'https://github.com/RabeelAhmed/blood-donation-finder',
      description: 'A community-driven web application to connect local blood donors with patients in urgent need.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Google Maps API'],
      keyFeatures: ['Geographic donor lookup', 'Real-time blood requests', 'SMS notifications']
    }
  ],
  contact: {
    address: 'Sialkot Punjab, Pakistan',
    phone: '+92 308 4739209',
    email: 'rabeelsulehria3@gmail.com',
    social: [
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/rabeel-ahmed-b1823b2b2/' },
      { name: 'GitHub', link: 'https://github.com/RabeelAhmed' }
    ]
  }
}

export default siteConfig;
