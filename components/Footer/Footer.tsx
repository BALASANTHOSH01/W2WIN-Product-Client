'use client'

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-woodColor text-white py-8">
      <div className="container mx-auto px-[10%] md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-row md:flex-col justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0 md:w-3/3">
            <h2 className="text-2xl font-bold">We2Win</h2>
            <p className="text-gray-400">6th St, Vinayagapuram, Coimbatore, Tamil Nadu 641035</p>
            <p className="text-gray-400">Phone: 9659608491, 9952839684</p>
            <p className="text-gray-400">Email: contact@we2win.com</p>
          </div>
          <div className="flex flex-col  md:flex-row justify-between items-start md:items-start md:my-[4%] md:w-3/3">
            <div className="flex flex-col md:flex-row md:mr-8 mb-6 md:mb-0 text-white">
              <Link href="/" legacyBehavior>
                <a className=" hover:text-gray-200 hover:opacity-30 mb-2 md:mb-0 md:mr-6">Home</a>
              </Link>
              <Link href="/Products" legacyBehavior>
                <a className=" hover:text-gray-200 hover:opacity-30 mb-2 md:mb-0 md:mr-6">Products</a>
              </Link>
              <Link href="/About" legacyBehavior>
                <a className=" hover:text-gray-200 hover:opacity-30 mb-2 md:mb-0 md:mr-6">About</a>
              </Link>
              <Link href="/Contact" legacyBehavior>
                <a className=" hover:text-gray-200 hover:opacity-30">Contact</a>
              </Link>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-gray-400">
          <p>&copy; {new Date().getFullYear()} We2Win. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
