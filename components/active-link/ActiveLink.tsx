//rafc -> generar la funcion
'use client'

import Link from "next/link"
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation"

interface Props {
    //Para poner que una properti es opcinal hay que poner ? => text?: string
    path: string,
    text: string
}

const ActiveLink = ({ path, text }: Props) => {

    const pathName = usePathname()

    return (

        <Link
            className={`${style.link} ${(pathName == path) && style['active-link']}`}
            href={path}>
            {text}
        </Link>
    )
}

export default ActiveLink

