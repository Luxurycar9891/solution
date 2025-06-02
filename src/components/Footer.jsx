import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTools, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 text-white py-12 px-4 overflow-hidden">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shan Cool Enterprises",
            "url": "https://www.acrepairing.in",
            "logo": "/logo.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+917037918018",
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
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm"
      >
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2 text-blue-300">
            <FaTools className="text-blue-400 animate-pulse" />
            Shan Cool Enterprises
          </h3>
          <p className="text-gray-300 text-sm">
            Trusted repair experts since 2015. Premium AC & Appliance repair services in Noida.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-3 text-gray-300">
            <li><Link to="/" className="hover:text-blue-300 duration-300" onClick={(e) => e.stopPropagation()}>Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-300 duration-300" onClick={(e) => e.stopPropagation()}>Services</Link></li>
            <li><Link to="/about" className="hover:text-blue-300 duration-300" onClick={(e) => e.stopPropagation()}>About</Link></li>
            <li><Link to="/call-request" className="hover:text-blue-300 duration-300" onClick={(e) => e.stopPropagation()}>Call Request</Link></li>
            <li><Link to="/terms" className="hover:text-blue-300 duration-300" onClick={(e) => e.stopPropagation()}>Terms</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Contact Info</h4>
          <p className="flex items-center text-gray-300 gap-2">
            <FaPhone className="text-blue-400" />
            <a href="tel:+917037918018" className="hover:text-blue-300">+91 7037918018</a>
          </p>
          <p className="flex items-center text-gray-300 gap-2">
            <FaPhone className="text-blue-400" />
            <a href="tel:+919761444411" className="hover:text-blue-300">+91 9761444411</a>
          </p>
          
          <p className="flex items-center text-gray-300 gap-2">
            <FaEnvelope className="text-blue-400" />
            <a href="mailto:Khanmurtaza524@gmail.com" className="hover:text-blue-300">
             Khanmurtaza524@gmail.com</a>
          </p>
          <p className="flex items-center text-gray-300 gap-2">
            <FaWhatsapp className="text-green-400 animate-bounce" />
            <a href="https://wa.me/917037918018" target="_blank" rel="noreferrer" className="hover:text-blue-300">
              WhatsApp Us
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Address</h4>
          <p className="flex gap-2 text-gray-300 items-start text-sm">
            <FaMapMarkerAlt className="text-red-400 mt-1" />
            K-19, Main Road, Bishanpura, Sector-58, Noida, UP 201301, India
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8 text-center text-xs text-gray-400"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <span>© {currentYear} Shan Cool Enterprises. All rights reserved.</span>
          <span className="flex items-center gap-1">
            <FaUserTie className="text-blue-400" />
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