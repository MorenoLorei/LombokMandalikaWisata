import React from 'react';
import ImageZoom from 'Components/ImageZoom';
import BackButton from "Components/BackButton";

const TravelPackage = ({ packageTitle, days, sections, included, notIncluded, imageSrc, altText }) => {
    const whatsappNumber = "6287866772313";
    const message = `Halo admin Mandalikawisatalombok, saya tertarik dengan paket honeymoon ${packageTitle}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-12 transform transition-all duration-300 hover:scale-[1.01]">
            <h2 className="text-3xl font-extrabold text-rose-600 mb-2">{packageTitle}</h2>
            <p className="text-lg text-gray-600 mb-6 font-medium">{days}</p>

            {sections.map((section, index) => (
                <div key={index} className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {section.activities.map((activity, activityIndex) => (
                            <li key={activityIndex}>{activity}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Harga Sudah Termasuk:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {included.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Harga Tidak Termasuk:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {notIncluded.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="rounded-lg p-6 mt-8 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Detail Harga</h3>
                <p className="text-gray-700 mb-4">
                    Harga paket ini disesuaikan dengan jumlah peserta dan tipe hotel. Silakan hubungi kami untuk mendapatkan penawaran terbaik!
                </p>
                <div className="text-center">
                    <ImageZoom src={imageSrc} alt={altText} />
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-rose-500 text-center text-white font-bold py-3 px-4 rounded-full transition-all duration-300 hover:bg-rose-600 hover:scale-105"
                >
                    Hubungi via WhatsApp
                </a>
            </div>
        </div>
    );
};

// Komponen utama App
export default function App() {
    // List umum untuk paket honeymoon 3 hari 2 malam
    const includedWithHotel = [
        'Hotel sesuai pilihan',
        'Private transport antar jemput ( driver + bensin )',
        'Tiket wisata',
        'Free makan 4x ( termasuk romantic dinner)',
        'Breakfast di hotel 2x',
        'Decorasi honeymmon',
        'Air mineral selama tour',
        'boat gili trawangan',
        'guide',
        'parkir',
        'dokumentasi hp',
    ];
    const notIncludedWithHotel = [
        'Tiket pesawat',
        'pengeluaran pribadi',
        'high season',
    ];

    // List untuk paket C (ada snorkeling)
    const includedWithSnorkeling = [
        ...includedWithHotel,
        'private glass bottom boat plus snorkeling',
        'alat snorkeling & dokumentasi gopro saat snorkeling'
    ];

    // List umum untuk paket tanpa hotel
    const includedWithoutHotel = [
        'Private transport antar jemput ( driver + bensin )',
        'Free makan 4x ( termasuk romantic dinner )',
        'air mineral selama tour',
        'tiket wisata',
        'guide',
        'parkir',
        'dokumentasi hp',
    ];
    const notIncludedWithoutHotel = [
        'Hotel',
        'tiket pesawat',
        'pengeluaran pribadi',
        'boat & snorkeling',
        'High season',
    ];

    const packages = [
        {
            title: 'Paket Honeymoon 3 Hari 2 Malam (Paket A)',
            days: 'TRIP AIR TERJUN & CITY TOUR',
            sections: [
                {
                    title: 'HARI 1. SASAK TOUR + MANDALIKA',
                    activities: [
                        'Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)',
                        'Desa Sade/ende : desa suku sasak lombok',
                        'makan siang',
                        'Pantai kuta mandalika',
                        'Berfoto di tugu sirkuit mandalika',
                        'Pantai Tanjung Aan',
                        'Bukit Merese/bukit seger ( pilih salah satu )',
                        'makan malam',
                        'Check In Hotel',
                    ],
                },
                {
                    title: 'HARI 2. TRIP AIR TERJUN DESA SENARU, SENDANG GILA & TIU KELEP atau GANTI GILI NANGGU,GILI KEDIS',
                    activities: [
                        'Jemput di hotel setelah sarapan',
                        'Desa senaru',
                        'Air Terjun Sendang gila',
                        'Air Terjun Tiu Kelep',
                        'Makan siang',
                        'Bukit malimbu/malaka',
                        'pusat oleh oleh',
                        'sunset & Romantic dinner',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 3. CITY TOUR – AIRPORT',
                    activities: [
                        'Jemput di hotel setelah sarapan langsung check out hotel',
                        'Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara',
                        'Islamic center NTB',
                        'Desa banyumulek: tempat kerajinan gerabah dari tanah liat',
                        'Antar ke Airport',
                    ],
                },
            ],
            included: includedWithHotel,
            notIncluded: notIncludedWithHotel,
            imageSrc: '/harga/HN3A.webp',
        },
        {
            title: 'Paket Honeymoon 3 Hari 2 Malam (Paket B)',
            days: 'TRIP GILI TRAWANGAN',
            sections: [
                {
                    title: 'HARI 1. SASAK TOUR + MANDALIKA',
                    activities: [
                        'Jempu di airport lombok',
                        'Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)',
                        'Desa Sade/ende : desa suku sasak lombok',
                        'makan siang',
                        'Pantai kuta mandalika',
                        'Berfoto di tugu sirkuit mandalika',
                        'Pantai Tanjung Aan',
                        'Bukit Merese',
                        'makan malam',
                        'Check In Hotel',
                    ],
                },
                {
                    title: 'HARI 2. TRIP GILI TRAWANGAN',
                    activities: [
                        'Jemput di hotel setelah sarapan',
                        'Menuju pelabuhan',
                        'Gili trawangan',
                        'Makan siang',
                        'Acara bebas',
                        'Kembali ke pelabuhan',
                        'Bukit malimbu/malaka',
                        'pusat oleh oleh',
                        'sunset & romantic dinner',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 3. CITY TOUR – AIRPORT',
                    activities: [
                        'Jemput di hotel setelah breakfast langsung check out hotel',
                        'Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara',
                        'Islamic center NTB',
                        'Desa banyumulek: tempat kerajinan gerabah dari tanah liat',
                        'Antar ke Airport',
                    ],
                },
            ],
            included: includedWithHotel,
            notIncluded: notIncludedWithHotel,
            imageSrc: '/harga/HN3B.webp',
        },
        {
            title: 'Paket Honeymoon 3 Hari 2 Malam (Paket C)',
            days: 'TRIP GILI TRAWANGANG & SNORKELING',
            sections: [
                {
                    title: 'HARI 1. SASAK TOUR + MANDALIKA',
                    activities: [
                        'Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)',
                        'Desa Sade/ende : desa suku sasak lombok',
                        'makan siang',
                        'Pantai kuta mandalika',
                        'Berfoto di tugu sirkuit mandalika',
                        'Pantai Tanjung Aan',
                        'Bukit Merese',
                        'makan malam',
                        'Check In Hotel',
                    ],
                },
                {
                    title: 'HARI 2. TRIP GILI TRAWANGANG & SNORKELING',
                    activities: [
                        'Jemput di hotel setelah sarapan',
                        'Menuju Pelabuhan',
                        'Menuju gili air, snorkeling spot ikan dan coral',
                        'Gili meno spot patung, ikan dan coral',
                        'Gili trawangan spot penyu',
                        'makan siang',
                        'Acara bebas di gilitrawangan',
                        'Kembali ke pelabuhan',
                        'Bukit malaka/malimubu',
                        'Villa hantu spot foto',
                        'sunset & Romantic dinner',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 3. CITY TOUR – AIRPORT',
                    activities: [
                        'Jemput di hotel setelah breakfast langsung check out hotel',
                        'Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara',
                        'Islamic center NTB',
                        'Desa banyumulek: tempat kerajinan gerabah dari tanah liat',
                        'Antar ke Airport',
                    ],
                },
            ],
            included: includedWithSnorkeling,
            notIncluded: notIncludedWithHotel,
            imageSrc: '/harga/HN3C.webp',
        },
        {
            title: 'Pilihan Kedua Paket Honeymoon Lombok 3 Hari 2 Malam Tanpa Hotel',
            days: 'GILI TRAWANGAN TOUR & SASAK TOUR',
            sections: [
                {
                    title: 'HARI 1. SASAK TOUR + MANDALIKA',
                    activities: [
                        'Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)',
                        'Desa Sade/ende : Tempat rumah adat tradisional lombok',
                        'makan siang area kuta mandalika',
                        'Pantai kuta mandalika',
                        'Berfoto di tugu sirkuit mandalika',
                        'Pantai Tanjung Aan',
                        'Bukit Merese',
                        'makan malam di Restoran khas lombok ayam taliwang',
                        'Check In Hotel',
                    ],
                },
                {
                    title: 'HARI 2. TRIP GILI TRAWANGAN',
                    activities: [
                        'Jemput di hotel setelah sarapan',
                        'Menuju Pelabuhan',
                        'Menuju gili trawangan',
                        'Gili trawangan acara bebas dan makan siang',
                        'Kembali ke pelabuhan',
                        'Bukit malimbu',
                        'romantic dinner & makan malam',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 3. CITY TOUR – AIRPORT',
                    activities: [
                        'Jemput di hotel setelah breakfast langsung check out hotel',
                        'Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara',
                        'Islamic center NTB',
                        'Desa banyumulek: tempat kerajinan gerabah dari tanah liat',
                        'Antar ke Airport',
                    ],
                },
            ],
            included: includedWithoutHotel,
            notIncluded: notIncludedWithoutHotel,
            imageSrc: '/harga/HN3H.webp',
        },
    ];

    return (
        <div className="font-sans bg-rose-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-rose-800 mb-4">
                    Paket Bulan Madu Romantis ✨💖
                </h1>
                <p className="text-center text-lg text-gray-600 mb-12">
                    Ciptakan kenangan indah bersama pasanganmu dengan paket bulan madu eksklusif di Lombok.
                </p>
                <div className="space-y-12">
                    {packages.map((pkg, index) => (
                        <div key={index}>
                            <TravelPackage
                                packageTitle={pkg.title}
                                days={pkg.days}
                                sections={pkg.sections}
                                included={pkg.included}
                                notIncluded={pkg.notIncluded}
                                imageSrc={pkg.imageSrc}
                                altText={pkg.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 justify-center flex">
                <BackButton />
            </div>
        </div>
    );
};
