import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const AiVisualArtPage = () => {
  const artworkGallery = [
    {
      title: 'Neural Landscape',
      artist: 'AI & Alex Johnson',
      imageSrc: 'https://images.pexels.com/photos/12813186/pexels-photo-12813186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A dreamlike landscape generated using a neural network trained on classical paintings.'
    },
    {
      title: 'Digital Identity',
      artist: 'AI & Maya Rodriguez',
      imageSrc: 'https://images.pexels.com/photos/5703552/pexels-photo-5703552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'An exploration of identity in the digital age, created through deep learning algorithms.'
    },
    {
      title: 'Abstract Emotions',
      artist: 'AI & David Chen',
      imageSrc: 'https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A series of abstract forms generated from emotional text inputs processed by an AI.'
    },
    {
      title: 'Future Cities',
      artist: 'AI & Sarah Wilson',
      imageSrc: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A vision of future urban environments created through generative adversarial networks.'
    }
  ];

  const techniques = [
    {
      title: 'Neural Style Transfer',
      description: 'This technique applies the style of one image to the content of another, creating unique artistic interpretations.',
      delay: 0.1
    },
    {
      title: 'Generative Adversarial Networks (GANs)',
      description: 'GANs use two neural networks competing against each other to generate new, synthetic instances of data that can pass for real data.',
      delay: 0.2
    },
    {
      title: 'Variational Autoencoders (VAEs)',
      description: 'VAEs encode images into a compressed representation and then decode them, allowing for creative manipulation of visual elements.',
      delay: 0.3
    },
    {
      title: 'Diffusion Models',
      description: 'These models gradually add and then remove noise from an image, creating high-quality and creative visual outputs.',
      delay: 0.4
    }
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <PageHeader
          title="AI in Visual Art"
          subtitle="Exploring the intersection of artificial intelligence and visual creativity."
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
              <h2 className="text-3xl font-bold text-gray-900">The AI Art Revolution</h2>
              <p className="mt-4 text-lg text-gray-600">
                Artificial intelligence is revolutionizing visual art, enabling new forms of creative expression 
                and challenging our understanding of what it means to create. AI systems can now generate stunning 
                images, assist in the creative process, and even develop their own unique artistic styles.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                From neural style transfer to generative adversarial networks, these technologies are opening up 
                unprecedented possibilities for artists, designers, and creative professionals. The result is a new 
                frontier of visual expression where human creativity and machine intelligence collaborate.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 lg:mt-0 lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="AI-generated artwork" 
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
            <h2 className="text-3xl font-bold text-gray-900">AI Art Gallery</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore a collection of artwork created through collaboration between human artists and artificial intelligence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artworkGallery.map((artwork, index) => (
              <motion.div 
                key={artwork.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={artwork.imageSrc} 
                    alt={artwork.title} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{artwork.title}</h3>
                  <p className="text-sm text-blue-600 mb-2">by {artwork.artist}</p>
                  <p className="text-gray-600">{artwork.description}</p>
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
            <h2 className="text-3xl font-bold text-gray-900">AI Techniques in Visual Art</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A look at the technologies powering today's AI-assisted artistic creations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techniques.map((technique) => (
              <motion.div 
                key={technique.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: technique.delay, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{technique.title}</h3>
                <p className="text-gray-600">{technique.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900">Try AI Art Creation</h2>
              <p className="mt-4 text-lg text-gray-600">
                Experience the power of AI in visual art creation through these interactive tools and platforms.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="https://www.midjourney.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm"
                >
                  Midjourney <ExternalLink size={16} className="ml-2" />
                </a>
                <a 
                  href="https://openai.com/dall-e-2" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition shadow-sm"
                >
                  DALL-E <ExternalLink size={16} className="ml-2" />
                </a>
                <a 
                  href="https://stability.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 transition shadow-sm"
                >
                  Stable Diffusion <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 lg:mt-0 lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Person using AI art tools" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiVisualArtPage;