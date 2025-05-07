// Struktur Website Company Profile - Platform Pembelajaran Online

function UserAuth() {
  return (
    <div className="p-4 bg-white/80 backdrop-blur-md rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">User Authentication</h3>
      <p className="text-gray-700">Manage user login, registration, and authentication securely.</p>
    </div>
  );
}

function TeamShowcase() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {['Dina', 'Rafi', 'Yudi'].map((name, idx) => (
        <div key={idx} className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow hover:shadow-lg transition">
          <h4 className="font-semibold text-indigo-700">{name}</h4>
          <p className="text-gray-600">Instruktur & Mentor</p>
        </div>
      ))}
    </div>
  );
}

function CourseFilter() {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {["Semua", "Teknologi", "Desain", "Bisnis"].map((cat, idx) => (
        <button key={idx} className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full hover:bg-indigo-200 transition">
          {cat}
        </button>
      ))}
    </div>
  );
}

function CourseList() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {["React Dasar", "UX Research", "Digital Marketing"].map((course, idx) => (
        <div key={idx} className="p-4 bg-white/90 backdrop-blur-md rounded-xl shadow hover:shadow-lg transition">
          <h4 className="font-semibold text-blue-700 mb-1">{course}</h4>
          <p className="text-gray-600">Kursus lengkap untuk pemula hingga mahir</p>
        </div>
      ))}
    </div>
  );
}

function BlogList() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {["Tips Interview Kerja", "Belajar dari Rumah", "Upgrade Skill Cepat"].map((title, idx) => (
        <div key={idx} className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow hover:shadow-lg transition">
          <h4 className="font-semibold text-yellow-700 mb-1">{title}</h4>
          <p className="text-gray-600">Artikel terbaru untuk menunjang pembelajaran Anda.</p>
        </div>
      ))}
    </div>
  );
}

export default function WebsiteStructure() {
  return (
    <div className="space-y-16 font-sans text-gray-800">
      {/* Halaman Beranda */}
      <section id="beranda" className="space-y-8">
        <div className="hero min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in drop-shadow-lg">Tingkatkan Keterampilan Profesional Anda</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">Platform pembelajaran online terbaik untuk karier yang lebih cerah</p>
          <button className="mt-6 bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full hover:bg-indigo-100 transition shadow">Lihat Kursus</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-6 animate-fade-up">
          <CourseHighlight />
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="px-6 animate-fade-up bg-gradient-to-r from-white via-gray-50 to-white py-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">Tentang Kami</h2>
        <p className="mb-4 text-gray-700">Kami adalah platform pembelajaran online yang fokus pada pengembangan keterampilan profesional. Misi kami adalah menyediakan akses pembelajaran berkualitas tinggi untuk semua kalangan.</p>
        <TeamShowcase />
      </section>

      {/* Katalog Kursus */}
      <section id="kursus" className="px-6 animate-fade-up bg-gradient-to-r from-blue-50 to-green-50 py-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Katalog Kursus</h2>
        <CourseFilter />
        <CourseList />
      </section>

      {/* Testimonial */}
      <section id="testimoni" className="bg-gradient-to-br from-purple-100 to-pink-100 px-6 py-12 animate-fade-up rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Cerita Sukses</h2>
        <TestimonialCarousel />
      </section>

      {/* Blog & Sumber Daya */}
      <section id="blog" className="px-6 py-12 animate-fade-up bg-gradient-to-r from-yellow-50 to-white rounded-xl">
        <h2 className="text-3xl font-bold mb-4 text-yellow-700">Sumber Daya Edukatif</h2>
        <BlogList />
      </section>

      {/* Kontak */}
      <section id="kontak" className="px-6 py-12 bg-gradient-to-r from-blue-100 to-white animate-fade-up rounded-xl">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Hubungi Kami</h2>
        <UserAuth />
        <div className="mt-6 text-gray-700">
          <p>Email: <span className="font-medium">support@platformedukasi.id</span></p>
          <p>Telepon: <span className="font-medium">+62 812-3456-7890</span></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-8 text-center animate-fade-up">
        <p>&copy; 2025 Platform Pembelajaran Profesional. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}

function CourseHighlight() {
  return (
    <>
      <div className="p-4 bg-white/90 backdrop-blur-md rounded-xl shadow hover:shadow-xl transition-transform hover:-translate-y-1">
        <h3 className="font-semibold text-lg text-indigo-700 mb-2">Manajemen Proyek</h3>
        <p className="text-gray-700">Kuasai keterampilan manajemen proyek dari dasar hingga lanjutan.</p>
      </div>
      <div className="p-4 bg-white/90 backdrop-blur-md rounded-xl shadow hover:shadow-xl transition-transform hover:-translate-y-1">
        <h3 className="font-semibold text-lg text-indigo-700 mb-2">Desain UI/UX</h3>
        <p className="text-gray-700">Pelajari prinsip desain modern untuk aplikasi digital.</p>
      </div>
      <div className="p-4 bg-white/90 backdrop-blur-md rounded-xl shadow hover:shadow-xl transition-transform hover:-translate-y-1">
        <h3 className="font-semibold text-lg text-indigo-700 mb-2">Pengembangan Web</h3>
        <p className="text-gray-700">Dari HTML hingga React, bangun aplikasi web profesional.</p>
      </div>
    </>
  );
}

function TestimonialCarousel() {
  return (
    <div className="flex overflow-x-auto gap-4 scrollbar-hide pb-4">
      <div className="min-w-[250px] bg-white p-4 rounded shadow hover:shadow-lg transition text-gray-800">&ldquo;Sangat membantu!&rdquo; - Lina</div>
      <div className="min-w-[250px] bg-white p-4 rounded shadow hover:shadow-lg transition text-gray-800">&ldquo;Instruktur luar biasa!&rdquo; - Dedi</div>
      <div className="min-w-[250px] bg-white p-4 rounded shadow hover:shadow-lg transition text-gray-800">&ldquo;Platform terbaik!&rdquo; - Sari</div>
    </div>
  );
}
