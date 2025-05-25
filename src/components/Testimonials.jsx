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
      name: 'Shahe Aalam',
      feedback: 'Shan Enterprises Cool fixed my A/C in no time! Professional service and great pricing. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Shekh Eklakh',
      feedback: 'My fridge was leaking, and they resolved the issue quickly. The team is skilled and courteous.',
      rating: 4.8,
    },
    {
      name: 'Shan',
      feedback: 'Best repair service in Noida! My washing machine works like new after their service.',
      rating: 4.9,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
      <Helmet>
        <title>Testimonials - Shan Enterprises Cool</title>
        <meta name="description" content="Read what our happy clients say about Shan Enterprises Cool's appliance repair services in Noida." />
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