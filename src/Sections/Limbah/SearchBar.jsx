import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-[#F9F9F9] py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Manfaatkan Limbah mu</h2>
        <input
          type="text"
          placeholder="Mau Daur Apa?"
          className="w-3/4 max-w-md border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
