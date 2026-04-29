"use client"

import { LazyMotion } from 'framer-motion'

// Async import — keeps domAnimation out of the main bundle
// and avoids the "export *" Server Component boundary issue
const loadFeatures = () =>
  import('framer-motion').then((mod) => mod.domAnimation)

export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={loadFeatures}>
      {children}
    </LazyMotion>
  )
}
