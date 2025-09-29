"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-colors duration-300  ${
                scrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo (Image) */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"   // put your logo file in /public/logo.png
                        alt="My Logo"
                        width={50}       // adjust size as needed
                        height={50}
                        className={`transition-opacity ${
                            scrolled ? "opacity-100" : "opacity-90"
                        }`}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div
                    className={`hidden md:flex space-x-6 font-medium transition-colors ${
                        scrolled ? "text-gray-800" : "text-white"
                    }`}
                >
                    <Link href="/" className="hover:text-blue-600 transition">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-blue-600 transition">
                        About
                    </Link>
                    <Link href="/services" className="hover:text-blue-600 transition">
                        Services
                    </Link>
                    <Link href="/contact" className="hover:text-blue-600 transition">
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className={`md:hidden focus:outline-none transition-colors ${
                        scrolled ? "text-gray-800" : "text-white"
                    }`}
                >
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className={`md:hidden flex flex-col space-y-2 px-6 py-4 font-medium transition-colors ${
                        scrolled ? "bg-white text-gray-800" : "bg-transparent text-white"
                    }`}
                >
                    <Link href="/" className="hover:text-blue-600 transition" onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-blue-600 transition" onClick={toggleMenu}>
                        About
                    </Link>
                    <Link href="/services" className="hover:text-blue-600 transition" onClick={toggleMenu}>
                        Services
                    </Link>
                    <Link href="/contact" className="hover:text-blue-600 transition" onClick={toggleMenu}>
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
