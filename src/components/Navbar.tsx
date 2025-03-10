import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = isHomePage
    ? isScrolled
      ? 'bg-white/90 backdrop-blur-sm shadow-md'
      : 'bg-transparent'
    : 'bg-white/90 backdrop-blur-sm shadow-md';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-8xl mx-auto">
        <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-serif tracking-widest text-black">
              VAULT
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/collections/all" className="text-sm text-black hover:text-blue-400 transition-colors duration-200">
              SEE ALL
            </Link>
            <Link to="/necklaces" className="text-sm text-black hover:text-blue-400 transition-colors duration-200">
              NECKLACES
            </Link>
            <Link to="/bracelets" className="text-sm text-black hover:text-blue-400 transition-colors duration-200">
              BRACELETS
            </Link>
            <Link to="/rings" className="text-sm text-black hover:text-blue-400 transition-colors duration-200">
              RINGS
            </Link>
            <Link to="/watches" className="text-sm text-black hover:text-blue-400 transition-colors duration-200">
              WATCHES
            </Link>
            <Link to="/gifts" className="text-sm text-black hover:text-blue-400 transition-colors duration-200">
              GIFTS
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-black hover:text-blue-400 transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="p-2 text-black hover:text-blue-400 transition-colors duration-200">
              <User size={20} />
            </button>
            <button className="p-2 text-black hover:text-blue-400 transition-colors duration-200">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${navBackground}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/collections/all" className="block px-3 py-2 text-base text-black hover:text-blue-400 transition-colors duration-200">
            SEE ALL
          </Link>
          <Link to="/necklaces" className="block px-3 py-2 text-base text-black hover:text-blue-400 transition-colors duration-200">
            NECKLACES
          </Link>
          <Link to="/bracelets" className="block px-3 py-2 text-base text-black hover:text-blue-400 transition-colors duration-200">
            BRACELETS
          </Link>
          <Link to="/rings" className="block px-3 py-2 text-base text-black hover:text-blue-400 transition-colors duration-200">
            RINGS
          </Link>
          <Link to="/watches" className="block px-3 py-2 text-base text-black hover:text-blue-400 transition-colors duration-200">
            WATCHES
          </Link>
          <Link to="/gifts" className="block px-3 py-2 text-base text-black hover:text-blue-400 transition-colors duration-200">
            GIFTS
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;