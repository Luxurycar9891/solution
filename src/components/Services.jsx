import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  Button,
  IconButton,
  CircularProgress,
} from '@mui/material';
import {
  FaSnowflake,
  FaIceCream,
  FaWater,
  FaBolt,
  FaTools,
  FaFan,
  FaCheckCircle,
  FaTimes,
} from 'react-icons/fa';
import { MdLocalLaundryService } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
    rentalDuration: '',
  });
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Escape key to close modal and form
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
        setShowBookingForm(null);
        setSuccess(false);
        setIsLoading(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const services = [
    {
      name: 'A/C Repair',
      icon: <FaSnowflake className="text-4xl text-blue-600 animate-spin-slow" />,
      image: '/service1.jpg',
      shortDesc: 'Comprehensive air conditioning solutions for homes and businesses.',
      fullDesc: (
        <>
          <p className="text-gray-700">Our A/C repair services include:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Coolant refilling and leak detection</li>
            <li>Compressor repair and replacement</li>
            <li>Thermostat calibration and maintenance</li>
            <li>Air filter cleaning and replacement</li>
            <li>24/7 emergency repair services</li>
          </ul>
          <p className="mt-4 text-gray-700">
            We service all major brands, ensuring your A/C runs efficiently year-round.
          </p>
        </>
      ),
    },
    {
      name: 'AC for Rent',
      icon: <FaFan className="text-4xl text-blue-600 animate-spin-slow" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROT-4i6urgV1u4HexUUfGoTIZQWR_gQ1pUew&s',
      shortDesc: 'Rent high-quality AC units for 1 or 2 seasons with easy removal post-rental.',
      fullDesc: (
        <>
          <p className="text-gray-700">Our AC rental services include:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Flexible rental plans for 1 or 2 seasons</li>
            <li>High-efficiency AC units for homes and offices</li>
            <li>Professional installation and setup</li>
            <li>Maintenance support during rental period</li>
            <li>Hassle-free removal after rental term</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Rent an AC for seasonal cooling needs and enjoy comfort without the commitment of ownership.
          </p>
        </>
      ),
    },
    {
      name: 'Fridge Repair',
      icon: <FaIceCream className="text-4xl text-blue-600 animate-bounce" />,
      image: 'https://cdn.pixabay.com/photo/2018/11/04/13/29/hospitality-3793946_1280.jpg',
      shortDesc: 'Expert refrigerator repairs to keep your food fresh.',
      fullDesc: (
        <>
          <p className="text-gray-700">Our fridge repair services cover:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Cooling system diagnostics and repair</li>
            <li>Defrost system troubleshooting</li>
            <li>Compressor and motor repairs</li>
            <li>Door seal replacements</li>
            <li>Energy efficiency optimization</li>
          </ul>
          <p className="mt-4 text-gray-700">
            We handle single-door, double-door, and commercial refrigerators with precision.
          </p>
        </>
      ),
    },
    {
      name: 'Washing Machine Repair',
      icon: <MdLocalLaundryService className="text-4xl text-blue-600 animate-spin-slow" />,
      image: 'https://cdn.pixabay.com/photo/2016/10/31/18/50/washing-machine-1786385_1280.png',
      shortDesc: 'Restore your washing machine to peak performance.',
      fullDesc: (
        <>
          <p className="text-gray-700">Our washing machine services include:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Drum and agitator repairs</li>
            <li>Water pump and drain system fixes</li>
            <li>Electronic control board diagnostics</li>
            <li>Belt and motor replacements</li>
            <li>Leak detection and repair</li>
          </ul>
          <p className="mt-4 text-gray-700">
            We service both front-load and top-load machines for all brands.
          </p>
        </>
      ),
    },
    {
      name: 'Water Cooler Repair',
      icon: <FaWater className="text-4xl text-blue-600 animate-bounce" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7rNpVW5iEzXTq59FGkdwS0U4J3wvgB0gHw&s',
      shortDesc: 'Reliable water cooler maintenance for clean, cold water.',
      fullDesc: (
        <>
          <p className="text-gray-700">Our water cooler services include:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Filter replacement and cleaning</li>
            <li>Cooling system repairs</li>
            <li>Water tank sanitization</li>
            <li>Thermostat adjustments</li>
            <li>Leak detection and repair</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Ensure your water cooler delivers safe and refreshing water every time.
          </p>
        </>
      ),
    },
    {
      name: 'Stabilizer Repair',
      icon: <FaBolt className="text-4xl text-blue-600 animate-pulse" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcE8cMG-Bd8kXUiPZbQahuYot86eaHANgfQ&s',
      shortDesc: 'Protect your appliances with our stabilizer repair services.',
      fullDesc: (
        <>
          <p className="text-gray-700">Our stabilizer services include:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Voltage regulation diagnostics</li>
            <li>Circuit board repairs</li>
            <li>Overload protection fixes</li>
            <li>Compatibility checks for appliances</li>
            <li>Preventive maintenance</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Keep your appliances safe from power surges with our expert repairs.
          </p>
        </>
      ),
    },
    {
      name: 'SS Aluminium Services',
      icon: <FaTools className="text-4xl text-blue-600 animate-spin-slow" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PdEDOwd-Nl__gRqcgZ6j6wglYsosME13qg&s',
      shortDesc: 'Custom fabrication and repair for stainless steel and aluminium.',
      fullDesc: (
        <>
          <p className="text-gray-700">Our SS and aluminium services include:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Custom fabrication for railings, gates, and fixtures</li>
            <li>Welding and polishing services</li>
            <li>Corrosion repair and maintenance</li>
            <li>Design consultation for aesthetic appeal</li>
            <li>Durable coating applications</li>
          </ul>
          <p className="mt-4 text-gray-700">
            We deliver high-quality, long-lasting solutions for residential and commercial needs.
          </p>
        </>
      ),
    },
  ];

  const handleBookingClick = (service, e) => {
    e.stopPropagation();
    setShowBookingForm(service);
    setFormData({ ...formData, service: service.name });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    // Send confirmation email to user
    emailjs
      .send(
        'service_swafjlr',
        'template_oz8lchn',
        {
          ...formData,
          time: timestamp,
          to_email: formData.email,
          reply_to: 'Khanmurtaza524@gmail.com',
        },
        'CJNjKQhYc5XHcsVkM'
      )
      .then(() => {
        // Send notification email to admin
        emailjs
          .send(
            'service_swafjlr',
            'template_yvhuyje',
            {
              ...formData,
              time: timestamp,
              to_email: 'Khanmurtaza524@gmail.com',
              reply_to: formData.email,
            },
            'CJNjKQhYc5XHcsVkM'
          )
          .then(() => {
            setIsLoading(false);
            setSuccess(true);
          })
          .catch((error) => {
            console.error('Admin EmailJS Error:', error);
            setIsLoading(false);
            alert('Failed to notify admin. User confirmation sent.');
            setSuccess(true);
          });
      })
      .catch((error) => {
        console.error('User EmailJS Error:', error);
        setIsLoading(false);
        alert('Failed to send confirmation. Please try again.');
      });
  };

  const handleCloseSuccess = () => {
    setSuccess(false);
    setShowBookingForm(null);
    setIsLoading(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      service: '',
      message: '',
      rentalDuration: '',
    });
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
      <Helmet>
        <title>Services - Shan Cool Enterprises</title>
        <meta
          name="description"
          content="Explore our premium repair and rental services for A/C, Fridge, Washing Machine, Water Cooler, Stabilizer, SS Aluminium, and AC Rental in Noida."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl font-extrabold text-center text-blue-900 mb-12 relative"
        >
          Our Premium Services
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"
          />
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
              className="cursor-pointer"
            >
              <Card className="h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-100">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={service.image}
                    alt={`${service.name} Service`}
                    className="object-cover h-48 w-full rounded-t-xl"
                    loading="lazy"
                  />
                </motion.div>
                <CardHeader
                  title={
                    <div className="flex items-center gap-3">
                      {service.icon}
                      <Typography variant="h6" className="text-blue-900 font-semibold">
                        {service.name}
                      </Typography>
                    </div>
                  }
                />
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.shortDesc}</p>
                  <div className="mt-4 flex gap-2 justify-around">
                    <Button
                      variant="contained"
                      className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 transition-all duration-200"
                      onClick={(e) => handleBookingClick(service, e)}
                    >
                      Book Now
                    </Button>
                    <Button
                      variant="outlined"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                    >
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedService && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0  bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedService(null)}
          >
            <Card
              className="w-full  max-w-2xl bg-white rounded-2xl shadow-2xl p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <IconButton
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={() => setSelectedService(null)}
              >
                <FaTimes />
              </IconButton>
              <CardHeader
                title={
                  <div className="flex items-center gap-3 text-2xl font-bold text-blue-900">
                    {selectedService.icon}
                    <span>{selectedService.name}</span>
                  </div>
                }
              />
              <CardContent>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-700"
                >
                  {selectedService.fullDesc}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {showBookingForm && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => {
              setShowBookingForm(null);
              setSuccess(false);
              setIsLoading(false);
            }}
          >
            <Card
              className="w-full max-w-2xl lg:max-w-[480px] bg-white rounded-2xl shadow-2xl p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <IconButton
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={() => {
                  setShowBookingForm(null);
                  setSuccess(false);
                  setIsLoading(false);
                }}
              >
                <FaTimes />
              </IconButton>
              <CardHeader
                title={
                  <div className="flex items-center gap-3 text-2xl font-bold text-blue-900">
                    {showBookingForm.icon}
                    <span>Book {showBookingForm.name}</span>
                  </div>
                }
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={showBookingForm.image}
                  alt={`${showBookingForm.name} Service`}
                  className="object-cover h-36 w-full rounded-xl mb-4 shadow-sm"
                  loading="lazy"
                />
              </motion.div>
              <CardContent>
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                      className="flex flex-col items-center justify-center h-64"
                    >
                      <CircularProgress
                        size={60}
                        className="text-blue-600"
                      />
                      <p className="mt-4 text-gray-600 font-medium">
                        Processing your booking...
                      </p>
                    </motion.div>
                  ) : success ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="text-center relative overflow-hidden"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 opacity-50 rounded-xl"
                      />
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <FaCheckCircle className="text-6xl text-green-600 mx-auto mb-4 animate-bounce" />
                        <h3 className="text-2xl font-bold text-blue-900 mb-2 drop-shadow-sm">
                          Booking Confirmed!
                        </h3>
                        <p className="text-gray-600 mb-6 text-sm">
                          Thank you for choosing Shan Cool Enterprises. Our team will reach out to you shortly.
                        </p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="bg-white p-4 rounded-xl shadow-md border border-blue-100 text-left text-sm text-gray-700"
                        >
                          <p><strong>Name:</strong> {formData.name}</p>
                          <p><strong>Email:</strong> {formData.email}</p>
                          <p><strong>Phone:</strong> {formData.phone}</p>
                          <p><strong>Address:</strong> {formData.address}</p>
                          <p><strong>Service:</strong> {formData.service}</p>
                          {formData.rentalDuration && <p><strong>Rental Duration:</strong> {formData.rentalDuration}</p>}
                          {formData.message && <p><strong>Message:</strong> {formData.message}</p>}
                        </motion.div>
                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-6 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-2 rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-md font-medium"
                          onClick={handleCloseSuccess}
                        >
                          Done
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      onSubmit={handleFormSubmit}
                      className="space-y-3"
                    >
                      <motion.input
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                        required
                      />
                      <motion.input
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                        required
                      />
                      <motion.input
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="Your Phone Number"
                        className="w-full p-3 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                        required
                      />
                      <motion.input
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleFormChange}
                        placeholder="Your Address"
                        className="w-full p-3 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                        required
                      />
                      {showBookingForm.name === 'AC for Rent' && (
                        <motion.select
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          name="rentalDuration"
                          value={formData.rentalDuration}
                          onChange={handleFormChange}
                          className="w-full p-3 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                          required
                        >
                          <option value="" disabled>
                            Select Rental Duration
                          </option>
                          <option value="1 Season">1 Season</option>
                          <option value="2 Seasons">2 Seasons</option>
                        </motion.select>
                      )}
                      <motion.textarea
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Your Message (Optional)"
                        className="w-full p-3 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 transition-all duration-200"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white p-3 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Submit Booking
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Services;