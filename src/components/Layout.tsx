import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchOverlay from './SearchOverlay';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const Layout = () => {
  const { isSearching } = useContext(SearchContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {isSearching ? <SearchOverlay /> : <Outlet />}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;