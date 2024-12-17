import React from "react";

export default function VideoBiocharOrganik() {
  return (
    <section className="container flex flex-col justify-center items-center gap-8 py-16 px-4">
      {/* Video Section */}
      <div className="relative w-full max-w-4xl shadow-lg rounded-xl overflow-hidden">
      <iframe 
      width="900" 
      height="500" 
      src="https://www.youtube.com/embed/m22Og3Sg73I?si=pdNjiImX_6HQvzp0" title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen></iframe>
        <div className="absolute top-2 left-2 bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow">
          Tutorial
        </div>
      </div>

      {/* Description Section */}
      <div className="text-center max-w-2xl">
        <h3 className="text-3xl font-semibold text-gray-800 hover:text-green-600 transition-colors duration-300">
          Video Tutorial Pembuatan Biochar Organik
        </h3>
        <p className="mt-4 text-gray-600 text-lg">
          Dengan langkah-langkah ini, Anda dapat membuat bichar organik.
        </p>
      </div>
    </section>
  );
}