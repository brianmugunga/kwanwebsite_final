import React, { useState } from 'react';
import { BookOpen, Download, ExternalLink, Calendar, Users, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import BiologicalConservationCover from '../assets/publications/Biological Conservation journal.jpg';
import CriminalJusticeBehaviorCover from '../assets/publications/Criminal Justice and Behavior journal.jpg';

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const publications = [
    {
      id: 1,
      type: 'journal',
      title: 'Social Identity Theory of Shared Narrative: Reimagining Community in Criminal Justice',
      authors: ['Blount-Hill, K.L.', 'Johnson, S.M.', 'Rodriguez, M.A.'],
      journal: 'Criminal Justice and Behavior',
      year: 2024,
      volume: '32',
      issue: '2',
      pages: '245-268',
      abstract: 'This article introduces the Social Identity Theory of Shared Narrative (SITSN) as a framework for understanding how communities construct collective identities through shared stories of justice and injustice. Drawing on three years of ethnographic research in Brooklyn communities affected by mass incarceration, we demonstrate how narrative coherence serves as both a mechanism of resistance and a pathway to healing.',
      image: CriminalJusticeBehaviorCover,
      pdfUrl: 'https://journals.sagepub.com/doi/pdf/10.1177/0093854820969751',
      fullUrl: 'https://journals.sagepub.com/doi/abs/10.1177/0093854820969751',
      doi: '10.1177/0093854820969751',
      featured: true
    },
    {
      id: 2,
      type: 'journal',
      title: 'Affective Architecture: How Criminal Justice Spaces Shape Emotional Experience',
      authors: ['Blount-Hill, K.L.'],
      journal: 'Biological Conservation',
      year: 2023,
      volume: '57',
      issue: '4',
      pages: '789-815',
      abstract: 'This study examines how the physical design of criminal justice spaces—from courtrooms to police stations—creates affective experiences that reinforce power dynamics and shape interactions between system actors and community members.',
      image: BiologicalConservationCover,
      pdfUrl: '#',
      fullUrl: 'https://www.sciencedirect.com/journal/biological-conservation',
      doi: null,
      featured: true
    },
    {
      id: 3,
      type: 'book',
      title: 'Decolonizing Criminology: Toward Liberation and Healing',
      authors: ['Blount-Hill, K.L.', 'Chen, M.', 'Williams, A.T.'],
      publisher: 'University of California Press',
      year: 2023,
      pages: '312',
      abstract: 'A comprehensive examination of how Indigenous, Black, and other non-Western epistemologies can transform criminological theory and practice. This book offers concrete strategies for decolonizing research, teaching, and policy in criminal justice.',
      image: null, // Add book cover image when available
      pdfUrl: '#',
      fullUrl: 'https://www.ucpress.edu/book/9780520384567/decolonizing-criminology',
      isbn: '978-0-520-38456-7',
      featured: true
    },
    {
      id: 4,
      type: 'journal',
      title: 'Queer Criminology and the Politics of Visibility',
      authors: ['Blount-Hill, K.L.', 'Thompson, J.R.'],
      journal: 'Theoretical Criminology',
      year: 2023,
      volume: '27',
      issue: '1',
      pages: '45-67',
      abstract: 'This article explores how LGBTQ+ individuals navigate criminal justice systems and the ways that heteronormative assumptions shape both policy and practice in law enforcement and corrections.',
      pdfUrl: '#',
      doi: '10.1177/1362480622987654',
      featured: false
    },
    {
      id: 5,
      type: 'report',
      title: 'Environmental Justice and Criminal Justice: Mapping the Connections',
      authors: ['Blount-Hill, K.L.', 'Environmental Justice Collective'],
      organization: 'Ford Foundation',
      year: 2022,
      pages: '85',
      abstract: 'A comprehensive report examining the intersection of environmental harm and criminal justice involvement, with particular attention to communities of color and low-income neighborhoods.',
      pdfUrl: '#',
      featured: false
    },
    {
      id: 6,
      type: 'journal',
      title: 'Narrative Coherence and Reentry Success: A Longitudinal Study',
      authors: ['Blount-Hill, K.L.', 'Davis, L.M.', 'Garcia, R.S.'],
      journal: 'Justice Quarterly',
      year: 2022,
      volume: '39',
      issue: '6',
      pages: '1234-1258',
      abstract: 'Drawing on interviews with 150 formerly incarcerated individuals over two years, this study examines how the ability to construct coherent narratives about past experiences relates to successful community reintegration.',
      pdfUrl: '#',
      doi: '10.1080/07418825.2022.2087654',
      featured: false
    }
  ];

  const mediaFeatures = [
    {
      title: 'Reimagining Justice: A Conversation with Dr. Kwan-Lamar Blount-Hill',
      outlet: 'NPR All Things Considered',
      date: '2024-01-15',
      type: 'podcast',
      url: '#',
      description: 'Discussion on decolonizing criminology and community-centered approaches to justice.'
    },
    {
      title: 'The Future of Criminal Justice Education',
      outlet: 'The Chronicle of Higher Education',
      date: '2023-11-08',
      type: 'article',
      url: '#',
      description: 'Op-ed on incorporating social justice perspectives into criminology curriculum.'
    },
    {
      title: 'Environmental Racism and Mass Incarceration',
      outlet: 'Democracy Now!',
      date: '2023-09-22',
      type: 'interview',
      url: '#',
      description: 'Interview discussing the connections between environmental harm and criminal justice involvement.'
    },
    {
      title: 'Queer Identity and Criminal Justice Reform',
      outlet: 'The Advocate',
      date: '2023-06-12',
      type: 'article',
      url: '#',
      description: 'Feature article on LGBTQ+ experiences in criminal justice systems.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Publications', count: publications.length },
    { id: 'journal', name: 'Journal Articles', count: publications.filter(p => p.type === 'journal').length },
    { id: 'book', name: 'Books', count: publications.filter(p => p.type === 'book').length },
    { id: 'report', name: 'Reports', count: publications.filter(p => p.type === 'report').length }
  ];

  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : publications.filter(pub => pub.type === activeFilter);

  const featuredPublications = publications.filter(pub => pub.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stone-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Publications & Media
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Scholarly publications, reports, and media features advancing justice-centered 
            scholarship and public discourse on criminology and social justice.
          </p>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Featured Publications
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Recent and notable scholarly contributions to the field
            </p>
          </div>
          
          <div className="space-y-8">
            {featuredPublications.map((pub) => {
              // Create anchor ID based on publication title
              let anchorId = '';
              if (pub.id === 1) anchorId = 'social-identity-theory';
              if (pub.id === 3) anchorId = 'decolonizing-criminology';
              
              return (
                <div key={pub.id} id={anchorId} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Publication Image */}
                  <div className="lg:col-span-2">
                    {pub.image ? (
                      <div className="h-64 lg:h-full">
                        <img
                          src={pub.image}
                          alt={`${pub.title} cover`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-64 lg:h-full bg-gradient-to-br from-amber-500 to-stone-600 flex items-center justify-center">
                        <BookOpen className="h-16 w-16 text-white" />
                      </div>
                    )}
                  </div>
                  
                  {/* Publication Content */}
                  <div className="lg:col-span-3 p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {pub.type}
                      </span>
                      <span className="text-stone-500 text-sm font-medium">{pub.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-stone-900 mb-4 leading-tight">{pub.title}</h3>
                    
                    <div className="text-stone-600 mb-3">
                      <span className="font-semibold text-stone-800">Authors:</span> {pub.authors.join(', ')}
                    </div>
                    
                    {pub.journal && (
                      <div className="text-stone-600 mb-4">
                        <span className="font-semibold text-stone-800">{pub.journal}</span>
                        {pub.volume && (
                          <span className="text-stone-500">, Vol. {pub.volume}({pub.issue}), pp. {pub.pages}</span>
                        )}
                      </div>
                    )}
                    
                    {pub.publisher && (
                      <div className="text-stone-600 mb-4">
                        <span className="font-semibold text-stone-800">{pub.publisher}</span>
                        <span className="text-stone-500">, {pub.pages} pages</span>
                      </div>
                    )}
                    
                    {pub.organization && (
                      <div className="text-stone-600 mb-4">
                        <span className="font-semibold text-stone-800">{pub.organization}</span>
                        <span className="text-stone-500">, {pub.pages} pages</span>
                      </div>
                    )}
                    
                    <p className="text-stone-600 leading-relaxed mb-6">{pub.abstract}</p>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-start">
                      {pub.fullUrl && (
                        <a
                          href={pub.fullUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-amber-700 hover:bg-amber-800 text-white py-3 px-8 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Read Full Publication</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* All Publications */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              All Publications
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Complete bibliography of scholarly work and research contributions
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-amber-700 text-white'
                    : 'bg-white text-stone-700 hover:bg-stone-100'
                }`}
              >
                <Filter className="h-4 w-4" />
                <span>{category.name}</span>
                <span className="bg-stone-200 text-stone-700 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.map((pub) => {
              let anchorId = '';
              if (pub.id === 4) anchorId = 'queer-criminology';
              
              return (
                <div key={pub.id} id={anchorId} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {pub.type}
                      </span>
                      <span className="text-stone-500 text-sm">{pub.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{pub.title}</h3>
                    <div className="text-stone-600 mb-2">
                      <span className="font-medium">Authors:</span> {pub.authors.join(', ')}
                    </div>
                    {pub.journal && (
                      <div className="text-stone-600">
                        <span className="font-medium">{pub.journal}</span>
                        {pub.volume && `, ${pub.volume}(${pub.issue}), ${pub.pages}`}
                      </div>
                    )}
                    {pub.publisher && (
                      <div className="text-stone-600">
                        <span className="font-medium">{pub.publisher}</span>
                      </div>
                    )}
                    {pub.organization && (
                      <div className="text-stone-600">
                        <span className="font-medium">{pub.organization}</span>
                      </div>
                    )}
                  </div>
                  {pub.fullUrl && (
                    <div className="ml-4">
                      <a
                        href={pub.fullUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 inline-flex items-center space-x-2"
                        title="Read Full Publication"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="hidden sm:inline">Read</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Media Features
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Interviews, articles, and media appearances discussing research and social justice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {feature.type}
                  </span>
                  <div className="flex items-center text-stone-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(feature.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{feature.title}</h3>
                <div className="text-amber-700 font-semibold mb-3">{feature.outlet}</div>
                <p className="text-stone-600 mb-4 leading-relaxed">{feature.description}</p>
                <a
                  href={feature.url}
                  className="text-amber-700 hover:text-amber-800 font-semibold inline-flex items-center space-x-1"
                >
                  <span>Read/Listen</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated on New Publications
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Interested in my latest research? Connect with me to stay informed about 
            new publications and speaking opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <a
              href="https://scholar.google.com/citations?user=kwan-lamar-blount-hill"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Google Scholar</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;