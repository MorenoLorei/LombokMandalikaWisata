import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {

    return (
        <div className=" flex py-8 px-6 sm:px-12">
            <a
                href="/"
                className="flex items-center space-x-1.5 text-base font-medium text-gray-700
                           transition-colors duration-200
                           hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 rounded-md"
                aria-label="Kembali ke Beranda"
            >
                <ArrowLeft className="w-4 h-4 flex-shrink-0" />

                <span>Kembali ke Beranda</span>
            </a>
        </div>
    );
};

export default BackButton;
