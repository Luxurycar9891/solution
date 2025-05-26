import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaUsers, FaTools, FaStar } from 'react-icons/fa';

function About() {
  const stats = [
    { icon: <FaUsers />, value: '500+', label: 'Happy Clients' },
    { icon: <FaTools />, value: '5+', label: 'Years Experience' },
    { icon: <FaStar />, value: '4.9/5', label: 'Client Rating' },
  ];

  return (
    <section  className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
      <Helmet>
        <title>About Us - Shan Enterprises Cool</title>
        <meta name="description" content="Learn more about Shan Enterprises Cool, Noida's leading appliance repair and maintenance service provider with over a decade of experience." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 relative">
            About Us
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-secondary rounded-full"></span>
          </h2>
          <p className="text-lg font-light max-w-3xl mx-auto mb-12">
            Shan Enterprises Cool has been a trusted name in Noida for over a decade, providing top-notch repair and maintenance services for A/C, Fridge, Washing Machine, Water Cooler, Stabilizer, and SS Aluminium. Our mission is to deliver excellence with every service, ensuring your appliances run smoothly.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl text-secondary mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg font-light">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;