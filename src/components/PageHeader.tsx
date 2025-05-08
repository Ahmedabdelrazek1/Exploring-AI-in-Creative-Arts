import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const PageHeader = ({ title, subtitle, alignment = 'left' }: PageHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${
        alignment === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-20 h-1 bg-blue-500 rounded-full mx-auto md:mx-0"></div>
    </motion.div>
  );
};

export default PageHeader;