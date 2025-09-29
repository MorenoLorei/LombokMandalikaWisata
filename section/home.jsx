import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <section
            className="relative h-screen flex items-center justify-center text-white px-4 md:px-12"
            style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("bg.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-green-900/30"></div>

            <div className="relative  text-center max-w-5xl mx-auto py-12">
                {/* Main Heading & Subtitle */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-3 tracking-tight">
                    LOMBOK MANDALIKA WISATA
                </h1>
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-blue-100 mb-6">
                    Agen Wisata Terpercaya di Lombok
                </p>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed text-white/90">
                    Nikmati keindahan pantai eksotis, budaya Sasak yang autentik, dan petualangan tak terlupakan di Pulau Lombok bersama kami.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                    <Link
                        href="#tour"
                        className="w-full sm:w-auto bg-white hover:bg-white-40 text-black font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Lihat Paket Tour
                    </Link>

                    <Link
                        href="#car-rent"
                        className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        Sewa Mobil
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;