import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-primary to-blue-800">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        className="text-6xl text-secondary"
      >
        <FaTools />
      </motion.div>
    </div>
  );
}

export default Loader;