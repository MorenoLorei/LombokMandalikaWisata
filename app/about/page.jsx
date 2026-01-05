export default function AboutPage() {
  return (
    <main className="pt-28 pb-20 bg-white text-gray-800">
      {/* Hero / Intro */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Tentang LombokMandalikaWisata
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Mitra perjalanan terpercaya Anda di Lombok — menghadirkan kenyamanan terbaik
            dengan harga terbaik untuk setiap pengalaman wisata.
          </p>
        </div>
      </section>

      {/* Story & Values */}
      <section className="px-6 mt-14">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-3">Siapa Kami</h2>
            <p className="leading-8 text-gray-700">
              LombokMandalikaWisata adalah agen perjalanan lokal yang berfokus pada wisata
              Lombok dan sekitarnya. Kami percaya bahwa liburan yang berkesan tidak harus
              rumit dan mahal. Dengan tim yang berpengalaman, jaringan mitra lokal,
              serta pelayanan yang tulus, kami memastikan setiap perjalanan Anda terasa
              aman, nyaman, dan sesuai anggaran.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Nilai Utama Kami</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Kenyamanan Terbaik:</span> Armada yang terawat,
                pilihan akomodasi yang nyaman, serta itinerary yang fleksibel agar Anda
                bisa menikmati Lombok tanpa terburu-buru.
              </li>
              <li>
                <span className="font-semibold">Harga Terbaik:</span> Paket transparan tanpa biaya
                tersembunyi. Kami mengoptimalkan biaya agar Anda mendapatkan nilai maksimal.
              </li>
              <li>
                <span className="font-semibold">Pelayanan Ramah & Profesional:</span> Tim lokal yang
                siap membantu, memberikan rekomendasi autentik, dan respons cepat.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Apa yang Kami Tawarkan</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Paket Tour Lombok</h3>
              <p className="text-gray-700">
                Pilihan paket 1–5 hari, jelajah pantai, Gili, budaya Sasak, air terjun,
                hingga spot foto terbaik Lombok.
              </p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Honeymoon & Keluarga</h3>
              <p className="text-gray-700">
                Itinerary romantis atau family-friendly dengan pengaturan khusus agar
                momen berharga Anda makin sempurna.
              </p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Transport & Sewa Mobil</h3>
              <p className="text-gray-700">
                Layanan antar-jemput bandara, sewa mobil + driver lokal berpengalaman,
                dan opsi private tour yang fleksibel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Stats */}
      <section className="px-6 mt-16">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded-xl">
            <div className="text-3xl font-extrabold">1000+</div>
            <div className="text-gray-600">Tamu bahagia</div>
          </div>
          <div className="p-6 border rounded-xl">
            <div className="text-3xl font-extrabold">4.9/5</div>
            <div className="text-gray-600">Rating kepuasan</div>
          </div>
          <div className="p-6 border rounded-xl">
            <div className="text-3xl font-extrabold">100%</div>
            <div className="text-gray-600">Harga transparan</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 mt-16">
        <div className="max-w-3xl mx-auto text-center bg-gray-50 border rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">Siap Liburan ke Lombok?</h2>
          <p className="text-gray-700 mb-6">
            Hubungi kami untuk konsultasi gratis. Kami bantu rancang perjalanan impian
            Anda dengan kenyamanan terbaik dan harga terbaik.
          </p>
          <a href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Hubungi Kami
          </a>
        </div>
      </section>
    </main>
  );
}
