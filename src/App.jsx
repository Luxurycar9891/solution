import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Loader from './components/Loader';
import BookingConfirmation from './components/BookingConfirmation';
import BookService from './components/BookService';
import ScrollToTop from './components/ScrollToTop';

function AppWrapper() {
  const location = useLocation();
  const hideHeaderFooter = ['/booking-confirmation', '/book-service'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      <Helmet>
        <title>Shan Enterprises Cool - Home</title>
        <meta name="description" content="Premier repair and maintenance services for A/C, Fridge, Washing Machine, Water Cooler, Stabilizer, and SS Aluminium in Noida." />
        <meta name="keywords" content="AC repair, fridge repair, washing machine repair, water cooler repair, stabilizer repair, SS aluminium, Noida" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Shan Enterprises Cool",
            "url": "https://www.shanenterprisescool.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.shanenterprisescool.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home"><Hero /></div>
              <div id="services"><Services /></div>
              <div id="about"><About /></div>
              <div id="testimonials"><Testimonials /></div>
              <div id="faq"><FAQ /></div>
              <div id="contact"><Contact /></div>
            </>
          }
        />
        <Route path="/terms" element={<Terms />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/book-service" element={<BookService />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulate loading
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        {loading ? <Loader /> : <AppWrapper />}
      </Router>
    </HelmetProvider>
  );
}

export default App;
