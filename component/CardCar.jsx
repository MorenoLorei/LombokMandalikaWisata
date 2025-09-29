import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Catatan: Properti 'car' sekarang diasumsikan memiliki 'priceLapasKunci'
const CarRentCard = ({ car }) => {
    // Memisahkan teks harga Driver + BBM
    const [driverPriceDescription, driverPriceValue] = car.price.split('\n');

    const [NoLepasKunci] = car.TidakAdaLepasKunci
    ? car.TidakAdaLepasKunci.split('\n')
        : ['Lepas Kunci (24 jam)', 'Hubungi'];

    // Memisahkan teks harga Lepas Kunci
    const [lepasKunciValue] = car.priceLepasKunci
        ? car.priceLepasKunci.split('\n')
        : ['', ''];

    return (
        <Link
            href={car.link}
            className="group block bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500
                       hover:shadow-2xl hover:scale-[1.02] relative"
        >
            {/* Image Section */}
            <div className="relative w-full h-56 aspect-video overflow-hidden">
                <Image
                    src={car.imageUrl}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                />

                {/* Gradient Overlay for professional look */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
            </div>

            {/* Content Section (Simpel & Elegan) */}
            <div className="p-4 flex flex-col">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-1 leading-tight group-hover:text-[#00008B] transition-colors duration-300">
                    {car.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {car.description}
                </p>

                {/* Price Display - BARU: Dibuat minimalis dengan pemisah tipis */}
                <div className="flex justify-between gap-3 mb-1 pt-3 border-t border-gray-100">
                    {/* Kolom 1: Driver + BBM (Warna Netral) */}
                    <div className="text-left flex-1">
                        <p className="text-xs font-medium text-gray-500 opacity-90">{driverPriceDescription} (12 jam)</p>
                        <p className="font-bold text-lg text-gray-900">{driverPriceValue}</p>
                    </div>

                    {/* Kolom 2: Lepas Kunci 24 Jam (Warna Aksen) */}
                    <div className="text-right flex-1">
                        <p className="text-xs font-medium text-gray-500 opacity-90">{NoLepasKunci}</p>
                        <p className="font-bold text-lg text-gray-800">{lepasKunciValue}</p>
                    </div>
                </div>

                {/* Indikator CTA Minimalis */}
                <p className="text-center text-xs font-semibold text-gray-400 mt-2">
                    Klik untuk Info & Pemesanan
                </p>
            </div>
        </Link>
    );
};

export default CarRentCard;