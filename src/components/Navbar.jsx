import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import HelpIcon from '@mui/icons-material/Help';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { IconButton } from '@mui/material';
import logo from '../../public/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Lock body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', id: 'home', icon: <HomeIcon /> },
    { name: 'Services', id: 'services', icon: <BuildIcon /> },
    { name: 'About', id: 'about', icon: <InfoIcon /> },
    { name: 'Reviews', id: 'testimonials', icon: <StarIcon /> },
    { name: 'FAQ', id: 'faq', icon: <HelpIcon /> },
    { name: 'Call Request', id: 'call-request', icon: <PhoneIcon /> },
    { name: 'Contact', id: 'contact', icon: <ContactMailIcon /> },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust if your navbar height changes
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleScroll('home')}
            aria-label="Shan Enterprises Cool Logo"
          >
            <img src={logo} alt="Shan Enterprises Cool Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-semibold text-gray-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300 text-lg"
                aria-label={link.name}
              >
                {link.icon}
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <IconButton onClick={toggleMenu} color="inherit" aria-label="Toggle menu">
              {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-white shadow-lg border-t border-gray-200"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300 text-base font-medium"
              aria-label={link.name}
            >
              {link.icon}
              {link.name}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
