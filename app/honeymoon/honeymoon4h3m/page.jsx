import React from 'react';
import BackButton from "Components/BackButton";

const ImageZoom = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg shadow-md object-cover"
        />
    );
};

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
                    Harga paket Honeymoon di atas adalah harga untuk dua (2) orang dan berdasarkan tipe hotel. Silakan hubungi kami untuk mendapatkan penawaran terbaik!
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

export default function App() {
    const includedWithHotel = [
        'Hotel sesuai pilihan',
        'Private transport antar jemput ( driver + bensin )',
        'Tiket wisata',
        'Free makan 6x ( termasuk romantic dinner)',
        'Breakfast di hotel 3x',
        'Decorasi honeymmon',
        'Air mineral selama tour',
        'private speed boat ke gili trawangan',
        'guide',
        'parkir',
        'dokumentasi',
    ];
    const notIncludedWithHotel = [
        'Tiket pesawat',
        'pengeluaran pribadi',
        'high season',
    ];

    const includedWithSnorkeling = [
        ...includedWithHotel,
        'private glass bottom boat plus snorkeling jika pilih paket C',
    ];

    const includedWithoutHotel = [
        'Private transport antar jemput ( driver + bensin )',
        'Free makan 4x ( termasuk romantic dinner )',
        'air mineral selama tour',
        'tiket wisata',
        'guide',
        'parkir',
        'dokumentasi',
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
            title: 'Paket Honeymoon Lombok 4 Hari 3 Malam (Paket A)',
            days: 'TRIP GILI TRAWANGAN & AIR TERJUN',
            sections: [
                {
                    title: 'HARI 1. SASAK TOUR + MANDALIKA',
                    activities: [
                        'Jemput di airport lombok',
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
                    title: 'HARI 2. TRIP GILI TRAWANGAN',
                    activities: [
                        'Jemput di hotel setelah sarapan',
                        'Menuju pelabuhan',
                        'Gili trawangan',
                        'Makan siang',
                        'Acara bebas',
                        'Kembali ke pelabuhan',
                        'Bukit malimbu',
                        'villa hantu spot foto',
                        'pusat oleh oleh',
                        'sunset & Romantic dinner',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 3. TRIP AIR TERJUN DESA SENARU, SENDANG GILA & TIU KELEP atau GANTI GILI NANGGU GILI KEDIS',
                    activities: [
                        'Jemput di hotel',
                        'Desa senaru',
                        'Makan siang',
                        'Air Terjun Sendang gila',
                        'Air Terjun Tiu Kelep',
                        'Makan malam',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 4. CITY TOUR – AIRPORT',
                    activities: [
                        'Jemput di hotel setelah breakfast langsung check out hotel',
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
            imageSrc: '/harga/HN4A.webp',
        },
        {
            title: 'Paket Honeymoon Lombok 4 Hari 3 Malam (Paket B)',
            days: 'TRIP GILI TRAWANGAN & GILI NANGGU',
            sections: [
                {
                    title: 'HARI 1. SASAK TOUR + MANDALIKA',
                    activities: [
                        'Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)',
                        'Desa Sade/ende : desa suku sasak lombok',
                        'makan siang area kuta mandalika',
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
                        'Jemput di hotel setelah Sarapan',
                        'Menuju pelabuhan',
                        'Gili trawangan',
                        'Makan siang',
                        'Acara bebas',
                        'Kembali ke pelabuhan',
                        'Bukit malimbu',
                        'villa hantu spot foto',
                        'pusat oleh oleh',
                        'sunset & roantic dinner',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 3. TRIP GILI NANGGU & GILIi KEDIS',
                    activities: [
                        'Jemput di hotel setelah breakfast',
                        'Menuju pelabuhan tawun sekotong',
                        'Gili nanggu',
                        'Gili kedis',
                        'Makan siang gili tangkong',
                        'Desa banyumulek kerajinan gerabah',
                        'Makan malam',
                        'Kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 4. CITY TOUR – AIRPORT',
                    activities: [
                        'Jemput di hotel setelah breakfast langsung check out hotel',
                        'Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara',
                        'Islamic center NTB',
                        'makan siang',
                        'Antar ke Airport',
                    ],
                },
            ],
            included: includedWithHotel,
            notIncluded: notIncludedWithHotel,
            imageSrc: '/harga/HN4B.webp',
        },
        {
            title: 'Paket Honeymoon Lombok 4 Hari 3 Malam (Paket C)',
            days: 'TRIP GILI TRAWANGAN + SNORKELING & PANTAI PINK',
            sections: [
                {
                    title: 'HARI 1. SASAK TOUR + MANDALIKA',
                    activities: [
                        'jempu di bandara lombok',
                        'Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)',
                        'Desa Sade/ende : desa suku sasak lombok',
                        'makan siang',
                        'Pantai kuta mandalika',
                        'Berfoto di tugu sirkuit mandalika',
                        'Pantai Tanjung Aan',
                        'Bukit Merese/bukit seger (pilih salah satu )',
                        'makan malam',
                        'Check In Hotel',
                    ],
                },
                {
                    title: 'HARI 2. TRIP GILI TRAWANGAN + SNORKELING',
                    activities: [
                        'Jemput di hotel setelah Sarapan',
                        'Menuju Pelabuhan',
                        'Menuju gili air, snorkeling spot ikan dan coral',
                        'Gili meno spot patung, ikan dan coral',
                        'Gili trawangan spot penyu',
                        'makan siang',
                        'Acara bebas di gilitrawangan',
                        'Kembali ke pelabuhan',
                        'Bukit malimbu',
                        'Villa hantu spot foto',
                        'pusat oleh oleh',
                        'sunset & romantic dinner',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 3. TRIP PANTAI PINK atau GANTI SEMBALUN, AIR TERJUN, GILI NANGGU',
                    activities: [
                        'Jemput di hotel setelah Sarapan',
                        'Menuju pelabuhan',
                        'Pulau pasir',
                        'Pantai pink',
                        'Makan siang',
                        'Bukit tangsi',
                        'Makan malam',
                        'souvenir mutiara',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 4. CITY TOUR – AIRPORT',
                    activities: [
                        'Jemput di hotel setelah breakfast langsung check out hotel',
                        'Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara',
                        'Islamic center NTB',
                        'makan siang',
                        'Desa banyumulek: tempat kerajinan gerabah dari tanah liat',
                        'Antar ke Airport',
                    ],
                },
            ],
            included: includedWithSnorkeling,
            notIncluded: notIncludedWithHotel,
            imageSrc: '/harga/HN4C.webp',
        },
        {
            title: 'Pilihan Kedua Paket Honeymoon Lombok 4 Hari 3 Malam Tanpa Hotel',
            days: 'TRIP GILI TRAWANGAN & GILI NANGGU/PANTAI PINK',
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
                        'Bukit Merese/seger pilih salah satu',
                        'makan malam',
                        'Check In Hotel',
                    ],
                },
                {
                    title: 'HARI 2. TRIP GILI TRAWANGAN',
                    activities: [
                        'Jemput di hotel setelah sarapan',
                        'Menuju Pelabuhan',
                        'Gili trawangan dan makan siang',
                        'Acara bebas di gilitrawangan',
                        'Kembali ke pelabuhan',
                        'Bukit malimbu',
                        'Villa hantu spot foto',
                        'roamnatic dinner',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 3. GILI NANGGU atau PANTAI PINK',
                    activities: [
                        'Jemput di hotel setelah breakfast',
                        'Menuju pelabuhan tanjung luar',
                        'Pulau pasir',
                        'Pantai pink 1',
                        'Makan siang',
                        'Bukit tangsi',
                        'Souvenir mutiara',
                        'Makan malam',
                        'kembali ke hotel',
                    ],
                },
                {
                    title: 'HARI 4. CITY TOUR – AIRPORT',
                    activities: [
                        'Jemput di hotel setelah breakfast langsung check out hotel',
                        'Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara',
                        'Islamic center NTB',
                        'makan siang',
                        'Desa banyumulek: tempat kerajinan gerabah dari tanah liat',
                        'Antar ke Airport',
                    ],
                },
            ],
            included: includedWithoutHotel,
            notIncluded: notIncludedWithoutHotel,
            imageSrc: '/harga/HN4H.webp',
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