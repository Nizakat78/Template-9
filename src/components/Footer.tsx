import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="text-white py-8"
      style={{
        backgroundImage: `url('/Footbg.svg')`,
        backgroundSize: 'auto',
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subscribe Section */}
      <div className="text-white py-8 px-4 border-b-2 border-yellow-600 bg-black/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              <span className="text-orange-500">St</span>ill You Need Our Support?
            </h2>
            <p className="text-gray-400 mt-2">
              Don’t wait, make a smart & logical choice here. It’s pretty easy.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 text-black bg-orange-500 border border-orange-500 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring focus:ring-orange-300 w-full sm:w-64"
            />
            <button className="p-3 bg-purple-600 text-white hover:bg-purple-700 rounded-md sm:rounded-r-md sm:rounded-l-none w-full sm:w-auto">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 bg-black/60">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-sm text-gray-400 mb-4">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
          </p>
          <div className="flex items-center gap-2">
            <div className="bg-yellow-500 text-black p-2 rounded-full">🕒</div>
            <div>
              <p className="text-sm">Opening Hours:</p>
              <p className="text-sm">Mon - Sat: 8.00 - 6.00</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Useful Links</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-yellow-500">About</a></li>
            <li><a href="#" className="hover:text-yellow-500">News</a></li>
            <li><a href="#" className="hover:text-yellow-500">Partners</a></li>
            <li><a href="#" className="hover:text-yellow-500">Team</a></li>
            <li><a href="#" className="hover:text-yellow-500">Menu</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contacts</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Help?</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-yellow-500">FAQ</a></li>
            <li><a href="#" className="hover:text-yellow-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-500">Reporting</a></li>
            <li><a href="#" className="hover:text-yellow-500">Documentation</a></li>
            <li><a href="#" className="hover:text-yellow-500">Support Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Privacy</a></li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Recent Post</h2>
          <ul className="text-sm text-gray-400 space-y-4">
            {/* Post 1 */}
            <li className="flex gap-2 items-center">
              <div className="w-16 h-16 bg-gray-700 rounded-md overflow-hidden">
                <Link href="/post1">
                  <img
                    src="/RecentPost.svg"
                    alt="Post 1"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div>
                <p className="font-bold">20 Feb 2022</p>
                <p>Keep Your Business Secure</p>
              </div>
            </li>
            {/* Post 2 */}
            <li className="flex gap-2 items-center">
              <div className="w-16 h-16 bg-gray-700 rounded-md overflow-hidden">
                <Link href="/post2">
                  <img
                    src="/RecentPost.svg"
                    alt="Post 2"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div>
                <p className="font-bold">25 Feb 2022</p>
                <p>Improving Your Skills</p>
              </div>
            </li>
            {/* Post 3 */}
            <li className="flex gap-2 items-center">
              <div className="w-16 h-16 bg-gray-700 rounded-md overflow-hidden">
                <Link href="/post3">
                  <img
                    src="/RecentPost.svg"
                    alt="Post 3"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div>
                <p className="font-bold">1 Mar 2022</p>
                <p>Maximize Your Potential</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400 bg-black/60">
        <p>Copyright © 2024 by Nizakat Ali. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-yellow-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-yellow-500"><FaTwitter /></a>
          <a href="#" className="hover:text-yellow-500"><CiInstagram /></a>
          <a href="#" className="hover:text-yellow-500"><CiYoutube /></a>
          <a href="#" className="hover:text-yellow-500"><FaPinterestP /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;