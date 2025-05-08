import { motion } from 'framer-motion';
import { Users, Target, Award, Code } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import InfoCard from '../components/InfoCard';
import aboutImage from '../imgs/about.jpg';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'AI Visual Art Specialist',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Maya Rodriguez',
      role: 'Music AI Researcher',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'David Chen',
      role: 'AI Literature Expert',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Sarah Wilson',
      role: 'AI Film Production Lead',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div>
      <div className="bg-blue-600 py-16">
        <PageHeader
          title="About Us"
          subtitle="We're exploring the fascinating intersection of artificial intelligence and creative expression."
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
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                At AI Creative Arts, we're dedicated to exploring and showcasing how artificial intelligence 
                is revolutionizing artistic expression across multiple disciplines. We believe that AI is not 
                replacing human creativity, but rather enhancing and expanding it in exciting new ways.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our project began as a collaboration between artists, technologists, and researchers who were 
                fascinated by the potential of AI to transform creative processes. We aim to document, analyze, 
                and celebrate the intersection of cutting-edge technology and human artistic expression.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Through this website, we hope to provide insights, examples, and inspiration for artists, 
                technologists, and anyone interested in the future of creative expression in the digital age.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 lg:mt-0 lg:w-1/2"
            >
              <img 
                src={aboutImage} 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
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
            <h2 className="text-3xl font-bold text-gray-900">Core Values</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our work is guided by these fundamental principles.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard 
              icon={Users}
              title="Human-AI Collaboration"
              content="We believe in the power of collaboration between human creativity and artificial intelligence, creating something greater than the sum of its parts."
              delay={0.1}
            />
            <InfoCard 
              icon={Target}
              title="Innovation & Exploration"
              content="We're committed to pushing boundaries and exploring new possibilities at the intersection of art and technology."
              delay={0.2}
            />
            <InfoCard 
              icon={Award}
              title="Artistic Excellence"
              content="We maintain a focus on artistic quality and creative expression, ensuring technology serves to enhance rather than diminish artistic value."
              delay={0.3}
            />
            <InfoCard 
              icon={Code}
              title="Open Knowledge Sharing"
              content="We believe in sharing insights, techniques, and discoveries to advance the field of AI-assisted creative expression."
              delay={0.4}
            />
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
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind AI Creative Arts, each specializing in different aspects of AI and creative expression.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-56 object-cover object-center" 
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;