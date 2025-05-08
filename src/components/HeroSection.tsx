import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  cta?: {
    text: string;
    link: string;
  };
}

const HeroSection = ({ title, subtitle, imageSrc, cta }: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-800/80 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center sm:text-left max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-2xl">
            {subtitle}
          </p>
          
          {cta && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8"
            >
              <Link 
                to={cta.link} 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 transition duration-150 shadow-md"
              >
                {cta.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;