import React from 'react'
import type { Metadata } from "next"

export const metadata:Metadata = {
    title: 'Principal Page',
    description: 'This is the Principal Page',
    keywords: ['About Page', 'Fernando', 'Información', '...'],
    
}

export default function PircingPage() {
  return (
    <div>
      <span className='text-5xl'>Pircing page </span>
    </div>
  )
}


