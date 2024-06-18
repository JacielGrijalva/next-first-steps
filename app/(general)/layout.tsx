import Navbar from "@/components/navbar/Navbar";

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <Navbar />
            <h1>Hola Mundo</h1>
            {children}
        </>
    );
}

