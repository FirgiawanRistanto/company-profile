export default function TeamShowcase() {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h4 className="font-bold text-indigo-700">Andi</h4>
          <p className="text-gray-600">Instruktur Web</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h4 className="font-bold text-indigo-700">Budi</h4>
          <p className="text-gray-600">Desainer UI/UX</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h4 className="font-bold text-indigo-700">Citra</h4>
          <p className="text-gray-600">Manajer Proyek</p>
        </div>
      </div>
    );
  }
  