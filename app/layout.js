import '../styles/globals.css'
import { Inter } from 'next/font/google'
import MotionProvider from '../components/MotionProvider'
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Rabeel Ahmed Sulehria | Full Stack Developer | MERN Stack Developer',
  description: 'Rabeel Ahmed Sulehria is a Full Stack Developer and MERN Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, JavaScript, and modern web applications.',
  keywords: [
    'Rabeel Ahmed',
    'Rabeel Ahmed Sulehria',
    'Rabeel Sulehria',
    'Rabeel Portfolio',
    'Full Stack Developer',
    'MERN Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'MongoDB Developer',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Full Stack Developer Pakistan',
    'MERN Stack Developer Pakistan'
  ],
  authors: [{ name: 'Rabeel Ahmed Sulehria' }],
  creator: 'Rabeel Ahmed Sulehria',
  metadataBase: new URL('https://rabeelportfolio.netlify.app'),
  openGraph: {
    title: 'Rabeel Ahmed Sulehria | Full Stack Developer | MERN Stack Developer',
    description: 'Rabeel Ahmed Sulehria is a Full Stack Developer and MERN Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, JavaScript, and modern web applications.',
    url: 'https://rabeelportfolio.netlify.app',
    siteName: 'Rabeel Ahmed Sulehria Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/rabeel-ahmed-sulehria.webp',
        width: 1200,
        height: 630,
        alt: 'Rabeel Ahmed Sulehria Full Stack Developer',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabeel Ahmed Sulehria | Full Stack Developer | MERN Stack Developer',
    description: 'Rabeel Ahmed Sulehria is a Full Stack Developer and MERN Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, JavaScript, and modern web applications.',
    images: ['/rabeel-ahmed-sulehria.webp'],
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
  name: 'Rabeel Ahmed Sulehria',
  url: 'https://rabeelportfolio.netlify.app',
  jobTitle: 'Full Stack Developer',
  image: 'https://rabeelportfolio.netlify.app/rabeel-ahmed-sulehria.webp',
  description: 'Rabeel Ahmed Sulehria is a Full Stack Developer and MERN Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, JavaScript, and modern web applications.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sialkot',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JavaScript',
    'Tailwind CSS',
    'Docker',
    'REST APIs',
    'Full Stack Development'
  ],
  sameAs: [
    'https://github.com/RabeelAhmed',
    'https://www.linkedin.com/in/rabeel-ahmed-b1823b2b2/',
    'https://www.facebook.com/rabeel.ahmed.sulehria',
    'https://www.instagram.com/rabeel.ahmed.sulehria'
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
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      </body>
    </html>
  )
}
