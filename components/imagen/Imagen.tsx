// components/ImageComponent.tsx

import Image from 'next/image'

export default function Imagen() {
    return (
        <Image
            src="/meme.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
        />
    )
}