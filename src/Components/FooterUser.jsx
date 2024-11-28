import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#387F39] text-white py-10">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-xl font-bold">Vertigrow</h3>
          <p>Solusi Edukasi Budidaya Kamu</p>
        </div>
        <div>
          <h4 className="font-semibold">Services</h4>
          <ul>
            <li>Panduan Vertikultur</li>
            <li>Manajemen Limbah</li>
            <li>Chatbot AI</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p>+14 5464 8272</p>
          <p>Vertigrow11@gmail.com</p>
        </div>
      </div>
      <div className="text-center mt-5">
        <p>Copyright 2024 @Vertigrow All Rights Reserved</p>
      </div>
    </footer>
  );
}
