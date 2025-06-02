import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function CallRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    emailjs
      .send(
        'service_8lh8dup',
        'template_1mlvzr8',
        formData,
        'Q48KG0BI_mnJGYkag'
      )
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          navigate('/booking-confirmation');
        }, 2000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send request. Please try again.');
      });
  };

  return (
    <section
      id="call-request"
      className="py-12 bg-gradient-to-r from-primary to-blue-800 text-white"
    >
      <Helmet>
        <title>Shan Cool Enterprises</title>
        <meta
          name="description"
          content="Request a call back from Shan Cool Enterprises for expert repair services in Noida. Quick and reliable support."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-center mb-6 relative"
        >
          Request a Call Back
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-secondary rounded-full"></span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg"
        >
          {success ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-white"
            >
              <h3 className="text-xl font-semibold mb-2">
                Request Sent Successfully!
              </h3>
              <p>We'll get back to you shortly. Redirecting...</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-sm">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-3 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 bg-white bg-opacity-20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              >
                <option value="" disabled className="text-gray-300">
                  Select a Service
                </option>
                <option value="A/C Repair" className="text-black">
                  A/C Repair
                </option>
                <option value="A/C Rent" className="text-black">
                  A/C For Rent
                </option>
                <option value="Fridge Repair" className="text-black">
                  Fridge Repair
                </option>
                <option value="Washing Machine Repair" className="text-black">
                  Washing Machine Repair
                </option>
                <option value="Water Cooler Repair" className="text-black">
                  Water Cooler Repair
                </option>
                <option value="Stabilizer Repair" className="text-black">
                  Stabilizer Repair
                </option>
                <option value="SS Aluminium Services" className="text-black">
                  SS Aluminium Services
                </option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message (Optional)"
                className="w-full p-3 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary h-24"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-accent text-white p-3 rounded-md hover:bg-green-600 hover:scale-105 transform transition-all duration-300 shadow-sm font-medium"
              >
                Submit Request
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default CallRequestForm;
