'use client'

import { NextStudio } from 'next-sanity/studio'
import { StudioProvider, StudioLayout } from 'sanity'
import config from '../../../sanity.config'
import { useEffect, useState } from 'react'

export default function StudioPage() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div>Loading Sanity Studio...</div>
  }

  return (
    <StudioProvider config={config}>
      <StudioLayout />
    </StudioProvider>
  )
} 