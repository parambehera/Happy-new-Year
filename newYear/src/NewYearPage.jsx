import React from "react";
const NewYearPage = () => {
  return (
    <div className="h-screen  bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center text-white relative">
      <h1 className="text-6xl font-extrabold drop-shadow-lg mb-6">🎆 Welcome 2025! 🎇</h1>
      <p className="text-2xl font-medium text-center max-w-2xl drop-shadow-md">
        May this year bring you peace, prosperity, and endless happiness. Cheers to new beginnings! 🥂❤️
      </p>
      <div className="mt-10">
        <button
          className="px-8 py-4 bg-gray-700 text-white font-bold text-lg rounded-full shadow-lg hover:bg-gray-600 transition duration-300"
          onClick={() => alert("Cheers to 2025! 🎆")}
        >
          Celebrate Together
        </button>
      </div>

      {/* Add complex celebration visuals */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 bg-gradient-to-tr from-purple-800 to-purple-500 rounded-full top-10 left-10 animate-pulse shadow-xl"></div>
        <div className="absolute w-24 h-24 border-4 border-dotted border-red-600 rounded-full top-20 right-20 animate-spin-slow"></div>
        <div className="absolute w-48 h-48 bg-gradient-to-br from-indigo-900 to-indigo-600 rounded-full bottom-20 left-1/4 animate-bounce shadow-2xl"></div>
        <div className="absolute w-36 h-36 border-8 border-solid border-yellow-400 rounded-full bottom-10 right-1/4 animate-pulse shadow-lg"></div>
        <div className="absolute w-16 h-16 bg-gradient-to-b from-blue-800 to-blue-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping shadow-lg"></div>
      </div>
    </div>
  );
};

export default NewYearPage;
