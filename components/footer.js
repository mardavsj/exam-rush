import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import footer from '../public/footerbg.png';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="absolute bottom-0 w-full">
        <Image src={footer} alt="footer background" className="mx-auto"/>
      </div>
      <div className="relative">
        <div className="container mx-auto py-36">
          <div className="flex flex-wrap">
            <div className="w-1/4 px-4">
              <div className="wow fadeInLeft" data-wow-delay="0.2s">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <form action="#" onSubmit="">
                  <input type="text" name="EMAIL" className="form-control memail w-full py-2 px-4 mb-4 border border-gray-300 rounded" placeholder="Email" />
                  <button className=" w-full py-2 px-4 bg-gradient-to-tr from-purple-950 via-purple-700 to-purple-500 text-white rounded hover:bg-gradient-to-tl " type="submit">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="w-1/4 px-4">
              <div className="wow fadeInLeft" data-wow-delay="0.4s">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Trending</h3>
                <ul className="list-none space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-purple-600">Function 1</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600">Function 2</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600">Function 3</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600">Function 4</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600">Function 5</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600">Function 6</a></li>
                </ul>
              </div>
            </div>
            <div className="w-1/4 px-4">
              <div className="wow fadeInLeft" data-wow-delay="0.6s">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Help</h3>
                <ul className="list-none space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-purple-600">FAQ</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600">Terms & Conditions</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600">Reporting</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600">Documentation</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600">Support Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600">Privacy</a></li>
                </ul>
              </div>
            </div>
            <div className="w-1/4 px-4">
              <div className="wow fadeInLeft">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Follow us at :</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-xl w-11 h-11 flex items-center justify-center bg-gray-200 text-gray-600 hover:bg-gradient-to-tr from-purple-950 via-purple-700 to-purple-500 hover:text-white rounded-full"><FaLinkedin/></a>
                  <a href="#" className="text-xl w-11 h-11 flex items-center justify-center bg-gray-200 text-gray-600 hover:bg-gradient-to-tr from-purple-950 via-purple-700 to-purple-500 hover:text-white rounded-full"><FaInstagram/></a>
                  <a href="#" className="text-xl w-11 h-11 flex items-center justify-center bg-gray-200 text-gray-600 hover:bg-gradient-to-tr from-purple-950 via-purple-700 to-purple-500 hover:text-white rounded-full"><FaGithub/></a>
                  <a href="#" className="text-xl w-11 h-11 flex items-center justify-center bg-gray-200 text-gray-600 hover:bg-gradient-to-tr from-purple-950 via-purple-700 to-purple-500 hover:text-white rounded-full"><FaSquareXTwitter/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-purple-950 via-purple-700 to-purple-500 py-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="w-1/2 text-white text-sm">
            © ExamRush 2024 All rights reserved.
          </div>
          <div className="w-1/2 text-right text-white text-sm">
            Made with <span>🤍</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
