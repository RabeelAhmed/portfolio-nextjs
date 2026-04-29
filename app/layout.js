import '../styles/globals.css'
import { Inter } from 'next/font/google'
import MotionProvider from '../components/MotionProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Rabeel Ahmed | Full Stack Web Developer',
  description: 'Rabeel Ahmed is a full-stack web developer from Pakistan specializing in MERN stack, Next.js, Supabase, and React. Explore his portfolio, projects, and skills.',
  keywords: [
    'Rabeel Ahmed',
    'Rabeel Ahmed developer',
    'Rabeel Ahmed portfolio',
    'Rabeel Ahmed Pakistan',
    'Rabeel Ahmed web developer',
    'Rabeel Ahmed full stack developer',
    'Rabeel Ahmed MERN stack',
    'Rabeel Ahmed Next.js',
    'Rabeel Ahmed React developer',
    'Rabeel Ahmed Lahore',
    'Full stack developer Pakistan',
    'MERN stack developer Pakistan',
    'Next.js developer Pakistan',
    'React developer Lahore',
    'Supabase developer Pakistan',
    'Web developer Lahore Pakistan',
  ],
  authors: [{ name: 'Rabeel Ahmed' }],
  creator: 'Rabeel Ahmed',
  metadataBase: new URL('https://rabeelportfolio.netlify.app'),
  openGraph: {
    title: 'Rabeel Ahmed | Full Stack Web Developer',
    description: 'Portfolio of Rabeel Ahmed — MERN stack, Next.js, Supabase, and React developer from Pakistan.',
    url: 'https://rabeelportfolio.netlify.app',
    siteName: 'Rabeel Ahmed Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rabeel Ahmed - Full Stack Developer',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabeel Ahmed | Full Stack Web Developer',
    description: 'Portfolio of Rabeel Ahmed — MERN stack developer from Pakistan.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  alternates: {
    canonical: 'https://rabeelportfolio.netlify.app',
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rabeel Ahmed',
  url: 'https://rabeelportfolio.netlify.app',
  jobTitle: 'Full Stack Web Developer',
  description: 'Full-stack web developer from Pakistan specializing in MERN stack, Next.js, Supabase, and React.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'MongoDB',
    'Supabase',
    'Tailwind CSS',
    'MERN Stack',
    'Express.js',
    'JavaScript',
    'TypeScript',
  ],
  sameAs: [
    'https://github.com/RabeelAhmed',
    'https://www.linkedin.com/in/rabeel-ahmed-b1823b2b2/',
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="D7esaZKJ1Ul04XFd-cmBp0v9GZZtKtLBXLWiCH2Tlog" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <MotionProvider>
          {children}
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
