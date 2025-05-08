import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import { Sparkles, Music, BookOpen, Video } from 'lucide-react';
import LitImage from '../imgs/Lit.jpg';

const HomePage = () => {
  const features = [
    {
      title: 'AI Visual Art',
      description: 'Explore how AI is revolutionizing visual art, from generative painting to interactive design and digital creativity.',
      imageSrc: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/ai-visual-art',
      icon: Sparkles
    },
    {
      title: 'AI Music',
      description: 'Discover how artificial intelligence is composing, producing, and transforming the musical landscape.',
      imageSrc: 'https://images.pexels.com/photos/7129701/pexels-photo-7129701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/ai-music',
      icon: Music
    },
    {
      title: 'AI Literature',
      description: 'Delve into AI-generated poetry, storytelling, and how machine learning is influencing written creativity.',
      imageSrc: LitImage,
      link: '/ai-literature',
      icon: BookOpen
    },
    {
      title: 'AI Film',
      description: 'Learn about the impact of AI on filmmaking, from screenplay writing to visual effects and character animation.',
      imageSrc: 'https://images.pexels.com/photos/7345419/pexels-photo-7345419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/ai-film',
      icon: Video
    }
  ];

  return (
    <div>
      <HeroSection
        title="Exploring AI in Creative Arts"
        subtitle="Discover how artificial intelligence is revolutionizing artistic expression across visual arts, music, literature, and film."
        imageSrc="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        cta={{ text: "Explore Now", link: "/ai-visual-art" }}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Explore AI Across Creative Disciplines</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how artificial intelligence is transforming different artistic fields and opening new possibilities for creative expression.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={feature.title}
                title={feature.title}
                description={feature.description}
                imageSrc={feature.imageSrc}
                link={feature.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 lg:pr-12"
            >
              <h2 className="text-3xl font-bold text-gray-900">The Future of Creative Expression</h2>
              <p className="mt-4 text-lg text-gray-600">
                Artificial intelligence is not just a tool for efficiency; it's becoming a collaborator in the creative process. 
                By understanding patterns, generating variations, and even making aesthetic decisions, AI is opening new frontiers 
                in how we create and experience art.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Whether you're an artist, a technologist, or simply curious about the intersection of creativity and computing, 
                our exploration of AI across different artistic disciplines offers insights into what's possible today and what's coming tomorrow.
              </p>
              <div className="mt-8">
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 lg:mt-0 lg:w-1/2"
            >
              <div className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  className="absolute w-full h-full object-cover"
                  src="https://www.youtube.com/embed/SQBaYV4NLno?si=Pg2ecP5VOPGv1j8j"
                  title="Art in the Age of AI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-2 text-sm text-gray-500 text-center">
                A look at how artificial intelligence is transforming the creative process
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;