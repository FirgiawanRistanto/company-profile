// Struktur Website Company Profile - Platform Pembelajaran Online

function UserAuth() {
  return (
    <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">User Authentication</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">Login</button>
      </form>
    </div>
  );
}

function TeamShowcase() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
        <h4 className="font-semibold">Andi Saputra</h4>
        <p>CEO & Founder</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
        <h4 className="font-semibold">Sinta Permata</h4>
        <p>Head of Learning</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
        <h4 className="font-semibold">Budi Kurniawan</h4>
        <p>Lead Developer</p>
      </div>
    </div>
  );
}

function CourseFilter() {
  return (
    <div className="mb-6">
      <select className="w-full md:w-1/3 p-2 border rounded">
        <option value="all">Semua Kategori</option>
        <option value="manajemen">Manajemen</option>
        <option value="desain">Desain</option>
        <option value="pengembangan">Pengembangan</option>
      </select>
    </div>
  );
}

function CourseList() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <CourseHighlight />
    </div>
  );
}

function BlogList() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-bold text-lg mb-2">Tips Belajar Efektif</h4>
        <p>Pelajari cara mengatur waktu dan menyerap materi secara maksimal.</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-bold text-lg mb-2">Menguasai Skill Baru</h4>
        <p>Cara cepat menguasai keterampilan baru di era digital.</p>
      </div>
    </div>
  );
}

export default function WebsiteStructure() {
  return (
    <div className="space-y-16">
      {/* Halaman Beranda */}
      <section id="beranda" className="space-y-8">
        <div className="hero min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">Tingkatkan Keterampilan Profesional Anda</h1>
          <p className="mt-4 text-lg md:text-xl">Platform pembelajaran online terbaik untuk karier yang lebih cerah</p>
          <button className="mt-6 bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition">Lihat Kursus</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-6 animate-fade-up">
          <CourseHighlight />
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="px-6 animate-fade-up">
        <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
        <p className="mb-4">Kami adalah platform pembelajaran online yang fokus pada pengembangan keterampilan profesional. Misi kami adalah menyediakan akses pembelajaran berkualitas tinggi untuk semua kalangan.</p>
        <TeamShowcase />
      </section>

      {/* Katalog Kursus */}
      <section id="kursus" className="px-6 animate-fade-up">
        <h2 className="text-3xl font-bold mb-4">Katalog Kursus</h2>
        <CourseFilter />
        <CourseList />
      </section>

      {/* Testimonial */}
      <section id="testimoni" className="bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-12 animate-fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center">Cerita Sukses</h2>
        <TestimonialCarousel />
      </section>

      {/* Blog & Sumber Daya */}
      <section id="blog" className="px-6 py-12 animate-fade-up">
        <h2 className="text-3xl font-bold mb-4">Sumber Daya Edukatif</h2>
        <BlogList />
      </section>

      {/* Kontak */}
      <section id="kontak" className="px-6 py-12 bg-blue-50 animate-fade-up">
        <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
        <UserAuth />
        <div className="mt-6">
          <p>Email: support@platformedukasi.id</p>
          <p>Telepon: +62 812-3456-7890</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-6 py-8 text-center animate-fade-up">
        <p>&copy; 2025 Platform Pembelajaran Profesional. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}

function CourseHighlight() {
  return (
    <>
      <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-1">
        <h3 className="font-semibold text-lg mb-2">Manajemen Proyek</h3>
        <p>Kuasai keterampilan manajemen proyek dari dasar hingga lanjutan.</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-1">
        <h3 className="font-semibold text-lg mb-2">Desain UI/UX</h3>
        <p>Pelajari prinsip desain modern untuk aplikasi digital.</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-1">
        <h3 className="font-semibold text-lg mb-2">Pengembangan Web</h3>
        <p>Dari HTML hingga React, bangun aplikasi web profesional.</p>
      </div>
    </>
  );
}

function TestimonialCarousel() {
  return (
    <div className="flex overflow-x-auto gap-4 scrollbar-hide pb-4">
      <div className="min-w-[250px] bg-white p-4 rounded shadow hover:shadow-lg transition">&ldquo;Sangat membantu!&rdquo; - Lina</div>
      <div className="min-w-[250px] bg-white p-4 rounded shadow hover:shadow-lg transition">&ldquo;Instruktur luar biasa!&rdquo; - Dedi</div>
      <div className="min-w-[250px] bg-white p-4 rounded shadow hover:shadow-lg transition">&ldquo;Platform terbaik!&rdquo; - Sari</div>
    </div>
  );
}

// Animasi tambahan (opsional, pastikan dimasukkan ke tailwind.config.js jika belum tersedia):
// extend: {
//   animation: {
//     'fade-in': 'fadeIn 1s ease-in-out',
//     'fade-up': 'fadeUp 1s ease-in-out'
//   },
//   keyframes: {
//     fadeIn: {
//       from: { opacity: 0 },
//       to: { opacity: 1 }
//     },
//     fadeUp: {
//       from: { opacity: 0, transform: 'translateY(20px)' },
//       to: { opacity: 1, transform: 'translateY(0)' }
//     }
//   }
// }
