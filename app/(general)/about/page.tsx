//asi funciona
// export const metadata = {
//     title: 'SEO Title',
//     description: 'SEO Descript'
// }
//asi funcionaria con type 
import type { Metadata } from "next"

//Generado de manera estatica
export const metadata:Metadata = {
    title: 'SEO Title',
    description: 'SEO Descript',
    keywords: ['About Page', 'Fernando', 'Información', '...'],
    
}

export default function AboutPage() {
    return (
        <>
            <span className="text-5xl">about page</span>
        </>
    )
}

