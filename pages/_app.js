import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <>
      <Head>
        <title>Rabeel Ahmed Sulehria | Web Developer Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of Rabeel Ahmed Sulehria (Rabeel Sulehria), a full-stack developer specialized in MERN stack, Next.js, and building impactful web applications." />
        <meta name="keywords" content="Rabeel Ahmed, Rabeel Sulehria, Rabeel Ahmed Sulehria, Web Developer, Full Stack Developer, MERN Stack, Next.js, Portfolio" />
        <meta property="og:title" content="Rabeel Ahmed Sulehria | Web Developer Portfolio" />
        <meta property="og:description" content="Crafting digital experiences with MERN stack and Next.js. View projects and experience of Rabeel Ahmed Sulehria." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.png" />
        <meta name="google-site-verification" content="D7esaZKJ1Ul04XFd-cmBp0v9GZZtKtLBXLWiCH2Tlog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
