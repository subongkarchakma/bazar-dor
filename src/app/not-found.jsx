import Link from "next/link";
import React from "react";

import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
return ( <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"> <div className="text-center max-w-2xl mx-auto">
{/* Error Code */} <h1 className="text-8xl md:text-9xl font-extrabold text-gray-900 tracking-wider">
404 </h1>

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-6">
      Page Not Found
    </h2>

    {/* Description */}
    <p className="text-gray-500 text-base md:text-lg mt-4 leading-relaxed">
      Oops! Page not found
    </p>

    {/* Return Home Button */}
    <Link href={'/'}
      className="inline-flex items-center gap-3 mt-8 px-8 py-4
      bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold
      rounded-full transition-all duration-300 hover:scale-105
      shadow-md"
    >
      <FaHome className="text-xl" />
      Return to Home
    </Link>
  </div>
</div>


);
};

export default NotFoundPage;
