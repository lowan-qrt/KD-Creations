import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "KD - Creations",
    description: "Créations de Karine D.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="min-h-screen">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
				<Header />
                {children}
				<Footer />
            </body>
        </html>
    );
}

