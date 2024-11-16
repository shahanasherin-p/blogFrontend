import React from 'react';
import { Link } from 'react-router-dom';

const Pnf = () => {
  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-dark p-8">
      <h1 className="text-8xl font-extrabold">404</h1>
      <h2 className="text-4xl mt-4">Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-400">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link to="/" className="mt-6 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition duration-300">
        Go to Homepage
      </Link>
      <div className="mt-12">
        <img
          src="https://www.scopycode.com/includes/images/blog/404_error_page_not_found.gif"
          alt="pnf"
          className="w-full max-w-xl rounded-lg shadow-md" 
        />
      </div>
    </div>
  );
};

export default Pnf;
