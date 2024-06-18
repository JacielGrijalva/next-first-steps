//rfac
// -> por defecto es un server component al menos que especifiquemos que va a ser un client component

import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import ActiveLink from "../active-link/ActiveLink"

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricingPage', text: 'Pricing' },
    { path: '/contactPage', text: 'contact' },

]

//asi se hace un componetnte asincrono
//const Navbar = async() => {
//asi estaba antes
const Navbar = () => {

    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href={"/"} className="flex items-center">

                <HomeIcon className="mr-2" />
                <span>Home</span>
            </Link>


            <div className="flex flex-1"></div>

            {
                navItems.map((navItem) => (
                    //esta seria una forma mandandole las props que ocupa
                   // <ActiveLink key={navItem.path} path={navItem.path} text= {navItem.text} />
                    //esta seria mandandole el objeto completo porque ya sabemos que tiene todas las props
                    <ActiveLink key={navItem.path} {...navItem} />

                ))
            }

        </nav>


    )
}

export default Navbar
