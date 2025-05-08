import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  index?: number;
}

const FeatureCard = ({ title, description, imageSrc, link, index = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
      className="group bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-lg transition duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition duration-500 transform group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">{title}</h3>
      </div>
      <div className="p-5">
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition font-medium"
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default FeatureCard;