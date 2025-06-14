import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@mui/material';
import { FaQuoteLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

function Testimonials() {
  const testimonials = [
  {
    name: 'Amazon',
    feedback:
      'Shan Cool Enterprises has been a reliable partner for our office A/C maintenance. Their prompt response, technical expertise, and competitive pricing make them a trusted service provider for our facility needs.',
    rating: 5,
  },
  {
    name: 'Zepto',
    feedback:
      'We experienced a critical issue with our refrigeration unit, and Shan Cool Enterprises resolved it swiftly. Their technicians are knowledgeable and professional, ensuring minimal downtime for our operations.',
    rating: 4.8,
  },
  {
    name: 'LIC',
    feedback:
      'Shan Cool Enterprises delivered outstanding service for our appliance repair requirements. Their team restored our washing machines to optimal condition with great efficiency. Highly dependable and professional.',
    rating: 4.9,
  },
];


  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
      <Helmet>
        <title>Testimonials - Shan Cool Enterprises</title>
        <meta name="description" content="Read what our happy clients say about Shan Cool's Enterprises appliance repair services in Noida." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary relative"
        >
          What Our Clients Say
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
        </motion.h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ touchAction: 'pan-y' }}
          onTouchStart={(swiper, event) => {
            if (event.target.closest('a')) {
              swiper.allowTouchMove = false;
            }
          }}
          onTouchEnd={(swiper) => {
            swiper.allowTouchMove = true;
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
                  <CardContent className="text-center">
                    <FaQuoteLeft className="text-3xl text-secondary mb-4 mx-auto" />
                    <p className="text-gray-600 font-light mb-4">{testimonial.feedback}</p>
                    <h3 className="text-lg font-semibold text-primary">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">Rating: {testimonial.rating}/5</p>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;