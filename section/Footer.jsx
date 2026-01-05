import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-gray-600 text-gray-300 pt-12 pb-8 mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-3">
                            <Image src="/logo.png" alt="Lombok Mandalika Wisata" width={44} height={44} className="rounded-md" />
                            <span className="text-white text-lg font-semibold">Lombok Mandalika Wisata</span>
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            Jelajahi keindahan Lombok dan Mandalika bersama kami. Paket wisata terbaik untuk liburan Anda.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">Tentang Kami</Link>
                            </li>
                            <li>
                                <a href="https://wa.me/6287866772313?text=Halo%20admin%20Mandalikawisatalombok,%20saya%20ingin%20bertanya" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Kontak (WhatsApp)</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Kontak</h3>
                        <ul className="space-y-2 text-sm">
                            <li>WhatsApp: <a href="https://wa.me/6287866772313" className="hover:text-white">+62 878-6677-2313</a></li>
                            <li>Email: <a href="mailto:info@lombokmandalikawisata.com" className="hover:text-white">info@lombokmandalikawisata.com</a></li>
                            <li>Lokasi: Lombok, Nusa Tenggara Barat</li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Ikuti Kami</h3>
                        <div className="flex space-x-4 text-sm">
                            <a href="https://wa.me/6287866772313" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
                            <a href="#" className="hover:text-white">Instagram</a>
                            <a href="#" className="hover:text-white">Facebook</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
                    <p>
                        © {year} Lombok Mandalika Wisata. All rights reserved.
                    </p>
                    <p className="mt-2 sm:mt-0">Dibuat dengan cinta untuk perjalanan Anda.</p>
                </div>
            </div>
        </footer>
    );
}
