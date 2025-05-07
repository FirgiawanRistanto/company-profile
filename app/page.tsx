// Struktur Website Company Profile - Platform Pembelajaran Online

import { Briefcase, Users, BookOpen, FileText } from "lucide-react";
import TeamShowcase from "./components/TeamShowcase";
import CourseFilter from "./components/CourseFilter";
import CourseList from "./components/CourseList";
import BlogList from "./components/BlogList";
import { motion } from "framer-motion";
import React from "react";

function UserAuth() {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
      <h3 className="font-semibold text-xl text-indigo-800 mb-2 flex items-center gap-2">
        <Briefcase className="w-5 h-5" /> User Authentication
      </h3>
      <p className="text-gray-700">Manage user login, registration, and authentication securely.</p>
    </motion.div>
  );
}

export default function WebsiteStructure() {
  return (
    <div className="space-y-24 font-sans text-gray-900">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-50"
        style={{ scaleX: useScrollProgress() }}
      />

      {/* Halaman Beranda */}
      <section id="beranda" className="space-y-12">
        <div className="hero min-h-screen bg-gradient-to-tr from-indigo-700 via-purple-600 to-pink-500 text-white flex flex-col justify-center items-center text-center px-6 py-16">
          <h1 className="text-5xl md:text-7xl font-extrabold animate-fade-in drop-shadow-xl">Tingkatkan Keterampilan Profesional Anda</h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90">Platform pembelajaran online terbaik untuk karier yang lebih cerah</p>
          <button className="mt-8 bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300 shadow-lg hover:scale-105">Lihat Kursus</button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 px-6 animate-fade-up">
          <CourseHighlight />
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="px-6 py-16 bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl shadow-inner animate-fade-up">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700 flex items-center gap-2"><Users className="w-6 h-6" /> Tentang Kami</h2>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">Kami adalah platform pembelajaran online yang fokus pada pengembangan keterampilan profesional. Misi kami adalah menyediakan akses pembelajaran berkualitas tinggi untuk semua kalangan.</p>
        <TeamShowcase />
      </section>

      {/* Katalog Kursus */}
      <section id="kursus" className="px-6 py-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl shadow-inner animate-fade-up">
        <h2 className="text-4xl font-bold mb-6 text-blue-700 flex items-center gap-2"><BookOpen className="w-6 h-6" /> Katalog Kursus</h2>
        <CourseFilter />
        <CourseList />
      </section>

      {/* Testimonial */}
      <section id="testimoni" className="bg-gradient-to-br from-purple-100 to-pink-100 px-6 py-16 rounded-3xl animate-fade-up shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-700">Cerita Sukses</h2>
        <TestimonialCarousel />
      </section>

      {/* Blog & Sumber Daya */}
      <section id="blog" className="px-6 py-16 bg-gradient-to-r from-yellow-50 to-white rounded-3xl shadow-inner animate-fade-up">
        <h2 className="text-4xl font-bold mb-6 text-yellow-700 flex items-center gap-2"><FileText className="w-6 h-6" /> Sumber Daya Edukatif</h2>
        <BlogList />
      </section>

      {/* Kontak */}
      <section id="kontak" className="px-6 py-16 bg-gradient-to-r from-blue-100 to-white rounded-3xl animate-fade-up shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">Hubungi Kami</h2>
        <UserAuth />
        <div className="mt-6 text-lg text-gray-700 space-y-1">
          <p>Email: <span className="font-medium">support@platformedukasi.id</span></p>
          <p>Telepon: <span className="font-medium">+62 812-3456-7890</span></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-10 text-center animate-fade-up">
        <p className="text-sm">&copy; 2025 Platform Pembelajaran Profesional. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}

function useScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(totalScroll / windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

function CourseHighlight() {
  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1">
        <h3 className="font-semibold text-xl text-indigo-700 mb-2">Manajemen Proyek</h3>
        <p className="text-gray-700">Kuasai keterampilan manajemen proyek dari dasar hingga lanjutan.</p>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1">
        <h3 className="font-semibold text-xl text-indigo-700 mb-2">Desain UI/UX</h3>
        <p className="text-gray-700">Pelajari prinsip desain modern untuk aplikasi digital.</p>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1">
        <h3 className="font-semibold text-xl text-indigo-700 mb-2">Pengembangan Web</h3>
        <p className="text-gray-700">Dari HTML hingga React, bangun aplikasi web profesional.</p>
      </motion.div>
    </>
  );
}

function TestimonialCarousel() {
  return (
    <div className="flex overflow-x-auto gap-6 scrollbar-hide pb-4 px-2">
      <motion.div whileHover={{ scale: 1.05 }} className="min-w-[280px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition text-gray-800 text-lg italic">&ldquo;Sangat membantu!&rdquo; <br /><span className="not-italic font-semibold">- Lina</span></motion.div>
      <motion.div whileHover={{ scale: 1.05 }} className="min-w-[280px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition text-gray-800 text-lg italic">&ldquo;Instruktur luar biasa!&rdquo; <br /><span className="not-italic font-semibold">- Dedi</span></motion.div>
      <motion.div whileHover={{ scale: 1.05 }} className="min-w-[280px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition text-gray-800 text-lg italic">&ldquo;Platform terbaik!&rdquo; <br /><span className="not-italic font-semibold">- Sari</span></motion.div>
    </div>
  );
}
