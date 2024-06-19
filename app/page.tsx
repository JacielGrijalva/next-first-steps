import Link from "next/link";
import Imagen from "@/components/imagen/Imagen"

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <span className="text-5xl">Holii, listo para llorar sin poder hacer nada </span>

            <Link className="bg-white text-black m-3 p-3 rounded-2xl " href={'/about'}>Picale aqui we para navegar</Link>

            <Imagen />

        </main>
    );
}
