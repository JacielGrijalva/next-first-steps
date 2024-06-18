import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <span className="text-5xl">Holii, listo para llorar sin poder hacer nada </span>

            <Link href={'/about'}>About Page</Link>
        </main>
    );
}
