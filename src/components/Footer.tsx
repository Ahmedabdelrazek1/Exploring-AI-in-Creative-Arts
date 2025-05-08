import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Logo className="h-10 mb-4" />
            <p className="text-gray-300 text-sm mt-2">
              Exploring the intersection of artificial intelligence and creative arts.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link to="/ai-visual-art" className="text-gray-300 hover:text-white transition">AI Visual Art</Link></li>
              <li><Link to="/ai-music" className="text-gray-300 hover:text-white transition">AI Music</Link></li>
              <li><Link to="/ai-literature" className="text-gray-300 hover:text-white transition">AI Literature</Link></li>
              <li><Link to="/ai-film" className="text-gray-300 hover:text-white transition">AI Film</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">More Info</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail size={18} className="text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">contact@aicreative.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 AI Street, Digital City, 10101</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AI Creative Arts. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">Designed with ❤️ and AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;