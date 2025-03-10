import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h1 className="text-2xl font-serif tracking-wider text-white">VAULT</h1>
            <p className="mt-4 text-gray-300 text-sm">
              Exquisite jewelry crafted with passion and precision, designed to celebrate life's most precious moments.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">All Jewelry</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Rings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Necklaces</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Earrings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Bracelets</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Our Craftsmen</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Sustainability</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-300 text-sm">
                <Mail size={16} className="mr-2" />
                info@vault-official.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} VAULT. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Shipping & Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;