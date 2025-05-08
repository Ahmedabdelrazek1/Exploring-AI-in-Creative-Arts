import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AiVisualArtPage from './pages/AiVisualArtPage';
import AiMusicPage from './pages/AiMusicPage';
import AiLiteraturePage from './pages/AiLiteraturePage';
import AiFilmPage from './pages/AiFilmPage';
import { SearchContext } from './context/SearchContext';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, isSearching, setIsSearching }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="ai-visual-art" element={<AiVisualArtPage />} />
          <Route path="ai-music" element={<AiMusicPage />} />
          <Route path="ai-literature" element={<AiLiteraturePage />} />
          <Route path="ai-film" element={<AiFilmPage />} />
        </Route>
      </Routes>
    </SearchContext.Provider>
  );
}

export default App;