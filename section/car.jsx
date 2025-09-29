"use client"
import React from "react";
import useFetchTours from "Components/UseFetchHandler";
import CarRentCard from "Components/CardCar";

const CarRent = () => {
    const { data: cars, isLoading, error } = useFetchTours("/json/cardata.json");

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
        <section className="py-16 bg-gray-50" id="car-rent">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        SEWA MOBIL LOMBOK
                    </h2>
                    <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        Pilihan kendaraan terlengkap dengan harga terbaik untuk perjalanan Anda.
                    </p>
                </div>

                {/* Container yang dapat digeser secara horizontal */}
                <div className="flex overflow-x-auto gap-8 pb-4 -mx-4 px-4 scrollbar-hidden">
                    {cars.map((car) => (
                        <div key={car.id} className="flex-shrink-0 w-80 md:w-96">
                            <CarRentCard car={car} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarRent;
