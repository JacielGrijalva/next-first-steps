import type { Metadata } from "next"

export const metadata:Metadata = {
    title: 'Contact Page',
    description: 'Page of contact',
    keywords: ['About Page', 'Fernando', 'Información', '...'],
    
}


export default function ContactPage() {
  return (
    <div>
        <span className="text-5xl">Contact Page</span>
    </div>
  )
}
