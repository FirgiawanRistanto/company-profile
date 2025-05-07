"use client";
import React from "react";

import { Users, BookOpen } from "lucide-react";
import TeamShowcase from "./components/TeamShowcase";
import CourseFilter from "./components/CourseFilter";
import CourseList from "./components/CourseList";
import { motion } from "framer-motion";

export default function WebsiteStructure() {
  return (
    <div className="space-y-12 font-sans text-gray-900 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#beranda" className="text-2xl font-bold">TechAdemy</a>
          <div className="space-x-8 flex">
            <a href="#beranda" className="hover:text-indigo-200 transition duration-300">Beranda</a>
            <a href="#visi-misi" className="hover:text-indigo-200 transition duration-300">Visi & Misi</a>
            <a href="#tentang" className="hover:text-indigo-200 transition duration-300">Tentang Kami</a>
            <a href="#kontak" className="hover:text-indigo-200 transition duration-300">Hubungi Kami</a>
          </div>
        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 z-50"
        style={{ scaleX: useScrollProgress() }}
      />

      {/* Halaman Beranda */}
      <section id="beranda" className="space-y-12 pt-5">
        <div className="hero min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white flex flex-col justify-center items-center text-center px-8 py-20">
          <h1 className="text-6xl md:text-8xl font-extrabold animate-fade-in drop-shadow-xl leading-tight">
            Tingkatkan Keterampilan Profesional Anda
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-xl">
            Platform pembelajaran online terbaik untuk karier yang lebih cerah dan penuh peluang.
          </p>
          <a href="#kursus" className="mt-8 bg-white text-indigo-600 font-bold py-4 px-10 rounded-full hover:bg-indigo-100 transition duration-300 shadow-lg hover:scale-110">
            Lihat Kursus
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8 px-8 animate-fade-up">
          <CourseHighlight />
        </div>
      </section>

      {/* Visi & Misi */}
      <section id="visi-misi" className="px-8 py-16 bg-gradient-to-r from-indigo-50 via-blue-50 to-white rounded-3xl shadow-xl animate-fade-up">
        <h2 className="text-5xl font-extrabold mb-8 text-indigo-700">Visi & Misi</h2>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-indigo-700">Visi Kami</h3>
            <p className="text-xl text-gray-700">
              Menjadi platform pembelajaran online terdepan yang dapat diakses oleh semua kalangan untuk mengembangkan
              keterampilan profesional yang relevan dan berkualitas.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-indigo-700">Misi Kami</h3>
            <ul className="list-disc pl-6 text-xl text-gray-700 space-y-2">
              <li>Menyediakan kursus dan materi pembelajaran berkualitas tinggi.</li>
              <li>Menghadirkan pembelajaran yang dapat diakses oleh siapa saja di seluruh dunia.</li>
              <li>Memberikan pembelajaran yang berbasis pada perkembangan industri terkini.</li>
              <li>Mendorong dan membantu pengembangan keterampilan profesional individu di berbagai bidang.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section
        id="tentang"
        className="px-8 py-16 bg-gradient-to-r from-white via-gray-100 to-white rounded-3xl shadow-xl animate-fade-up"
      >
        <h2 className="text-5xl font-extrabold mb-8 text-indigo-700 flex items-center gap-3">
          <Users className="w-7 h-7" /> Tentang Kami
        </h2>
        <p className="mb-8 text-xl text-gray-700 leading-relaxed max-w-4xl items-center">
          Kami adalah platform pembelajaran online yang fokus pada pengembangan keterampilan profesional. Misi kami adalah menyediakan akses pembelajaran berkualitas tinggi untuk semua kalangan. Kami berdedikasi untuk menciptakan pembelajaran yang mudah diakses dan penuh dampak.
        </p>
        <TeamShowcase />
      </section>

      {/* Katalog Kursus */}
      <section
        id="kursus"
        className="px-8 py-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl shadow-xl animate-fade-up"
      >
        <h2 className="text-5xl font-extrabold mb-8 text-blue-700 flex items-center gap-3">
          <BookOpen className="w-7 h-7" /> Katalog Kursus
        </h2>
        <CourseFilter />
        <CourseList />
      </section>

      {/* Testimonial */}
      <section
        id="testimoni"
        className="bg-gradient-to-br from-purple-100 to-pink-100 px-8 py-16 rounded-3xl animate-fade-up shadow-xl"
      >
        <h2 className="text-5xl font-extrabold mb-8 text-purple-700">
          Testimonial
        </h2>
        <TestimonialCarousel />
      </section>

      {/* Kontak */}
      <section
        id="kontak"
        className="px-8 py-16 bg-gradient-to-r from-blue-100 to-white rounded-3xl animate-fade-up shadow-xl"
      >
        <h2 className="text-5xl font-extrabold mb-8 text-blue-700">Hubungi Kami</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulir Kontak */}
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const email = formData.get("email");
                const message = formData.get("message");

                console.log({ name, email, message });
                alert("Pesan berhasil dikirim!");
                e.currentTarget.reset();
              }}
              className="space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-blue-700">Formulir Kontak</h3>

              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Pesan
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Info Kontak */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl h-fit">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Informasi Kontak</h3>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Email:</span> support@Techademy.id
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Telepon:</span> +62 812-3456-7890
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-3 py-5 text-center animate-fade-up">
        <p className="text-md">&copy; 2025 TechAdemy. all right reserved.</p>
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
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1"
      >
        <h3 className="font-semibold text-2xl text-indigo-700 mb-4">Manajemen Proyek</h3>
        <p className="text-gray-700">Kuasai keterampilan manajemen proyek dari dasar hingga lanjutan.</p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1"
      >
        <h3 className="font-semibold text-2xl text-indigo-700 mb-4">Desain UI/UX</h3>
        <p className="text-gray-700">Pelajari prinsip desain modern untuk aplikasi digital.</p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1"
      >
        <h3 className="font-semibold text-2xl text-indigo-700 mb-4">Pengembangan Web</h3>
        <p className="text-gray-700">Dari HTML hingga React, bangun aplikasi web profesional.</p>
      </motion.div>
    </>
  );
}

function TestimonialCarousel() {
  return (
    <div className="flex overflow-x-auto gap-8 scrollbar-hide pb-6 px-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="min-w-[320px] bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition text-gray-800 text-xl italic"
      >
        &ldquo;Sangat membantu!&rdquo; <br />
        <span className="not-italic font-semibold">- Lina</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="min-w-[320px] bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition text-gray-800 text-xl italic"
      >
        &ldquo;Instruktur luar biasa!&rdquo; <br />
        <span className="not-italic font-semibold">- Dedi</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="min-w-[320px] bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition text-gray-800 text-xl italic"
      >
        &ldquo;Platform terbaik!&rdquo; <br />
        <span className="not-italic font-semibold">- Sari</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="min-w-[320px] bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition text-gray-800 text-xl italic"
      >
        &ldquo;Tutor nya baik dan sabar cuy&rdquo; <br />
        <span className="not-italic font-semibold">- mico</span>
      </motion.div>
    </div>
  );
}
