import { motion } from 'framer-motion';
import { Music, ExternalLink, RefreshCw, Zap, Layers, Radio } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import InfoCard from '../components/InfoCard';

const AiMusicPage = () => {
  const musicExamples = [
    {
      title: 'Neural Symphony',
      description: 'A full orchestral piece composed by AI trained on classical compositions.',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1741613364&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
      delay: 0.1
    },
    {
      title: 'Electronic Dreams',
      description: 'AI-generated electronic music based on patterns from renowned EDM artists.',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2022765836&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      delay: 0.2
    },
    {
      title: 'Jazz Explorations',
      description: 'Improvisational jazz created through deep learning models analyzing jazz standards.',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/959262&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      delay: 0.3
    },
    {
      title: 'Ambient Landscapes',
      description: 'Atmospheric ambient soundscapes generated through AI audio processing.',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1762261458&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      delay: 0.4
    }
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <PageHeader
          title="AI in Music"
          subtitle="Exploring how artificial intelligence is transforming musical composition, production, and performance."
          alignment="center"
        />
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 lg:pr-12"
            >
              <h2 className="text-3xl font-bold text-gray-900">The Sound of AI</h2>
              <p className="mt-4 text-lg text-gray-600">
                Artificial intelligence is revolutionizing music creation, enabling new sounds, compositions, 
                and production techniques that were previously impossible. From generating original melodies 
                to creating entire compositions, AI is becoming an invaluable tool for musicians and producers.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                These technologies analyze vast libraries of existing music to understand patterns, structures, 
                and emotional qualities, then use this knowledge to generate new musical content. The result is 
                not a replacement for human creativity, but rather a powerful collaborator that can inspire, 
                augment, and expand musical possibilities.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 lg:mt-0 lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Digital music production" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Listen to AI-Generated Music</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Experience compositions and sound designs created through collaboration between human musicians and AI.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {musicExamples.map((example) => (
              <motion.div 
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: example.delay, duration: 0.5 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h3>
                <p className="text-gray-600 mb-4">{example.description}</p>
                <div className="relative pt-[56.25%]">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded"
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src={example.embedUrl}>
                  </iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* keep the rest of your code unchanged */}
      {/* ... your remaining sections ... */}

    </div>
  );
};

export default AiMusicPage;
