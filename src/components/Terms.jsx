import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

function Terms() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Helmet>
        <title>Terms of Service - Shan Cool Enterprises</title>
        <meta name="description" content="Read the terms of service for Shan Cool's Enterprises appliance repair services in Noida." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary relative"
        >
          Terms of Service
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
          <p className="text-gray-600 font-light mb-6">
            Welcome to Shan Cool Enterprises. By using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-primary">2. Services</h2>
          <p className="text-gray-600 font-light mb-6">
            We provide repair and maintenance services for A/C, Fridge, Washing Machine, Water Cooler, Stabilizer, and SS Aluminium. All services are subject to availability.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-primary">3. Payment</h2>
          <p className="text-gray-600 font-light mb-6">
            Payment is due upon completion of services. We accept cash, card, and online payments. Prices are subject to change without notice.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-primary">4. Contact Us</h2>
          <p className="text-gray-600 font-light">
            If you have any questions about these Terms, please contact us at Khanmurtaza524@gmail.com or +91 7037918018.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Terms;