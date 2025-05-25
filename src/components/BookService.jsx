import React from 'react';
import { Link } from 'react-router-dom';
import CallRequestForm from './CallRequestForm';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from 'framer-motion';

const BookService = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 60, damping: 15 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-8 md:px-10 lg:px-24"
    >
      {/* Home Link */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg transition duration-300"
        >
          <HomeIcon className="mr-1" />
          Home
        </Link>
      </div>

      {/* Card Container */}
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-6 md:p-10 border border-gray-100 transition-all duration-500">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book a Service Call
        </h2>

        {/* Form Component */}
        <CallRequestForm />
      </div>
    </motion.div>
  );
};

export default BookService;
