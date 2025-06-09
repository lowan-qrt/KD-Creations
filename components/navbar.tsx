"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between">
            <Link href="/" className="font-bold text-2xl">KD - Creation</Link>

            <ul className="flex items-center space-x-8">
                <li>
                    <Link href="/" className="text-sm font-medium hover:text-primary">
                        Accueil
                    </Link>
                </li>

                <li>
                    <Link href="/creations" className="text-sm font-medium hover:text-primary">
                        Créations
                    </Link>
                </li>

                <li>
                    <Link href="/collections" className="text-sm font-medium hover:text-primary">
                        Collections
                    </Link>
                </li>

                <div className="relative group">
                    <li>
                        <Link href="/login" className="flex items-center space-x-1 text-sm font-medium hover:text-primary">
                            <span>Authentification</span>
                            <ChevronDown className="h-3 w-3" />
                        </Link>
                    </li>

                    <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-background border border-input invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100">
                        <div className="py-1">
                            <Link href="/login"
                                className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                                Connexion
                            </Link>

                            <Link href="/register" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                                Inscription
                            </Link>
                        </div>
                    </div>
                </div>

                <li>
                    <Link href="/contact" className="text-sm font-medium hover:text-primary">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
