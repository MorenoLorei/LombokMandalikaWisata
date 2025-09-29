import React from 'react';
import BackButton from "Components/BackButton";

const GiliNangguTour = () => {
    // Data untuk paket tur ini
    const tourData = {
        title: 'Snorkeling Trip Gili Nanggu',
        description: 'Paket Trip Gili Nanggu adalah paket wisata yang menyediakan fasilitas snorkling untuk anda yang ingin mengeksplore keindahan alam bawah laut bagian ujung barat pulau lombok, Untuk menuju ke tempat ini anda membutuhkan waktu tempuh sekitar 1 jam 20 menit dari kota mataram atau 1 jam 30 menit mulai dari Bandara International Lombok. Namun untuk berkunjung ke tempat ini, anda tidak perlu repot repot mempersiapkan transport dan kebutuhan trip lainnya, karena di dalam paket Trip ini, kami telah merangkum semua keperluan trip mulai dari transport, makan hingga boat transfer dan alat snorkling ( Aktifitas Populer di tempat ini ). Selain itu juga kami akan mengajak anda mengunjungi 2 Gili di sebelahnya yaitu Gili Sudak dan Gili Kedis yang memiliki pesona alam dan pantai yang indah berpasir putih dan tentunya dalam aktifitas dan nuansa yang berbeda.',
        details: {
            start: 'Kota Mataram / Bandara Lombok',
            duration: '1 Hari',
        },
        itinerary: [
            'Crew kami akan menjemput anda di Airport atau lokasi yang sudah disepakati',
            'Tiba di dermaga tawun sekotong lombok barat untuk penyebrangan ke gili nanggu sekitar 10 -20 menit dengan menggunakan Private Boat',
            'Tiba di Gili Nanggu, kita melakukan persiapan untuk bermain Snorkling dan menikmati keindahan alam bawah laut, berenang bersama ribuan spesies ikan hias dan pemandangan coral yang sangat menakjubkan',
            'Free and easy dan makan siang di Gili Sudak sambil bersantai menikmati keindahan alam pulau kecil ini',
            'Menuju ke Gili Kedis dan anda bisa melanjutkan bermain Snorkling di Gili kedis dengan spot berbeda atau anda bisa bersantai sejenak sambil memotret atau selfie di pulau yang exotic ini',
            'Setelah puas berlama lama di gili kedis kita akan Kembali ke Lombok dan menuju mataram',
            'Mengunjungi Pusat Olleh oleh Khas Lombok ( Optional )',
            'Makan Malam dan kami akan mengantar anda kembali ke hotel atau lokasi yang telah disepakati',
        ],
        pricing: [
            { participants: '2 Orang', price: 'Rp 600.000 / pack' },
            { participants: '3-4 Orang', price: 'Rp 465.000 / pack' },
            { participants: '5-6 Orang', price: 'Rp 355.000 / pack' },
            { participants: '7-10 Orang', price: 'Rp 325.000 / pack' },
            { participants: '11-15 Orang', price: 'Rp 258.000 / pack' },
        ],
        included: [
            'Private transport',
            'Driver, BBM dan Parking Area',
            'Privateboat',
            'Snorkling + Alat Snorkling',
            '1 X Makan Siang',
            'Dokumentasi dibantu Driver',
            'Local Guide',
            'Tiket masuk Wisata',
            'Masker and Hand Sanitizer',
        ],
        notIncluded: [
            'Hotel,Tiket Pesawat,Pengeluaran Pribadi',
            'Makan Malam',
            'gopro',
            'Lain lain yang tidak tercantum dalam paket.',
        ],
        notes: [
            'Paket diatas merupakan Private tour atau tidak di gabung dengan peserta lain',
            'Harga dapat berubah sewaktu waktu sebelum adanya pembayaran DP',
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

export default GiliNangguTour;