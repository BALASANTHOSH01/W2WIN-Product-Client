'use client'

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-woodColor text-white py-12">
      <div className="container mx-auto px-[10%] md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Company Info */}
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-4">We2Win</h2>
            <p className="text-gray-400 mb-2">6th St, Vinayagapuram, Coimbatore, Tamil Nadu 641035</p>
            <p className="text-gray-400 mb-2">Phone: 9659608491, 9952839684</p>
            <p className="text-gray-400">Email: contact@we2win.com</p>
          </div>
          {/* Navigation Links */}
          <div className="md:w-1/3 flex flex-col md:flex-row md:justify-center md:items-center">
            <div className="flex flex-col md:mr-8 text-white">
              <Link href="/" legacyBehavior>
                <a className="hover:text-gray-200 hover:opacity-75 mb-2 md:mb-4">Home</a>
              </Link>
              <Link href="/Products" legacyBehavior>
                <a className="hover:text-gray-200 hover:opacity-75 mb-2 md:mb-4">Products</a>
              </Link>
              <Link href="/About" legacyBehavior>
                <a className="hover:text-gray-200 hover:opacity-75 mb-2 md:mb-4">About</a>
              </Link>
              <Link href="/Contact" legacyBehavior>
                <a className="hover:text-gray-200 hover:opacity-75">Contact</a>
              </Link>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="md:w-1/3 flex justify-start md:justify-end space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-400">
          <p>&copy; {new Date().getFullYear()} We2Win. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
