import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useState, useRef } from 'react';

const slides = [
  {
    src: '/hero1.jpg',
    title: 'Welcome to Shan Cool Enterprises',
    desc: 'Reliable Repair & Maintenance for All Your Appliances',
  },
  {
    src: '/service2.png',
    title: 'Fast & Professional Support',
    desc: 'Fridge, AC, Washing Machine, and More!',
  },
  {
    src: '/service1.jpg',
    title: 'Welcome to Shan Cool Enterprises',
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
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] outline-none touch-pan-y">
      <img
        src={slide.src}
        alt={slide.title}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {loaded && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-lg text-white z-10"
          >
            <h1 className="text-3xl sm:text-4xl font-bold drop-shadow-xl">{slide.title}</h1>
            <p className="text-sm sm:text-base font-light mt-2 drop-shadow-md">{slide.desc}</p>

            <Link
              to="/services"
              className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-lg text-sm transition transform hover:scale-105"
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
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    touchThreshold: 10,
    swipe: true,
    swipeToSlide: true,
    customPaging: () => (
      <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition-all duration-300" />
    ),
    appendDots: (dots) => (
      <div className="absolute bottom-4 w-full">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
  };

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  return (
    <section className="relative w-full overflow-hidden z-0 touch-pan-y">
      <Helmet>
        <title>Home - Shan Cool Enterprises</title>
        <meta
          name="description"
          content="Shan Cool Enterprises offers expert repair and maintenance services in Noida for A/C, Fridge, Washing Machine, Water Cooler, and more."
        />
      </Helmet>

      <Slider ref={sliderRef} {...settings} className="w-full">
        {slides.map((slide, index) => (
          <HeroSlide key={index} slide={slide} />
        ))}
      </Slider>

      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 p-2 rounded-full transition-all duration-300 ease-in-out"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 p-2 rounded-full transition-all duration-300 ease-in-out"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </section>
  );
}

export default Hero;