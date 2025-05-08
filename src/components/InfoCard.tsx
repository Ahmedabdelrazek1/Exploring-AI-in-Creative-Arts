import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  delay?: number;
}

const InfoCard = ({ icon: Icon, title, content, delay = 0 }: InfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white shadow-sm hover:shadow rounded-lg p-6 transition-shadow"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
            <Icon size={24} />
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-2 text-base text-gray-500">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoCard;