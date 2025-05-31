import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import CallRequestForm from './CallRequestForm';

function Contact() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const istTime = currentTime.toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return (
    <section className="py-5 bg-gradient-to-br from-white via-gray-100 to-white">
      <Helmet>
        <title>Contact Us - Shan Cool Enterprises</title>
        <meta
          name="description"
          content="Contact Shan Cool Enterprises in Noida Sector-58 for premium appliance services. Call, Email, or WhatsApp us today."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center text-primary mb-16 relative"
        >
          Let's Connect
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12px] w-28 h-1 bg-gradient-to-r from-[#06b6d4] to-[#9333ea] rounded-full"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-200"
          >
            <h3 className="text-3xl font-semibold text-primary mb-6">
              Get in Touch
            </h3>

            <div className="space-y-5 text-gray-700 text-lg">
              <p className="flex items-center">
                <FaPhone className="mr-3 text-secondary" />
                <a
                  href="tel:+917037918018"
                  className="hover:text-accent font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  +91 7037918018
                </a>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-3 text-secondary" />
                <a
                  href="mailto:Khanmurtaza524@gmail.com"
                  className="hover:text-accent font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  Khanmurtaza524@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <FaWhatsapp className="mr-3 text-green-500 animate-bounce" />
                <a
                  href="https://wa.me/917037918018"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  WhatsApp Us
                </a>
              </p>
              <p className="flex items-center">
                <FaClock className="mr-3 text-secondary animate-pulse" />
                {istTime}
              </p>
              <p className="flex items-start">
                <FaMapMarkerAlt className="mr-3 text-red-500" />
                <span>
                  <strong className="block">Head Office</strong>
                  K-19, Main Road, Bishanpura,
                  <br />
                  Sector-58, Noida, UP 201301, India
                </span>
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden mt-6 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7015.253781194246!2d77.363041!3d28.610099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce537c41765c3%3A0x91bc4d015c92e501!2sBishanpura%2C%20Sector%2058%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1716453375888"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Noida Office Location"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-1 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h3 className="text-3xl font-semibold mb-6 text-center text-primary">
              Send a Message
            </h3>
            <CallRequestForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;