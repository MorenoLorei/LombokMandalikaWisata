import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react"; // Import ikon dari Lucide

const TourCard = ({ tour }) => {
    // Menyesuaikan properti dengan struktur data dari JSON
    const tourImage = tour.imageUrl || "/placeholder.png";
    const tourTitle = tour.name;
    const tourDescription = tour.description;
    const tourPrice = tour.price;
    const tourLink = tour.link;
    // Menggunakan properti "furation" atau "duration"
    const tourDuration = tour.furation || tour.duration || "1 Hari";

    return (
        <Link
            href={tourLink}
            className="group block bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500
                       hover:shadow-2xl hover:scale-[1.03]
                       active:scale-[0.97] active:shadow-lg"
        >
            {/* Image Section */}
            <div className="relative w-full h-56 md:h-54 overflow-hidden">
                <Image
                    src={tourImage}
                    alt={tourTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {tourTitle}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {tourDescription}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-end">
                        <p className="text-lg font-bold text-gray-900 leading-none">
                            Rp {tourPrice}
                        </p>
                        <span className="text-sm font-normal text-gray-500 ml-1">
                            / pack
                        </span>
                    </div>

                    <div className="flex items-center">
                        <span className="text-sm text-gray-500 font-medium mr-1">
                            {tourDuration}
                        </span>
                        {/* Ikon Chevron Lucide */}
                        <ChevronRight
                            className="h-4 w-4 text-gray-400 group-hover:text-gray-500 transition-transform duration-500 group-hover:translate-x-1"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TourCard;