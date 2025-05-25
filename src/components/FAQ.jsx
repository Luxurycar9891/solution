import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of appliances do you repair?',
      answer: 'We repair A/C, Fridge, Washing Machine, Water Cooler, Stabilizer, and provide SS Aluminium services.',
    },
    {
      question: 'Do you offer emergency repair services?',
      answer: 'Yes, we provide 24/7 emergency repair services for all appliances. Contact us anytime!',
    },
    {
      question: 'How long does a typical repair take?',
      answer: 'Most repairs are completed within a few hours, depending on the issue. We aim for same-day service.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <Helmet>
        <title>FAQ - Shan Enterprises Cool</title>
        <meta name="description" content="Find answers to common questions about Shan Enterprises Cool's appliance repair services in Mumbai." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary relative"
        >
          Frequently Asked Questions
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
        </motion.h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full p-4 text-left text-primary font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <span>{faq.question}</span>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 pt-0 text-gray-600 font-light"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;