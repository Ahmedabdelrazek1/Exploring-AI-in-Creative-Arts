import { Sparkles } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2 mr-2 shadow-sm">
        <Sparkles className="text-white" size={20} />
      </div>
      <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        AI Creative
      </span>
    </div>
  );
};

export default Logo;