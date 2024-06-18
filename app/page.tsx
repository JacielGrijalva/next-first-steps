import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <span className="text-5xl">Holii, Que onda danilo unas ultra o que?? </span>

            <Link href={'/about'}>About Page</Link>
        </main>
    );
}
