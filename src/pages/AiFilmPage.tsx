import { motion } from 'framer-motion';
import { Film, ExternalLink, Camera, Edit, Users, Zap } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import InfoCard from '../components/InfoCard';

const AiFilmPage = () => {
  const filmExamples = [
    {
      title: 'AI Character Animation',
      description: 'Deep learning models that can generate realistic character animations from simple text descriptions or reference motions.',
      videoSrc: 'https://www.youtube.com/embed/R3pJ2HHFaTo?si=olFqgRPAxuSsxQ-e',
      delay: 0.2
    },
    {
      title: 'AI in Visual Effects',
      description: 'Explore how AI transforms visual effects in modern films.',
      videoSrc: 'https://www.youtube.com/embed/5NZubOOeeV0?si=QiY_0LL3Dy9CPCMe',
      delay: 0.3
    }
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-purple-800 py-16">
        <PageHeader
          title="AI in Film Production"
          subtitle="Exploring how artificial intelligence is transforming cinematography, visual effects, animation, and storytelling in film."
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
              <h2 className="text-3xl font-bold text-gray-900">Reimagining Filmmaking</h2>
              <p className="mt-4 text-lg text-gray-600">
                Artificial intelligence is revolutionizing the film industry at every stage of production. 
                From pre-production planning to post-production editing, AI tools are enabling filmmakers 
                to achieve effects and workflows that were previously impossible or prohibitively expensive.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                These technologies are democratizing filmmaking, allowing smaller studios and independent 
                creators to produce high-quality content that can compete with major studios. Rather than 
                replacing human creativity, AI is augmenting it, handling technical tasks so filmmakers can 
                focus on storytelling and artistic vision.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 lg:mt-0 lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Film production with AI assistance" 
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
            <h2 className="text-3xl font-bold text-gray-900">AI Film Technologies in Action</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              See examples of how AI is being used in modern filmmaking.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filmExamples.map((example) => (
              <motion.div 
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: example.delay, duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-900">
                  <iframe 
                    src={example.videoSrc} 
                    title={example.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h3>
                  <p className="text-gray-600">{example.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">AI Applications in Film</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how artificial intelligence is being applied across different aspects of filmmaking.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard 
              icon={Camera}
              title="Visual Effects & CGI"
              content="AI accelerates rendering, creates realistic simulations, and generates backgrounds that would take traditional methods much longer to produce."
              delay={0.1}
            />
            <InfoCard 
              icon={Edit}
              title="Editing & Post-Production"
              content="Algorithms that can automatically edit footage, color grade scenes, and even identify the most emotionally impactful takes."
              delay={0.2}
            />
            <InfoCard 
              icon={Users}
              title="Character Creation"
              content="Deep learning models that generate realistic digital characters, de-age actors, or create entirely new performances."
              delay={0.3}
            />
            <InfoCard 
              icon={Zap}
              title="Script Analysis & Development"
              content="AI tools that analyze scripts for pacing, emotional arcs, and audience engagement potential, helping writers refine their storytelling."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 lg:pr-12"
            >
              <h2 className="text-3xl font-bold text-gray-900">The Future of Film</h2>
              <p className="mt-4 text-lg text-gray-600">
                As AI continues to evolve, we can expect even more revolutionary changes in filmmaking. 
                Virtual production using real-time rendering will become more sophisticated, allowing directors 
                to visualize complex scenes instantly. AI-generated actors may become indistinguishable from humans, 
                raising fascinating questions about performance and artistry.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Perhaps most exciting is the democratization of filmmaking. As these technologies become more 
                accessible, we'll see a new generation of creators who can bring their visions to life without 
                massive budgets or studio backing, leading to more diverse stories and perspectives in film.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Explore AI Film Tools</h3>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://runwayml.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm"
                  >
                    RunwayML <ExternalLink size={14} className="ml-1" />
                  </a>
                  <a 
                    href="https://www.unreal-engine.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition shadow-sm"
                  >
                    Unreal Engine <ExternalLink size={14} className="ml-1" />
                  </a>
                  <a 
                    href="https://deepstates.io/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 transition shadow-sm"
                  >
                    Deepstates <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 lg:mt-0 lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/7345419/pexels-photo-7345419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Future of filmmaking" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiFilmPage;
