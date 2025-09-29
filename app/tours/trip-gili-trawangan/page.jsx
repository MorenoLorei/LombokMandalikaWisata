import React from 'react';
import BackButton from "Components/BackButton";

const GiliTrawanganTour = () => {
    // Data untuk paket tur ini
    const tourData = {
        title: 'Tour Gili Trawangan',
        description: 'Gili Trawangan merupakan destinasi wisata populer kelas dunia yang menawarkan sejumlah aktifitas seperti snorkling, diving, banana boat dan wahana air lainnya. Anda bisa berkeliling di pulau eksotis ini dengan menggunakan sepeda atau alat transportasi tradisional seperti Cidomo (Kereta Kuda). Fasilitas di Gili Trawangan terbilang lengkap di mana terdapat bar, rumah makan, hotel, villa hingga cafe-cafe yang berjejer di pinggir pantai akan membuat anda ingin berlama-lama di tempat wisata ini.',
        details: {
            start: 'Kota Mataram / Bandara Internasional Lombok',
            duration: '1 Hari',
        },
        itinerary: [
            'Meet & Greet Team Kami Di Hotel/Bandara Kota Kami',
            'Menuju Pelabuhan ke pelabuhan Teluk Nara/Teluk Kodek/Bangsal Menggunakan Perahu',
            'Menikmati Keindahan Alam Bawah Laut Gili Air (Snorkeling/Diveing)',
            'Menikmati Keindahan Alam Bawah Laut Gili Meno (Snorkeling/Diving)',
            'Makan Siang Di Restaurant Gili Trawangan',
            'Free Program Acara Bebas Di Gili Trawangan Mengikuti Activitas Lokal Di Gili Diantaranya (Naik Kuda Di Pantai, Bersepeda Naik Cidomo, Kelililing Gili Trawangan)',
            'Kembali Ke Pelabuhan GT Gili Trawangan untuk Kembali ke Pelabuhan Teluk Nara/Teluk Kodek/Bangsal',
            'Menikmati Keindahan Sunset di Pantai Senggigi, Malimbu, Vila Hantu Peserta Bebas Memilih Object Pantai di arahkan Tim Kami di Lapangan',
            'Kembali Ke Hotel/Bandara/Kota Mataram Program Selesai.',
        ],
        pricing: [
            { participants: '2 Orang', price: 'Rp 650.000 / pack' },
            { participants: '3-4 Orang', price: 'Rp 540.000 / pack' },
            { participants: '5-6 Orang', price: 'Rp 500.000 / pack' },
            { participants: '7-10 Orang', price: 'Rp 480.000 / pack' },
            { participants: '11-15 Orang', price: 'Rp 385.000 / pack' },
        ],
        included: [
            'Private transport AC',
            'Driver, BBM dan Parking Area',
            'Publik Boat utk peserta 2-3 Orang',
            'private trip 3 gili jika peserta 4 orang',
            '1 X Makan Siang',
            'Air Mineral',
            'Dokumentasi dibantu Driver',
            'Local Guide',
        ],
        notIncluded: [
            'Hotel,Tiket Pesawat,Pengeluaran Pribadi',
            'Makan Malam',
            'Lain lain yang tidak tercantum dalam paket.',
        ],
        notes: [
            'Paket diatas merupakan Private tour atau tidak di gabung dengan peserta lain',
            'Harga dihitung per pax / per orang',
            'Itinerary dan waktu bersifat Fleksible dapat disesuaikan dengan kebutuhan',
            'Untuk makan malam, tidak termasuk dalam paket namun guide kami akan merekomendasikan tempat makan yang sesuai dengan keinginan anda',
            'Apabila terdapat permintaan khusus, harap menghubungi kami sebelumnya seperti surprice, perubahan destinasi dll.',
        ]
    };

    const whatsappNumber = "6287866772313";
    const message = `Halo admin Mandalikawisatalombok, saya tertarik dengan paket ${tourData.title}.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Ikon SVG untuk daftar
    const checkIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
    );
    const xIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
    );

    return (
        <div className="font-sans bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10 bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl font-extrabold text-blue-900 mb-2">{tourData.title}</h1>
                    <p className="text-lg text-gray-600 font-medium mb-4">
                        {tourData.details.duration} | Mulai dari: {tourData.details.start}
                    </p>
                    <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        {tourData.description}
                    </p>
                </div>

                {/* Itinerary Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-teal-700 mb-4">Rencana Perjalanan</h2>
                    <ul className="space-y-4 text-gray-800">
                        {tourData.itinerary.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <div className="text-teal-600 font-semibold mr-3">{index + 1}.</div>
                                <div>{item}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing and Details Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-teal-700 mb-4">Biaya Trip</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left bg-gray-50 rounded-lg overflow-hidden">
                                <thead className="bg-gray-200">
                                <tr>
                                    <th className="py-3 px-4 font-semibold text-gray-700">Jumlah Peserta</th>
                                    <th className="py-3 px-4 font-semibold text-gray-700">Harga /pack</th>
                                </tr>
                                </thead>
                                <tbody>
                                {tourData.pricing.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                        <td className="py-3 px-4 text-gray-800">{item.participants}</td>
                                        <td className="py-3 px-4 text-gray-800 font-bold">{item.price}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-teal-700 mb-4">Detail Paket</h2>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Harga Sudah Termasuk:</h3>
                            <ul className="space-y-2 text-gray-700">
                                {tourData.included.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        {checkIcon}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Harga Tidak Termasuk:</h3>
                            <ul className="space-y-2 text-gray-700">
                                {tourData.notIncluded.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        {xIcon}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Notes Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-teal-700 mb-4">Ketentuan</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {tourData.notes.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* WhatsApp Button */}
                <div className="text-center">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Hubungi via WhatsApp
                    </a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 justify-center flex">
                <BackButton />
            </div>
        </div>
    );
};

export default GiliTrawanganTour;