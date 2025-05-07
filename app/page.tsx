// Struktur Website Company Profile - Platform Pembelajaran Online

export default function WebsiteStructure() {
  return (
    <div className="space-y-16">
      {/* Halaman Beranda */}
      <section id="beranda" className="space-y-8">
        <div className="hero min-h-screen bg-blue-600 text-white flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">Tingkatkan Keterampilan Profesional Anda</h1>
          <p className="mt-4 text-lg md:text-xl">Platform pembelajaran online terbaik untuk karier yang lebih cerah</p>
          <button className="mt-6 bg-white text-blue-600 font-semibold py-2 px-4 rounded-xl">Lihat Kursus</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-6">
          {/* Sorotan kursus */}
          <CourseHighlight />
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="px-6">
        <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
        <p className="mb-4">Kami adalah platform pembelajaran online yang fokus pada pengembangan keterampilan profesional. Misi kami adalah menyediakan akses pembelajaran berkualitas tinggi untuk semua kalangan.</p>
        <TeamShowcase />
      </section>

      {/* Katalog Kursus */}
      <section id="kursus" className="px-6">
        <h2 className="text-3xl font-bold mb-4">Katalog Kursus</h2>
        <CourseFilter />
        <CourseList />
      </section>

      {/* Testimonial */}
      <section id="testimoni" className="bg-gray-100 px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Cerita Sukses</h2>
        <TestimonialCarousel />
      </section>

      {/* Blog & Sumber Daya */}
      <section id="blog" className="px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Sumber Daya Edukatif</h2>
        <BlogList />
      </section>

      {/* Kontak */}
      <section id="kontak" className="px-6 py-12 bg-blue-50">
        <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
        <ContactForm />
        <div className="mt-6">
          <p>Email: support@platformedukasi.id</p>
          <p>Telepon: +62 812-3456-7890</p>
        </div>
      </section>

      {/* Fitur Teknis dan Dashboard */}
      <UserAuth />
      <StudentDashboard />
      <InteractivePreview />
      <PaymentIntegration />
      <LiveChatSupport />
      <CourseReview />
      <InstructorProfile />
      <SearchFilter />
      <CalendarIntegration />

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-6 py-8 text-center">
        <p>&copy; 2025 Platform Pembelajaran Profesional. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}

// Komponen dummy untuk placeholder
function CourseHighlight() {
  return <div className="p-4 bg-white rounded-xl shadow">Kursus Unggulan</div>;
}

function TeamShowcase() {
  return <div className="mt-4">[Tampilkan Profil Tim di sini]</div>;
}

function CourseFilter() {
  return <div className="mb-4">[Filter Kursus Berdasarkan Topik, Level, Durasi]</div>;
}

function CourseList() {
  return <div>[Daftar Kursus]</div>;
}

function TestimonialCarousel() {
  return <div>[Carousel Testimoni]</div>;
}

function BlogList() {
  return <div>[Daftar Artikel dan Sumber Daya]</div>;
}

function ContactForm() {
  return <div>[Form Kontak Pengguna]</div>;
}

function UserAuth() {
  return <div>[Autentikasi Pengguna: Login/Daftar]</div>;
}

function StudentDashboard() {
  return <div>[Dashboard Siswa: Kursus Saya, Kemajuan]</div>;
}

function InteractivePreview() {
  return <div>[Pratinjau Kursus Interaktif]</div>;
}

function PaymentIntegration() {
  return <div>[Integrasi Pembayaran]</div>;
}

function LiveChatSupport() {
  return <div>[Dukungan Obrolan Langsung]</div>;
}

function CourseReview() {
  return <div>[Sistem Ulasan Kursus]</div>;
}

function InstructorProfile() {
  return <div>[Profil dan Kredensial Instruktur]</div>;
}

function SearchFilter() {
  return <div>[Fitur Pencarian dan Filter]</div>;
}

function CalendarIntegration() {
  return <div>[Integrasi Kalender untuk Jadwal Live]</div>;
}