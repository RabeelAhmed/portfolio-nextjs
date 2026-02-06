import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <>
      <Head>
        <title>Rabeel Ahmed | Web Developer Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of Rabeel Ahmed, a full-stack developer specialized in MERN stack, Next.js, and building impactful web applications." />
        <meta property="og:title" content="Rabeel Ahmed | Web Developer Portfolio" />
        <meta property="og:description" content="Crafting digital experiences with MERN stack and Next.js. View projects and experience of Rabeel Ahmed." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.png" />
        <meta name="google-site-verification" content="D7esaZKJ1Ul04XFd-cmBp0v9GZZtKtLBXLWiCH2Tlog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
