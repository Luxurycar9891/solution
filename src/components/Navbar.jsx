import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton } from '@mui/material';
import logo from '../../public/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const navLinks = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },
    { name: 'Services', to: '/services', icon: <BuildIcon /> },
    { name: 'About', to: '/about', icon: <InfoIcon /> },
    { name: 'Call Request', to: '/call-request', icon: <PhoneIcon /> },
  ];

  // Close menu on outside click/touch
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-900 shadow-xl fixed w-full z-[2000] top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex-shrink-0">
            <Link to="/" aria-label="Shan Enterprises Logo">
              <img 
                src={logo} 
                alt="Shan Enterprises Logo" 
                className="h-10 w-auto rounded-full border-2 border-white/20 sm:h-12"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4 items-center font-semibold text-white">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-white/10 hover:text-blue-300 transition-all duration-300 text-sm md:text-base"
                aria-label={link.name}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <IconButton onClick={toggleMenu} aria-label="Toggle menu" className="!text-white">
              {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        ref={menuRef}
        className={`md:hidden overflow-hidden bg-gradient-to-b from-blue-900 to-indigo-900 shadow-lg ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 hover:text-blue-300 transition-all duration-300 text-base font-medium"
              aria-label={link.name}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;