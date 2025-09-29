"use client"
import React from "react";
import useFetchTours from "Components/UseFetchHandler";
import TourCard from "Components/TourCard";

const Honeymoon = () => {
    const { data: products, isLoading, error } = useFetchTours("/json/honey.json");

    if (isLoading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="bg-red-100 border border-red-400 text-red-700 px-8 py-6 rounded-lg max-w-md text-center">
                    <h3 className="text-xl font-bold mb-2">Error</h3>
                    <p>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Coba Lagi
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="py-16 bg-gray-50" id="tour">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-pink-400 mb-4 tracking-tight">
                        PAKET HONEYMOON
                    </h2>
                    <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-pink-500 max-w-3xl mx-auto">
                        habiskan harimu dengan yang tercinta dengan paket honeymoon ekslusif kami
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((tour) => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Honeymoon;