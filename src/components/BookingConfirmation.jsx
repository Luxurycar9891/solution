import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle } from 'react-icons/fa';

function BookingConfirmation() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center py-20 px-4 sm:px-6">
      <Helmet>
        <title>Booking Confirmed - Shan Enterprises Cool</title>
        <meta
          name="description"
          content="Your booking with Shan Enterprises Cool has been successfully confirmed. We will contact you soon!"
        />
      </Helmet>

      {/* Background particles or soft circles (optional for premium feel) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-green-100 rounded-full top-10 left-10 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-green-200 rounded-full bottom-10 right-10 opacity-20 blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-lg w-full bg-white p-8 sm:p-10 rounded-2xl shadow-xl text-center"
      >
        {/* Animated Checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.2 }}
          className="text-green-500 text-6xl mb-6"
        >
          <FaCheckCircle />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4"
        >
          Booking Confirmed!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-600 text-base sm:text-lg font-light mb-8"
        >
          Thank you for choosing <strong>Shan Enterprises Cool</strong>. Your request has been received. Our team will contact you shortly to finalize the appointment.
        </motion.p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold transition-all duration-300"
        >
          Back to Home
        </motion.a>
      </motion.div>
    </section>
  );
}

export default BookingConfirmation;
