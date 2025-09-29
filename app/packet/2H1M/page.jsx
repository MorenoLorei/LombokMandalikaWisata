import React from 'react';
import BackButton from 'Components/BackButton';
import ImageZoom from 'Components/ImageZoom';



const TravelPackage = ({ packageTitle, days, sections, included, notIncluded, imageSrc, altText }) => {
    const whatsappNumber = "6287866772313";
    const message = `Halo admin Mandalikawisatalombok, saya tertarik dengan ${packageTitle}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{packageTitle}</h2>
            <p className="text-lg text-gray-600 mb-6">{days}</p>

            {sections.map((section, index) => (
                <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold text-teal-600 mb-2">{section.title}</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {section.activities.map((activity, activityIndex) => (
                            <li key={activityIndex}>{activity}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Harga Sudah Termasuk:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {included.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Harga Tidak Termasuk:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {notIncluded.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Detail Harga</h3>
                <p className="text-gray-700 mb-4">
                    Harga paket ini disesuaikan dengan jumlah peserta dan hotel pilihan Anda. Silakan hubungi kami untuk mendapatkan penawaran terbaik!
                </p>
                <div className="text-center">
                    <ImageZoom src={imageSrc} alt={altText} />
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#4d918f] text-center text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] mt-auto"
                >
                    Hubungi via WhatsApp
                </a>
            </div>
        </div>
    );
};

const PricingNote = () => (
    <div className="bg-gray-100 rounded-lg shadow-inner p-6 mb-8 text-center">
        <p className="text-lg font-semibold text-gray-700 mb-2">Catatan Harga:</p>
        <p className="text-gray-600">
            Harga untuk semua paket tour di atas adalah harga /orang dengan minimum peserta adalah 2 orang. <br />
            Bayi umur kurang dari 3 tahun **free**, 3-5 tahun **50%**, 6-7 tahun **75%**, 8 tahun **100%**.
        </p>
    </div>
);

const App = () => {
    const includedWithHotel = [
        'Hotel',
        'Private transport antar jemput (driver, bbm)',
        'Tiket masuk wisata',
        'Free makan 3x',
        'Sarapan di hotel 1x',
        'Air mineral selama tour',
        'Boat ke Gili Trawangan',
        'Guide lokal',
        'Parkir',
    ];
    const notIncludedWithHotel = [
        'Tiket pesawat',
        'Pengeluaran pribadi',
        'High season',
        'Boat & snorkeling',
    ];

    const includedWithoutHotel = [
        'Private transport antar jemput (driver + bensin)',
        'Free makan 2x',
        'Air mineral selama tour',
        'Tiket wisata',
        'Guide',
        'Parkir',
    ];
    const notIncludedWithoutHotel = [
        'Hotel',
        'Tiket pesawat',
        'Pengeluaran pribadi',
        'Boat & snorkeling',
        'High season',
    ];

    const packages = [
        {
            title: 'Paket Tour Lombok 2 Hari 1 Malam (Paket A)',
            days: 'TRIP AIR TERJUN & CITY TOUR',
            sections: [
                {
                    title: 'HARI 1. TRIP AIR TERJUN',
                    activities: [
                        'Jemput di Airport Lombok',
                        'Air terjun Benang Kelambu',
                        'Air terjun Benang Stokel',
                        'Makan siang',
                        'Pusat oleh-oleh',
                        'Makan malam',
                        'Check in hotel',
                    ],
                },
                {
                    title: 'HARI 2. CITY TOUR – AIRPORT',
                    activities: [
                        'Jemput di hotel setelah breakfast langsung check out hotel',
                        'Pusat oleh-oleh khas Lombok, kaos Lombok, makanan dan souvenir mutiara',
                        'Islamic Center NTB',
                        'Makan siang',
                        'Desa Banyumulek: tempat kerajinan gerabah dari tanah liat',
                        'Antar ke Airport',
                    ],
                },
            ],
            included: includedWithHotel,
            notIncluded: notIncludedWithHotel,
            priceImage: '/harga/2D1NA.webp',
        },
        {
            title: 'Paket Tour Lombok 2 Hari 1 Malam (Paket B)',
            days: 'TRIP GILI NANGGU & GILI KEDIS',
            sections: [
                {
                    title: 'HARI 1. TRIP GILI NANGGU & GILI KEDIS',
                    activities: [
                        'Jemput di Airport Lombok',
                        'Menuju pelabuhan Tawun Sekotong',
                        'Gili Nanggu',
                        'Gili Kedis',
                        'Makan siang',
                        'Desa Banyumulek tempat kerajinan gerabah',
                        'Pusat oleh-oleh Lombok',
                        'Makan malam',
                        'Cek in hotel',
                    ],
                },
                {
                    title: 'HARI 2. CITY TOUR – AIRPORT',
                    activities: [
                        'Jemput di hotel setelah breakfast langsung check out hotel',
                        'Pusat oleh-oleh khas Lombok, kaos Lombok, makanan dan souvenir mutiara',
                        'Islamic Center NTB',
                        'Makan siang jika jadwal pesawat di atas jam 12',
                        'Antar ke Airport',
                    ],
                },
            ],
            included: includedWithHotel,
            notIncluded: notIncludedWithHotel,
            priceImage: '/harga/2D1NB.webp',
        },
        {
            title: 'Paket Tour Lombok 2 Hari 1 Malam (Paket C)',
            days: 'SASAK TOUR + MANDALIKA & GILI TRAWANGAN',
            sections: [
                {
                    title: 'HARI 1. SASAK TOUR + MANDALIKA',
                    activities: [
                        'Desa Sukarara: Tempat Kerajinan Kain Tenun songket dan berfoto baju adat Lombok (free)',
                        'Desa Sade/Ende: Tempat rumah adat tradisional Lombok',
                        'Makan siang area Kuta Mandalika',
                        'Pantai Kuta Mandalika',
                        'Berfoto di tugu sirkuit Mandalika',
                        'Pantai Tanjung Aan',
                        'Bukit Merese',
                        'Antar ke Airport',
                    ],
                },
                {
                    title: 'HARI 2. GILI TRAWANGAN TOUR',
                    activities: [
                        'Jemput di hotel setelah breakfast',
                        'Pelabuhan ke Gili Trawangan',
                        'Acara bebas di Gili Trawangan',
                        'Makan siang',
                        'Kembali ke pelabuhan',
                        'Bukit Malaka/Malimbu',
                        'Pusat oleh-oleh Lombok',
                        'Makan malam',
                        'Kembali ke hotel',
                    ],
                },
            ],
            included: includedWithHotel,
            notIncluded: notIncludedWithHotel,
            priceImage: '/harga/2D1NC.webp',
        },
        {
            title: 'Paket Tour 2 Hari 1 Malam Tanpa Hotel',
            days: 'GILI TRAWANGAN TOUR & SASAK TOUR',
            sections: [
                {
                    title: 'HARI 1. GILI TRAWANGAN TOUR',
                    activities: [
                        'Jemput di Airport Lombok',
                        'Pelabuhan ke Gili Trawangan',
                        'Acara bebas di Gili Trawangan',
                        'Makan siang di restoran Gili Trawangan',
                        'Kembali ke pelabuhan',
                        'Bukit Malaka',
                        'Bukit Malimbu',
                        'Pusat oleh-oleh Lombok',
                        'Makan malam ayam taliwang khas Lombok',
                        'Kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 2. SASAK TOUR + MANDALIKA',
                    activities: [
                        'Desa Sukarara: Tempat Kerajinan Kain Tenun songket dan berfoto baju adat Lombok (free)',
                        'Desa Sade/Ende: desa suku Sasak Lombok',
                        'Makan siang area Kuta Mandalika',
                        'Pantai Kuta Mandalika',
                        'Berfoto di tugu sirkuit Mandalika',
                        'Pantai Tanjung Aan',
                        'Bukit Merese',
                        'Antar Airport',
                    ],
                },
            ],
            included: includedWithoutHotel,
            notIncluded: notIncludedWithoutHotel,
            priceImage: '/harga/2D1NH.webp',
        },
    ];

    return (
        <div className="font-sans bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
                    Paket Tour 2 hari 1 malam di Lombok✨
                </h1>
                <p className="text-center text-lg text-gray-600 mb-12">
                    Pilih paket liburan impianmu di Lombok. Destinasi eksotis siap menantimu!
                </p>
                <PricingNote />
                <div className="space-y-12">
                    {packages.map((pkg, index) => (
                        <div key={index}>
                            <TravelPackage
                                packageTitle={pkg.title}
                                days={pkg.days}
                                sections={pkg.sections}
                                included={pkg.included}
                                notIncluded={pkg.notIncluded}
                                imageSrc={pkg.priceImage}
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

export default App;
