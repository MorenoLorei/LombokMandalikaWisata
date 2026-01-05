"use client"
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
    {
        question: "1. Apakah harga paket sudah termasuk tiket pesawat?",
        answer: "Harga paket tur kami **belum termasuk tiket pesawat**. Harga yang tercantum hanya mencakup akomodasi, transportasi lokal, tiket masuk wisata, makan, dan layanan guide sesuai detail paket. Kami sarankan Anda memesan tiket pesawat secara terpisah untuk fleksibilitas jadwal."
    },
    {
        question: "2. Bagaimana cara melakukan pemesanan (booking)?",
        answer: "Proses booking sangat mudah! Cukup klik tombol **'Hubungi via WhatsApp'** pada paket yang Anda minati. Tim kami akan segera merespons, mengonfirmasi ketersediaan, dan memandu Anda melalui proses pembayaran deposit."
    },
    {
        question: "3. Apakah paket tur ini bersifat private?",
        answer: "Ya, semua paket yang kami tawarkan adalah **private tour** (tidak digabung dengan rombongan lain), kecuali jika Anda secara spesifik memilih paket *sharing*. Ini memastikan privasi dan kenyamanan maksimal untuk rombongan Anda."
    },
    {
        question: "4. Berapa lama waktu yang ideal untuk berlibur di Lombok?",
        answer: "Durasi paling populer adalah **3 hari 2 malam** atau **4 hari 3 malam**, karena memberikan waktu yang cukup untuk menjelajahi pantai Mandalika, Gili Trawangan, dan air terjun. Namun, kami bisa menyesuaikan itinerary sesuai waktu yang Anda miliki."
    },
    {
        question: "5. Apakah ada biaya tersembunyi?",
        answer: "Kami menjamin **tidak ada biaya tersembunyi**. Semua yang sudah termasuk (Included) dalam paket akan disediakan. Biaya yang mungkin timbul adalah pengeluaran pribadi (oleh-oleh, suvenir), tiket pesawat, atau kegiatan yang tidak tercantum dalam itinerary."
    }
];

const FAQItem = ({ question, answer, isOpen, toggleFAQ }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                onClick={toggleFAQ}
            >
                <span className={`text-lg font-semibold ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}>
                    {question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-teal-600' : ''}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-600 leading-relaxed pl-1 pr-8">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-4 sm:px-12 bg-white font-sans">
            <div className="max-w-4xl mx-auto">

                {/* Header FAQ */}
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2 flex justify-center items-center">
                        <HelpCircle className="w-4 h-4 mr-2" />
                        Punya Pertanyaan?
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        FAQ (Tanya Jawab Umum)
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="bg-gray-50 rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            toggleFAQ={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
