import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>
            <a href="tel:+1234567890" className="hover:underline hover:text-gray-300 transition duration-300 ease-in-out">Phone: +123-456-7890</a>
            <br />
            <a href="mailto:info@example.com" className="hover:underline hover:text-gray-300 transition duration-300 ease-in-out">Email: info@example.com</a>
          </p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Pages</h3>
          <ul>
            <li><a href="/" className="hover:underline hover:text-gray-300 transition duration-300 ease-in-out">Home</a></li>
            <li><a href="/about" className="hover:underline hover:text-gray-300 transition duration-300 ease-in-out">About Us</a></li>
            <li><a href="/blog" className="hover:underline hover:text-gray-300 transition duration-300 ease-in-out">Blog</a></li>
            <li><a href="/contact" className="hover:underline hover:text-gray-300 transition duration-300 ease-in-out">Contact Us</a></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Address</h3>
          <p>
            123 Main Street
            <br />
            Anytown, CA 12345
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110">
                <i className="fa-brands fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-400 text-sm">
        &copy;  Mindful Musings. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
