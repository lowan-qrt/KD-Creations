import Link from "next/link";
import Navbar from "./navbar";

export default function Header() {
    return (
        <header className="px-[4rem] py-[1.5rem]">
            <Navbar />
            {/* <nav className="flex justify-between text-gray-950">
                <Link href="/">KD - Creation</Link>
                <ul className="w-[50%] flex justify-end items-center gap-6">
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="creations">Créations</Link>
                    </li>
                    <li>
                        <Link href="/collections">Collections</Link>
                    </li>
                    <li>
                        <Link href="/login">Connexion</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav> */}
        </header>
    );
}
