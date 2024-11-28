import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link dan useLocation

export default function NavbarUser() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation(); // Hook untuk mendapatkan path saat ini

  // Fungsi untuk toggle dropdown
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Fungsi untuk menentukan kelas aktif
  const isActive = (path) => location.pathname === path ? "text-orange-500 font-bold" : "text-black hover:text-orange-500";

  return (
    <nav className="container mx-auto flex justify-between items-center py-3">
      {/* Logo */}
      <div className="flex items-center gap-5">
        <img
          src="Logo-Vertigrow.png"
          alt="VertiGrow Logo"
          className="w-14 h-14"
        />
        <h3 className="text-xl font-semibold">VertiGrow</h3>
      </div>

      {/* Menu Navbar */}
      <ul className="flex gap-8 font-semibold">
        <li>
          <Link to="/edukasi" className={`no-underline cursor-pointer ${isActive('/edukasi')}`}>
            Edukasi
          </Link>
        </li>
        <li>
          <Link to="/manajemen-limbah" className={`no-underline cursor-pointer ${isActive('/manajemen-limbah')}`}>
            Manajemen Limbah
          </Link>
        </li>
        <li>
          <Link to="/chatbot-ai" className={`no-underline cursor-pointer ${isActive('/chatbot-ai')}`}>
            Chatbot AI
          </Link>
        </li>
      </ul>

      {/* Profile Dropdown */}
      <div className="relative">
        {/* Profile Button */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <img
            src="https://picsum.photos/40/40"
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
          <span
            className={`transform transition-transform ${
              dropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute mt-2 w-36 bg-white rounded-md shadow-lg border">
            <ul>
              <li className="py-2 hover:text-red-500 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
