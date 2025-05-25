// src/components/Footer.jsx

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTools, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-16 px-4 overflow-hidden">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shan Enterprises Cool",
            "url": "https://www.shanenterprisescool.com",
            "logo": "/logo.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+918287656331",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            ]
          })}
        </script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm md:text-base"
      >
        {/* Logo + About */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold flex items-center gap-2 text-accent">
            <FaTools className="text-secondary animate-pulse" />
            Shan Enterprises Cool
          </h3>
          <p className="text-gray-300">
            Trusted repair experts since 2015. Premium AC & Appliance repair services in Noida.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-secondary duration-300">Home</Link></li>
            <li><Link to="/#services" className="hover:text-secondary duration-300">Services</Link></li>
            <li><Link to="/#about" className="hover:text-secondary duration-300">About</Link></li>
            <li><Link to="/#contact" className="hover:text-secondary duration-300">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-secondary duration-300">Terms</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Contact Info</h4>
          <p className="flex items-center text-gray-300 gap-2">
            <FaPhone className="text-secondary" />
            <a href="tel:+918287656331" className="hover:text-secondary">+91 82876 56331</a>
          </p>
          <p className="flex items-center text-gray-300 gap-2">
            <FaEnvelope className="text-secondary" />
            <a href="mailto:shanenterprisescool@gmail.com" className="hover:text-secondary">
              shanenterprisescool@gmail.com
            </a>
          </p>
          <p className="flex items-center text-gray-300 gap-2">
            <FaWhatsapp className="text-green-400 animate-bounce" />
            <a href="https://wa.me/918287656331" target="_blank" rel="noreferrer" className="hover:text-secondary">
              WhatsApp Us
            </a>
          </p>
        </div>

        {/* Address */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Address</h4>
          <p className="flex gap-2 text-gray-300 items-start">
            <FaMapMarkerAlt className="text-red-400 mt-1" />
            B-102, Sector 62,<br />
            Noida, Uttar Pradesh 201301,<br />
            India
          </p>
        </div>
      </motion.div>

      {/* Developer Credit */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10 text-center text-sm text-gray-400"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <span>© {currentYear} Shan Enterprises Cool. All rights reserved.</span>
          <span className="flex items-center gap-1">
            <FaUserTie className="text-secondary" />
            Developed by
            <span className="text-white font-semibold ml-1">Sheikh Akhlaque</span> —
            <a href="tel:+917352460579" className="text-blue-400 hover:underline ml-1">+91 73524 60579</a>
          </span>
        </div>
        <p className="text-xs mt-1 italic text-gray-500">
          (For development inquiries only. Please call, no messages.)
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
