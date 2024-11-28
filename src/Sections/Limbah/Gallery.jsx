import React from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom

const Gallery = () => {
  const plants = [
    "https://sibakuljogja.jogjaprov.go.id/blog/pupuk-organik-topdwe/wp-content/uploads/sites/8/2022/05/kompos.jpeg",
    "https://sibakuljogja.jogjaprov.go.id/blog/pupuk-organik-topdwe/wp-content/uploads/sites/8/2022/05/kompos.jpeg",
    "https://sibakuljogja.jogjaprov.go.id/blog/pupuk-organik-topdwe/wp-content/uploads/sites/8/2022/05/kompos.jpeg",
    "https://sibakuljogja.jogjaprov.go.id/blog/pupuk-organik-topdwe/wp-content/uploads/sites/8/2022/05/kompos.jpeg",
    "https://sibakuljogja.jogjaprov.go.id/blog/pupuk-organik-topdwe/wp-content/uploads/sites/8/2022/05/kompos.jpeg",
    "https://sibakuljogja.jogjaprov.go.id/blog/pupuk-organik-topdwe/wp-content/uploads/sites/8/2022/05/kompos.jpeg",
    "https://sibakuljogja.jogjaprov.go.id/blog/pupuk-organik-topdwe/wp-content/uploads/sites/8/2022/05/kompos.jpeg",
    "https://sibakuljogja.jogjaprov.go.id/blog/pupuk-organik-topdwe/wp-content/uploads/sites/8/2022/05/kompos.jpeg",
  ];

  return (
    <div className="mt-10 px-4 mb-40">
      {/* Container untuk grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {plants.map((image, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Gambar */}
            <img
              src={image}
              alt={`Plant ${index}`}
              className="w-full h-80 object-cover"
            />

            {/* Konten di bawah gambar */}
            <div className="absolute bottom-0 h-80 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex flex-col justify-center items-center">
              <h3 className="font-bold text-lg ">Pupuk Kompos</h3>
              <p className="text-sm text-center">
                Modul belajar yang komprehensif tentang daur ulang
              </p>
              {/* Link untuk mengarahkan ke halaman Pakcoy */}
              <Link to="/pakcoy">
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  Daur Sakarang
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
