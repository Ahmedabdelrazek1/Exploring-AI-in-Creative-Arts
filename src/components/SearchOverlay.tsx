import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { SearchContext } from '../context/SearchContext';
import { useNavigate } from 'react-router-dom';

// Mock search data with content from all pages
const searchData = [
  { id: 1, title: 'AI in Visual Arts', content: 'Exploring how AI is transforming visual arts and digital design.', path: '/ai-visual-art' },
  { id: 2, title: 'AI-Generated Music', content: 'Discover the latest in AI music composition and sound design.', path: '/ai-music' },
  { id: 3, title: 'AI Literature & Poetry', content: 'How AI is changing the landscape of written creativity.', path: '/ai-literature' },
  { id: 4, title: 'AI in Film Production', content: 'The role of artificial intelligence in modern filmmaking.', path: '/ai-film' },
  { id: 5, title: 'About Our AI Creative Arts Project', content: 'Learn about our mission and vision.', path: '/about' },
  { id: 6, title: 'Contact Us', content: 'Get in touch with our creative team.', path: '/contact' }
];

const SearchOverlay = () => {
  const { searchQuery, setSearchQuery, setIsSearching } = useContext(SearchContext);
  const [results, setResults] = useState<typeof searchData>([]);
  const navigate = useNavigate();

  // Handle search when query changes
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filteredResults = searchData.filter(
      item => 
        item.title.toLowerCase().includes(query) || 
        item.content.toLowerCase().includes(query)
    );
    setResults(filteredResults);
  }, [searchQuery]);

  const closeSearch = () => {
    setIsSearching(false);
    setSearchQuery('');
  };

  const handleResultClick = (path: string) => {
    navigate(path);
    closeSearch();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4"
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden"
      >
        <div className="relative flex items-center border-b border-gray-200">
          <Search size={20} className="ml-4 text-gray-400 absolute left-0" />
          <input
            type="text"
            placeholder="Search for AI art, music, literature..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-4 pl-12 pr-12 text-lg focus:outline-none"
            autoFocus
          />
          <button 
            onClick={closeSearch}
            className="absolute right-4 p-1 rounded-full hover:bg-gray-100"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>
        
        <div className="max-h-[70vh] overflow-y-auto">
          {results.length > 0 ? (
            <ul>
              {results.map((result) => (
                <motion.li 
                  key={result.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="border-b border-gray-100 last:border-0"
                >
                  <button
                    onClick={() => handleResultClick(result.path)}
                    className="w-full text-left p-4 hover:bg-gray-50 transition block"
                  >
                    <h3 className="font-medium text-blue-600">{result.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{result.content}</p>
                  </button>
                </motion.li>
              ))}
            </ul>
          ) : (
            <div className="p-6 text-center text-gray-500">
              {searchQuery ? "No results found. Try a different search term." : "Type to search..."}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SearchOverlay;