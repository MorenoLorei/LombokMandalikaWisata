import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: 'Surya',
            location: 'Traveler Lokal | Jakarta',
            review: 'Service LombokMandalikaWisata juara! Kemarin ambil paket tur 3 hari, semua diurusin rapi, drivernya asik, spot fotonya keren-keren. Liburan jadi santai banget, gak ada drama. Mantap poll!',
            rating: 5,
        },
    ];

    const renderStars = (rating) => {
        return Array(rating).fill(0).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        ));
    };

    const getInitials = (name) => {
        const parts = name.split(/[\s&]+/);
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return name[0].toUpperCase();
    };

    return (
        <section className="py-20 px-4 sm:px-12 bg-gray-50 text-gray-900">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                        Apa Kata Mereka?
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
                        Ulasan Jujur Pelanggan
                    </h2>
                </div>

                <div className="max-w-xl mx-auto">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 flex flex-col h-full relative"
                        >


                            <Quote className="w-6 h-6 text-gray-300 mb-4" />

                            <p className="text-xl text-gray-800 leading-relaxed mb-6 font-medium flex-grow">
                                {review.review}
                            </p>

                            {/* Separator Tipis */}
                            <div className="h-px w-full bg-gray-200 my-4"></div>


                            <div className="flex items-center justify-between mt-auto">


                                <div className="flex items-center">

                                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-sm font-bold text-teal-800 flex-shrink-0">
                                        {getInitials(review.name)}
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base font-bold text-gray-900 leading-tight">{review.name}</p>
                                        <p className="text-xs text-gray-500">{review.location}</p>
                                    </div>
                                </div>

                                <div className="flex mt-3">
                                    {renderStars(review.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
