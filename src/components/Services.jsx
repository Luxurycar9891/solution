import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
} from '@mui/material';
import { FaSnowflake, FaIceCream, FaWater, FaBolt, FaTools } from 'react-icons/fa';
import { MdLocalLaundryService } from 'react-icons/md';  // Updated icon import
import { Helmet } from 'react-helmet-async';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      name: 'A/C Repair',
      icon: <FaSnowflake className="text-4xl text-secondary animate-spin-slow" />,
      image: '/service1.jpg',
      shortDesc: 'Comprehensive air conditioning solutions for homes and businesses.',
      fullDesc: (
        <>
          <p>Our A/C repair services include:</p>
          <ul className="list-disc pl-6">
            <li>Coolant refilling and leak detection</li>
            <li>Compressor repair and replacement</li>
            <li>Thermostat calibration and maintenance</li>
            <li>Air filter cleaning and replacement</li>
            <li>24/7 emergency repair services</li>
          </ul>
          <p className="mt-4">We service all major brands, ensuring your A/C runs efficiently year-round.</p>
        </>
      ),
    },
    {
      name: 'Fridge Repair',
      icon: <FaIceCream className="text-4xl text-secondary animate-bounce" />,
      image: 'https://cdn.pixabay.com/photo/2018/11/04/13/29/hospitality-3793946_1280.jpg',
      shortDesc: 'Expert refrigerator repairs to keep your food fresh.',
      fullDesc: (
        <>
          <p>Our fridge repair services cover:</p>
          <ul className="list-disc pl-6">
            <li>Cooling system diagnostics and repair</li>
            <li>Defrost system troubleshooting</li>
            <li>Compressor and motor repairs</li>
            <li>Door seal replacements</li>
            <li>Energy efficiency optimization</li>
          </ul>
          <p className="mt-4">We handle single-door, double-door, and commercial refrigerators with precision.</p>
        </>
      ),
    },
    {
      name: 'Washing Machine Repair',
      icon: <MdLocalLaundryService className="text-4xl text-secondary animate-spin-slow" />, // Fixed icon here
      image: 'https://cdn.pixabay.com/photo/2016/10/31/18/50/washing-machine-1786385_1280.png',
      shortDesc: 'Restore your washing machine to peak performance.',
      fullDesc: (
        <>
          <p>Our washing machine services include:</p>
          <ul className="list-disc pl-6">
            <li>Drum and agitator repairs</li>
            <li>Water pump and drain system fixes</li>
            <li>Electronic control board diagnostics</li>
            <li>Belt and motor replacements</li>
            <li>Leak detection and repair</li>
          </ul>
          <p className="mt-4">We service both front-load and top-load machines for all brands.</p>
        </>
      ),
    },
    {
      name: 'Water Cooler Repair',
      icon: <FaWater className="text-4xl text-secondary animate-bounce" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7rNpVW5iEzXTq59FGkdwS0U4J3wvgB0gHw&s',
      shortDesc: 'Reliable water cooler maintenance for clean, cold water.',
      fullDesc: (
        <>
          <p>Our water cooler services include:</p>
          <ul className="list-disc pl-6">
            <li>Filter replacement and cleaning</li>
            <li>Cooling system repairs</li>
            <li>Water tank sanitization</li>
            <li>Thermostat adjustments</li>
            <li>Leak detection and repair</li>
          </ul>
          <p className="mt-4">Ensure your water cooler delivers safe and refreshing water every time.</p>
        </>
      ),
    },
    {
      name: 'Stabilizer Repair',
      icon: <FaBolt className="text-4xl text-secondary animate-pulse" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcE8cMG-Bd8kXUiPZbQahuYot86eaHANgfQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKsnw4pY49VEpUWmZNO0zGxaCvCznvyQt9Q&s',
      shortDesc: 'Protect your appliances with our stabilizer repair services.',
      fullDesc: (
        <>
          <p>Our stabilizer services include:</p>
          <ul className="list-disc pl-6">
            <li>Voltage regulation diagnostics</li>
            <li>Circuit board repairs</li>
            <li>Overload protection fixes</li>
            <li>Compatibility checks for appliances</li>
            <li>Preventive maintenance</li>
          </ul>
          <p className="mt-4">Keep your appliances safe from power surges with our expert repairs.</p>
        </>
      ),
    },
    {
      name: 'SS Aluminium Services',
      icon: <FaTools className="text-4xl text-secondary animate-spin-slow" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWskG8DCIrcfZ-yqud-SiLT9UpEAewFk_7PA&s',
      shortDesc: 'Custom fabrication and repair for stainless steel and aluminium.',
      fullDesc: (
        <>
          <p>Our SS and aluminium services include:</p>
          <ul className="list-disc pl-6">
            <li>Custom fabrication for railings, gates, and fixtures</li>
            <li>Welding and polishing services</li>
            <li>Corrosion repair and maintenance</li>
            <li>Design consultation for aesthetic appeal</li>
            <li>Durable coating applications</li>
          </ul>
          <p className="mt-4">We deliver high-quality, long-lasting solutions for residential and commercial needs.</p>
        </>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <Helmet>
        <title>Services - Shan Enterprises Cool</title>
        <meta name="description" content="Explore our comprehensive repair services for A/C, Fridge, Washing Machine, Water Cooler, Stabilizer, and SS Aluminium in Mumbai." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary relative"
        >
          Our Premium Services
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-xl overflow-hidden">
                <div className="relative border-4 border-transparent rounded-xl bg-gradient-to-r from-secondary to-accent p-1">
                  <div className="bg-white h-full rounded-lg">
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image}
                      alt={`${service.name} Service`}
                      className="object-cover h-48 w-full"
                      loading="lazy"
                    />
                    <CardHeader
                      title={
                        <div className="flex items-center space-x-3">
                          {service.icon}
                          <Typography variant="h6" className="text-primary font-semibold">
                            {service.name}
                          </Typography>
                        </div>
                      }
                    />
                    <CardContent>
                      <p className="text-gray-600 font-light">{service.shortDesc}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal for full description */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedService(null)}
          >
            <Card
              className="w-full max-w-2xl bg-gradient-to-br from-white to-gray-100 p-8 relative rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <CardHeader
                title={
                  <div className="text-2xl font-bold flex items-center space-x-3 text-primary">
                    {selectedService.icon}
                    <span>{selectedService.name}</span>
                  </div>
                }
              />
              <CardContent>
                <div className="text-gray-700 text-sm">{selectedService.fullDesc}</div>
                <button
                  className="mt-6 bg-accent text-white px-6 py-3 rounded-full hover:bg-green-600 hover:scale-105 transform transition-all duration-300 shadow-md"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Services;
