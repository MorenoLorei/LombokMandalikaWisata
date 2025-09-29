import React from 'react';
import ImageZoom from 'Components/ImageZoom';
import BackButton from "Components/BackButton";

// Komponen utama TravelPackage yang mencakup semua informasi paket
const TravelPackage = ({ packageTitle, days, sections, included, notIncluded, imageSrc, altText }) => {
    // Nomor WhatsApp placeholder, silakan ganti dengan nomor Anda
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

// Komponen baru untuk catatan harga umum
const PricingNote = () => (
    <div className="bg-gray-100 rounded-lg shadow-inner p-6 mb-8 text-center">
        <p className="text-lg font-semibold text-gray-700 mb-2">Catatan Harga:</p>
        <p className="text-gray-600">
            Harga untuk semua paket tour di atas adalah harga /orang dengan minimum peserta adalah 2 orang. <br />
            Bayi umur kurang dari 3 tahun **free**, 5 tahun **50%**, 6-7 tahun **75%**, 8 tahun **100%**.
        </p>
    </div>
);

// Komponen utama App
const App = () => {
    // List yang sama untuk paket A, B, dan C (sesuai teks Anda)
    const includedWithHotel = [
        'Hotel',
        'Private transport antar jemput ( driver + bensin )',
        'Tiket wisata',
        'Free makan 5x di resto rekomend',
        'Sarapan di hotel 2x',
        'Air mineral selama tour',
        'private glass bottom boat plus snorkeling jika pilih paket C',
        'Alat snorkeling & dokumentasi snorkeling untuk paket C',
        'menggunakan publik boat ke gili trawangan jika peserta tour hanya 2 orang',
        'private speed boat ke gili trawangan jika peserta tour lebih dari 2 orang',
        'guide local',
        'parkir',
        'dokumentasi hp',
    ];
    const notIncludedWithHotel = [
        'Tiket pesawat',
        'pengeluaran pribadi',
        'hight season',
    ];

    // List untuk paket tanpa hotel
    const includedWithoutHotel = [
        'Private transport antar jemput ( driver + bensin )',
        'Free makan 4x di resto rekomend',
        'air mineral selama tour',
        'tiket wisata',
        'guide local',
        'parkir',
        'dokumentasi hp',
    ];
    const notIncludedWithoutHotel = [
        'Hotel',
        'tiket pesawat',
        'pengeluaran pribadi',
        'boat & snorkeling',
        'Hight season',
    ];

    const packages = [
        {
            title: 'Paket Tour Lombok 3 Hari 2 Malam (Paket A)',
            days: 'SASAK TOUR + MANDALIKA & TRIP AIR TERJUN',
            sections: [
                {
                    title: 'HARI 1. SASAK TOUR + MANDALIKA',
                    activities: [
                        'Jemput di airport lombok sesuai jadwal',
                        'Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)',
                        'Desa Sade/ende : Desa adat suku  sasak',
                        'makan siang',
                        'Pantai kuta mandalika',
                        'Berfoto di tugu sirkuit mandalika',
                        'Pantai Tanjung Aan',
                        'Bukit Merese/Bukit seger ( pilih salah satu )',
                        'makan malam',
                        'Check In Hotel',
                    ],
                },
                {
                    title: 'HARI 2. TRIP AIR TERJUN DESA SENARU, SENDANG GILA & TIU KELEP',
                    activities: [
                        'Jemput di hotel setelah sarapan',
                        'Menuju Desa senaru',
                        'Air Terjun Sendang gila',
                        'Air Terjun Tiu Kelep',
                        'Makan siang',
                        'Bukit malimbu view laut dan gili',
                        'pusat oleh oleh lombok',
                        'Sunset area senggigi & Makan malam',
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
            priceImage: '/harga/3D1NA.webp',
        },
        {
            title: 'Paket Tour Lombok 3 Hari 2 Malam (Paket B)',
            days: 'SASAK TOUR + MANDALIKA & TRIP GILI TRAWANGAN',
            sections: [
                {
                    title: 'HARI 1. SASAK TOUR + MANDALIKA',
                    activities: [
                        'Jemput di airport sesuai jadwal',
                        'Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)',
                        'Desa Sade/ende : Desa adat suku  sasak',
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
                    title: 'HARI 2. TRIP GILI TRAWANGAN',
                    activities: [
                        'Jemput di hotel setelah sarapan',
                        'Menuju pelabuhan ke gili trawangan',
                        'Gili trawangan',
                        'Acara bebas di gili trawangan',
                        'Makan siang',
                        'Kembali ke lombok',
                        'Bukit malaka/bukit malimbu',
                        'pusat oleh oleh',
                        'sunset area senggigi & makan malam',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 3. CITY TOUR – AIRPORT',
                    activities: [
                        'Jemput di hotel setelah sarapan langsung check out hotel',
                        'Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara',
                        'Islamic center NTB',
                        'makan siang',
                        'Desa banyumulek: tempat kerajinan gerabah dari tanah liat',
                        'Antar ke Airport',
                    ],
                },
            ],
            included: includedWithHotel,
            notIncluded: notIncludedWithHotel,
            priceImage: '/harga/3D1NB.webp',
        },
        {
            title: 'Paket Tour Lombok 3 Hari 2 Malam (Paket C favorite)',
            days: 'SASAK TOUR + MANDALIKA & TRIP GILI TRAWANGAN + SNORKELING',
            sections: [
                {
                    title: 'HARI 1. SASAK TOUR + MANDALIKA',
                    activities: [
                        'Jemput di airport sesuai jadwal',
                        'Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)',
                        'Desa Sade/ende : Desa adat suku  sasak',
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
                    title: 'HARI 2. TRIP  GILI TRAWANGAN + SNORKELING',
                    activities: [
                        'Jemput di hotel setelah sarapan',
                        'Menuju Pelabuhan',
                        'Menuju gili air, snorkeling spot ikan dan coral',
                        'Gili meno spot snorkeling patung bawah laut, ikan dan coral',
                        'Gili trawangan snorkeling spot penyu',
                        'makan siang di gili trawangan',
                        'Acara bebas di gilitrawangan sampai sore',
                        'Kembali ke lombok',
                        'Bukit malaka/malimbu',
                        'Pusat oleh oleh lombok',
                        'Sunset area senggigi dan makan malam',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 3. CITY TOUR – AIRPORT',
                    activities: [
                        'Jemput di hotel setelah sarapan langsung check out hotel',
                        'Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara',
                        'Islamic center NTB',
                        'makan siang',
                        'Desa banyumulek: tempat kerajinan gerabah dari tanah liat',
                        'Antar ke Airport',
                    ],
                },
            ],
            included: includedWithHotel,
            notIncluded: notIncludedWithHotel,
            priceImage: '/harga/3D1NC.webp',
        },
        {
            title: 'Pilihan Kedua Paket Tour 3 Hari 2 Malam Tanpa Hotel',
            days: 'SASAK TOUR + MANDALIKA & TRIP GILI TRAWANGAN',
            sections: [
                {
                    title: 'HARI 1. SASAK TOUR + MANDALIKA',
                    activities: [
                        'jemput di airport lombok sesuai jadwal',
                        'Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)',
                        'Desa Sade/ende : Tempat rumah adat tradisional lombok',
                        'makan siang',
                        'Pantai kuta mandalika',
                        'Berfoto di tugu sirkuit mandalika',
                        'Pantai Tanjung Aan',
                        'Bukit Merese/seger pilih salah satu',
                        'makan malam',
                        'Check In Hotel',
                    ],
                },
                {
                    title: 'HARI 2. TRIP GILI TRAWANGAN',
                    activities: [
                        'Jemput di hotel setelah sarapan',
                        'Menuju pelabuhan ke gili trawangan',
                        'Acara bebas di trawangan',
                        'Makan siang',
                        'Kembali ke lombok',
                        'Bukit malaka/malimbu',
                        'pusat oleh oleh',
                        'sunset dan makan malam',
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
            included: includedWithoutHotel,
            notIncluded: notIncludedWithoutHotel,
            priceImage: '/harga/3D1NH.webp',
        },
    ];

    return (
        <div className="font-sans bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
                    Paket Tour 3 hari 2 malam di Lombok✨
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