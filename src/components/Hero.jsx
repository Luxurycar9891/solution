import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const slides = [
  {
    src: '/hero1.jpg',
    title: 'Welcome to Shan Enterprises Cool',
    desc: 'Reliable Repair & Maintenance for All Your Appliances',
  },
  {
    src: './service2.png',
    title: 'Fast & Professional Support',
    desc: 'Fridge, AC, Washing Machine, and More!',
  },
  {
    src: '/service1.jpg',
    title: 'Welcome to Shan Enterprises Cool',
    desc: 'Reliable Repair & Maintenance for All Your Appliances',
  },
  {
    src: '/service3.jpeg',
    title: 'Trusted Experts in Noida',
    desc: 'Experience Service Excellence Since 2015',
  },
];

function HeroSlide({ slide }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] h-[280px] sm:h-auto">
      <img
        src={slide.src}
        alt={slide.title}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {loaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex items-center justify-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-xl text-white z-10"
          >
            <motion.h1
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-xl"
            >
              {slide.title}
            </motion.h1>
            <p className="text-sm sm:text-base md:text-xl font-light mt-3 drop-shadow-md">
              {slide.desc}
            </p>
            <Link
              to="/book-service"
              className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg text-sm sm:text-base transition transform hover:scale-105"
            >
              Book Service Now
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden z-0">
      <Helmet>
        <title>Home - Shan Enterprises Cool</title>
        <meta
          name="description"
          content="Shan Enterprises Cool offers expert repair and maintenance services in Noida for A/C, Fridge, Washing Machine, Water Cooler, and more."
        />
      </Helmet>

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        effect="fade"
        speed={1000}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}

        <button className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 p-2 rounded-full transition-all duration-300 ease-in-out">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 p-2 rounded-full transition-all duration-300 ease-in-out">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </Swiper>
    </section>
  );
}

export default Hero;
