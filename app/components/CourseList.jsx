export default function CourseList() {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold text-indigo-700 text-lg">Belajar React</h3>
          <p className="text-gray-600">Membangun UI interaktif dengan React</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold text-indigo-700 text-lg">Figma Dasar</h3>
          <p className="text-gray-600">Desain antarmuka dengan Figma</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold text-indigo-700 text-lg">Scrum & Agile</h3>
          <p className="text-gray-600">Teknik manajemen proyek modern</p>
        </div>
      </div>
    );
  }
  