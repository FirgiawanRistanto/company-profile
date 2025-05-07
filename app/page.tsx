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
      <section className="px-6">
        <UserAuth />
        <StudentDashboard />
        <InteractivePreview />
        <PaymentIntegration />
        <LiveChatSupport />
        <CourseReview />
        <InstructorProfile />
        <SearchFilter />
        <CalendarIntegration />
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-6 py-8 text-center">
        <p>&copy; 2025 Platform Pembelajaran Profesional. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}

function CourseHighlight() {
  return (
    <>
      <div className="p-4 bg-white rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-2">Manajemen Proyek</h3>
        <p>Kuasai keterampilan manajemen proyek dari dasar hingga lanjutan.</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-2">Desain UI/UX</h3>
        <p>Pelajari prinsip desain modern untuk aplikasi digital.</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-2">Pengembangan Web</h3>
        <p>Dari HTML hingga React, bangun aplikasi web profesional.</p>
      </div>
    </>
  );
}

function TeamShowcase() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-bold">Ayu Hartono</h4>
        <p>CEO & Founder</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-bold">Budi Santosa</h4>
        <p>Kepala Kurikulum</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-bold">Citra Maulani</h4>
        <p>Desainer UI/UX</p>
      </div>
    </div>
  );
}

function CourseFilter() {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full">Topik</button>
      <button className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full">Level</button>
      <button className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full">Durasi</button>
    </div>
  );
}

function CourseList() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded shadow">Kursus 1</div>
      <div className="bg-white p-4 rounded shadow">Kursus 2</div>
      <div className="bg-white p-4 rounded shadow">Kursus 3</div>
    </div>
  );
}

function TestimonialCarousel() {
  return (
    <div className="flex overflow-x-auto gap-4">
      <div className="min-w-[250px] bg-white p-4 rounded shadow">&ldquo;Sangat membantu!&rdquo; - Lina</div>
      <div className="min-w-[250px] bg-white p-4 rounded shadow">&ldquo;Instruktur luar biasa!&rdquo; - Dedi</div>
      <div className="min-w-[250px] bg-white p-4 rounded shadow">&ldquo;Platform terbaik!&rdquo; - Sari</div>
    </div>
  );
}

function BlogList() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded shadow">Artikel 1</div>
      <div className="bg-white p-4 rounded shadow">Artikel 2</div>
      <div className="bg-white p-4 rounded shadow">Artikel 3</div>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="space-y-4 max-w-xl">
      <input className="w-full border rounded p-2" placeholder="Nama" />
      <input className="w-full border rounded p-2" placeholder="Email" />
      <textarea className="w-full border rounded p-2" placeholder="Pesan" rows={4} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Kirim</button>
    </form>
  );
}

function UserAuth() {
  return <div className="hidden">[Autentikasi Pengguna: Login/Daftar]</div>;
}

function StudentDashboard() {
  return <div className="hidden">[Dashboard Siswa: Kursus Saya, Kemajuan]</div>;
}

function InteractivePreview() {
  return <div className="hidden">[Pratinjau Kursus Interaktif]</div>;
}

function PaymentIntegration() {
  return <div className="hidden">[Integrasi Pembayaran]</div>;
}

function LiveChatSupport() {
  return <div className="hidden">[Dukungan Obrolan Langsung]</div>;
}

function CourseReview() {
  return <div className="hidden">[Sistem Ulasan Kursus]</div>;
}

function InstructorProfile() {
  return <div className="hidden">[Profil dan Kredensial Instruktur]</div>;
}

function SearchFilter() {
  return <div className="hidden">[Fitur Pencarian dan Filter]</div>;
}

function CalendarIntegration() {
  return <div className="hidden">[Integrasi Kalender untuk Jadwal Live]</div>;
}
