import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Scale, Heart, Award, Users, Trophy } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Scholar',
      description: 'Advancing criminological theory through innovative research and critical analysis.'
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: 'Attorney',
      description: 'Advocating for justice through legal expertise and policy reform.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Advocate',
      description: 'Championing social and ecological justice for marginalized communities.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Publications' },
    { number: '3', label: 'Universities' },
    { number: '100+', label: 'Students Mentored' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Dr. Kwan‑Lamar
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400"> Blount‑Hill</span>
              </h1>
              <p className="text-2xl md:text-3xl text-amber-200 mb-4 font-light">
                Scholar. Attorney. Advocate.
              </p>
              <p className="text-xl text-stone-300 mb-8 max-w-2xl leading-relaxed">
                Criminologist, professor, researcher, and advocate for social and ecological justice. 
                Advancing transformative scholarship that centers Black, queer, and marginalized voices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/research"
                  className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Explore Research</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-amber-600 to-stone-700 rounded-2xl h-96 w-full"></div>
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center">
                <span className="text-white text-lg font-medium">Professional Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-stone-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              My Mission
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Bridging academic scholarship, legal advocacy, and social justice to create meaningful change
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-amber-700 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Recent Work
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Recent research, publications, and advocacy initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Social Identity Theory Research', type: 'Research', color: 'from-amber-500 to-orange-600' },
              { title: 'Decolonizing Criminology', type: 'Publication', color: 'from-stone-600 to-stone-700' },
              { title: 'LGBTQ+ Justice Initiative', type: 'Advocacy', color: 'from-emerald-500 to-teal-600' }
            ].map((item, index) => (
              <div key={item} className="bg-gray-100 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                <div className={`bg-gradient-to-br ${item.color} h-48`}></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 mb-4">
                    Advancing justice through rigorous scholarship and community-centered advocacy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">{item.type}</span>
                    <span className="bg-stone-100 text-stone-800 px-3 py-1 rounded-full text-sm">2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/projects"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View All Work</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Collaborate on Justice-Centered Work
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Interested in research collaboration, speaking engagements, or consulting on justice initiatives?
          </p>
          <Link
            to="/contact"
            className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;