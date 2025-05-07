export default function CourseFilter() {
    return (
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full hover:bg-indigo-200">Semua</button>
        <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full hover:bg-indigo-200">UI/UX</button>
        <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full hover:bg-indigo-200">Web</button>
        <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full hover:bg-indigo-200">Manajemen</button>
      </div>
    );
  }
  