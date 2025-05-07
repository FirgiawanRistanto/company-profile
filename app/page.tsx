// Struktur Website Company Profile - Platform Pembelajaran Online

function UserAuth() {
  return (
    <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2 text-blue-700">User Authentication</h3>
      <p className="text-gray-700">Manage user login, registration, and authentication securely.</p>
    </div>
  );
}

export default function WebsiteStructure() {
  return (
    <div className="space-y-16">
      {/* Halaman Beranda */}
      <section id="beranda" className="space-y-8">
        <div className="hero min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in drop-shadow-lg">Tingkatkan Keterampilan Profesional Anda</h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100">Platform pembelajaran online terbaik untuk karier yang lebih cerah</p>
          <button className="mt-6 bg-white text-blue-700 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition shadow">Lihat Kursus</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-6 animate-fade-up">
          <CourseHighlight />
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="px-6 animate-fade-up">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">Tentang Kami</h2>
        <p className="mb-4 text-gray-700">Kami adalah platform pembelajaran online yang fokus pada pengembangan keterampilan profesional. Misi kami adalah menyediakan akses pembelajaran berkualitas tinggi untuk semua kalangan.</p>
        <TeamShowcase />
      </section>

      {/* Katalog Kursus */}
      <section id="kursus" className="px-6 animate-fade-up">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">Katalog Kursus</h2>
        <CourseFilter />
        <CourseList />
      </section>

      {/* Testimonial */}
      <section id="testimoni" className="bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-12 animate-fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Cerita Sukses</h2>
        <TestimonialCarousel />
      </section>

      {/* Blog & Sumber Daya */}
      <section id="blog" className="px-6 py-12 animate-fade-up">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">Sumber Daya Edukatif</h2>
        <BlogList />
      </section>

      {/* Kontak */}
      <section id="kontak" className="px-6 py-12 bg-blue-50 animate-fade-up">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">Hubungi Kami</h2>
        <UserAuth />
        <div className="mt-6 text-gray-700">
          <p>Email: support@platformedukasi.id</p>
          <p>Telepon: +62 812-3456-7890</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-6 py-8 text-center animate-fade-up">
        <p className="text-sm">&copy; 2025 Platform Pembelajaran Profesional. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}

function CourseHighlight() {
  return (
    <>
      <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-1 border-l-4 border-blue-600">
        <h3 className="font-semibold text-lg mb-2 text-blue-700">Manajemen Proyek</h3>
        <p className="text-gray-700">Kuasai keterampilan manajemen proyek dari dasar hingga lanjutan.</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-1 border-l-4 border-green-500">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Desain UI/UX</h3>
        <p className="text-gray-700">Pelajari prinsip desain modern untuk aplikasi digital.</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-1 border-l-4 border-purple-500">
        <h3 className="font-semibold text-lg mb-2 text-purple-700">Pengembangan Web</h3>
        <p className="text-gray-700">Dari HTML hingga React, bangun aplikasi web profesional.</p>
      </div>
    </>
  );
}

function TestimonialCarousel() {
  return (
    <div className="flex overflow-x-auto gap-4 scrollbar-hide pb-4">
      <div className="min-w-[250px] bg-white p-4 rounded shadow hover:shadow-lg transition border-t-4 border-blue-600">&ldquo;Sangat membantu!&rdquo; <br /><span className="text-sm text-gray-600">- Lina</span></div>
      <div className="min-w-[250px] bg-white p-4 rounded shadow hover:shadow-lg transition border-t-4 border-green-500">&ldquo;Instruktur luar biasa!&rdquo; <br /><span className="text-sm text-gray-600">- Dedi</span></div>
      <div className="min-w-[250px] bg-white p-4 rounded shadow hover:shadow-lg transition border-t-4 border-purple-500">&ldquo;Platform terbaik!&rdquo; <br /><span className="text-sm text-gray-600">- Sari</span></div>
    </div>
  );
}

function TeamShowcase() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      <div className="p-4 bg-white rounded-xl shadow text-center">
        <h4 className="text-lg font-semibold text-blue-700">Rina Putri</h4>
        <p className="text-sm text-gray-600">CEO & Founder</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow text-center">
        <h4 className="text-lg font-semibold text-green-700">Agus Santoso</h4>
        <p className="text-sm text-gray-600">CTO</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow text-center">
        <h4 className="text-lg font-semibold text-purple-700">Dewi Lestari</h4>
        <p className="text-sm text-gray-600">CMO</p>
      </div>
    </div>
  );
}

function CourseFilter() {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Semua</button>
      <button className="px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200">Teknologi</button>
      <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded hover:bg-purple-200">Desain</button>
    </div>
  );
}

function CourseList() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="p-4 bg-white rounded shadow border-l-4 border-blue-600">
        <h4 className="font-semibold text-blue-700">React Dasar</h4>
        <p className="text-sm text-gray-600">Mulai dari dasar membangun komponen dengan React.</p>
      </div>
      <div className="p-4 bg-white rounded shadow border-l-4 border-green-600">
        <h4 className="font-semibold text-green-700">Figma untuk Pemula</h4>
        <p className="text-sm text-gray-600">Pelajari desain UI secara praktis dan efisien.</p>
      </div>
      <div className="p-4 bg-white rounded shadow border-l-4 border-purple-600">
        <h4 className="font-semibold text-purple-700">Manajemen Agile</h4>
        <p className="text-sm text-gray-600">Dasar-dasar agile untuk tim produktif.</p>
      </div>
    </div>
  );
}

function BlogList() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow border-t-4 border-blue-600">
        <h4 className="font-semibold text-blue-700">Tips Belajar Efektif Online</h4>
        <p className="text-sm text-gray-600">Temukan strategi belajar online yang terbukti ampuh.</p>
      </div>
      <div className="bg-white p-4 rounded shadow border-t-4 border-green-600">
        <h4 className="font-semibold text-green-700">Kenapa Skill Digital Penting?</h4>
        <p className="text-sm text-gray-600">Mengapa digital skill jadi penentu masa depan karier Anda.</p>
      </div>
    </div>
  );
}
