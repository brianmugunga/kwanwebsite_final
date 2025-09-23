import React, { useState } from 'react';
import { BookOpen, Users, Brain, Scale, Heart, Globe, ExternalLink, Calendar, MapPin, Award, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Research = () => {
  const [activeTab, setActiveTab] = useState('research');
  const [projectFilter, setProjectFilter] = useState('all');

  const researchAreas = [
    {
      icon: <Brain className="h-12 w-12" />,
      title: 'Social Identity Theory of Shared Narrative',
      description: 'Exploring how collective narratives shape individual and group identities within criminal justice contexts, with particular attention to marginalized communities.',
      publications: 8,
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: 'Affective Architecture',
      description: 'Investigating the emotional and psychological dimensions of criminal justice spaces and how they impact both practitioners and those processed through the system.',
      publications: 6,
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Decolonizing Criminology',
      description: 'Challenging traditional criminological frameworks through Indigenous, Black, and other non-Western epistemologies to create more inclusive and just approaches.',
      publications: 12,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <Scale className="h-12 w-12" />,
      title: 'LGBTQ+ Justice',
      description: 'Examining the unique experiences of LGBTQ+ individuals in criminal justice systems and developing affirming, trauma-informed approaches to justice.',
      publications: 10,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Ecological Justice',
      description: 'Connecting environmental harm with social justice, exploring how ecological destruction disproportionately affects marginalized communities.',
      publications: 5,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const currentProjects = [
    {
      title: 'Narrative Identity and Reentry Success',
      funding: 'National Science Foundation',
      amount: '$450,000',
      period: '2023-2026',
      description: 'A longitudinal study examining how formerly incarcerated individuals construct and reconstruct their identities during reentry, with focus on narrative coherence and community support.',
      collaborators: ['Dr. Sarah Johnson (Rutgers)', 'Dr. Michael Chen (ASU)', 'Community Justice Coalition']
    },
    {
      title: 'Queer Criminology Pedagogy Project',
      funding: 'Ford Foundation',
      amount: '$125,000',
      period: '2024-2025',
      description: 'Developing inclusive curriculum and teaching materials that center LGBTQ+ experiences in criminology education.',
      collaborators: ['LGBTQ+ Justice Collective', 'National LGBTQ Task Force']
    },
    {
      title: 'Environmental Racism and Criminal Justice',
      funding: 'Robert Wood Johnson Foundation',
      amount: '$200,000',
      period: '2024-2027',
      description: 'Investigating the intersection of environmental harm and criminal justice involvement in communities of color.',
      collaborators: ['Environmental Justice Network', 'Dr. Lisa Rodriguez (UCLA)']
    }
  ];

  const methodologies = [
    'Participatory Action Research',
    'Critical Ethnography',
    'Narrative Analysis',
    'Community-Based Participatory Research',
    'Intersectional Analysis',
    'Decolonial Methodologies',
    'Mixed Methods Research',
    'Qualitative Interviewing'
  ];

  const appliedProjects = [
    {
      id: 1,
      title: 'Decolonizing Criminology Initiative',
      category: 'academic',
      type: 'Research Initiative',
      period: '2022 - Present',
      location: 'Arizona State University',
      description: 'A comprehensive initiative to transform criminology education and research by centering Indigenous, Black, and other non-Western epistemologies.',
      impact: 'Reached 500+ students, trained 25 faculty members, established partnerships with 8 community organizations',
      image: 'from-emerald-500 to-teal-600',
      outcomes: [
        'Developed 6 new courses incorporating decolonial perspectives',
        'Published pedagogical toolkit adopted by 12 universities',
        'Established community advisory board for curriculum oversight'
      ]
    },
    {
      id: 2,
      title: 'LGBTQ+ Justice Policy Reform',
      category: 'advocacy',
      type: 'Policy Initiative',
      period: '2020 - 2023',
      location: 'New York City',
      description: 'Led policy reform efforts to improve treatment of LGBTQ+ individuals in NYC criminal justice system, including training programs for law enforcement.',
      impact: 'Trained 1,200+ officers, reduced discriminatory incidents by 40%, established LGBTQ+ liaison program',
      image: 'from-purple-500 to-pink-600',
      outcomes: [
        'Implemented mandatory LGBTQ+ cultural competency training',
        'Established safe housing protocols for transgender individuals',
        'Created community oversight committee'
      ]
    },
    {
      id: 3,
      title: 'Narrative Healing Circles Program',
      category: 'community',
      type: 'Community Program',
      period: '2019 - Present',
      location: (
        <div className="space-y-1">
          <div>Phoenix, AZ</div>
          <div>NY, USA</div>
        </div>
      ),
      description: 'Developed narrative-based healing circles for formerly incarcerated individuals and their families, focusing on identity reconstruction and community reintegration.',
      impact: 'Served 200+ participants, 85% successful reintegration rate, expanded to 5 community centers',
      image: 'from-amber-500 to-orange-600',
      outcomes: [
        'Reduced recidivism by 30% among participants',
        'Trained 40 community facilitators',
        'Developed replicable program model'
      ]
    },
    {
      id: 4,
      title: 'Environmental Justice and Incarceration Study',
      category: 'research',
      type: 'Community Research',
      period: '2021 - 2024',
      location: 'Brooklyn, NY',
      description: 'Community-based participatory research examining the relationship between environmental racism and criminal justice involvement.',
      impact: 'Documented environmental-criminal justice connections in 15 neighborhoods, informed 3 policy proposals',
      image: 'from-green-500 to-emerald-600',
      outcomes: [
        'Published comprehensive community report',
        'Presented findings to NYC Council',
        'Secured $2M in environmental remediation funding'
      ]
    }
  ];

  const projectCategories = [
    { id: 'all', name: 'All Projects', count: appliedProjects.length },
    { id: 'academic', name: 'Academic', count: appliedProjects.filter(p => p.category === 'academic').length },
    { id: 'research', name: 'Research', count: appliedProjects.filter(p => p.category === 'research').length },
    { id: 'advocacy', name: 'Advocacy', count: appliedProjects.filter(p => p.category === 'advocacy').length },
    { id: 'community', name: 'Community', count: appliedProjects.filter(p => p.category === 'community').length }
  ];

  const filteredProjects = projectFilter === 'all' 
    ? appliedProjects 
    : appliedProjects.filter(project => project.category === projectFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stone-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Research & Projects
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Advancing transformative scholarship and applied projects that center justice, equity, and liberation. 
            My work challenges traditional criminological frameworks while building new 
            pathways toward healing and community empowerment.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Interdisciplinary scholarship at the intersection of criminology, law, and social justice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-stone-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${area.color} h-32 flex items-center justify-center`}>
                  <div className="text-white">
                    {area.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{area.title}</h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">{area.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stone-500">{area.publications} Publications</span>
                    <Link to="/contact" className="text-amber-700 hover:text-amber-800 font-semibold text-sm">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Current Research Projects
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Ongoing funded research initiatives advancing justice-centered scholarship
            </p>
          </div>
          
          <div className="space-y-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-stone-900 mb-3">{project.title}</h3>
                    <p className="text-stone-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-stone-800">Collaborators:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.collaborators.map((collab, idx) => (
                          <span key={idx} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm">
                            {collab}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="text-sm text-amber-700 font-medium">Funding</div>
                      <div className="text-lg font-bold text-amber-800">{project.funding}</div>
                      <div className="text-2xl font-bold text-stone-900">{project.amount}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-stone-500">Project Period</div>
                      <div className="font-semibold text-stone-800">{project.period}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Research Philosophy
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Community-Centered</h3>
              <p className="text-stone-600">
                Research with and for communities, not on them. Centering lived experiences and community wisdom.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Scale className="h-10 w-10 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Justice-Oriented</h3>
              <p className="text-stone-600">
                Scholarship that challenges systems of oppression and works toward liberation and healing.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-10 w-10 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Intersectional</h3>
              <p className="text-stone-600">
                Recognizing the complex ways that race, gender, sexuality, class, and other identities intersect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applied Projects */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Applied Projects
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Engaging with communities through applied projects to drive social change
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setProjectFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2 ${
                  projectFilter === category.id
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
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${project.image} h-48 flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <Users className="h-12 w-12 mx-auto mb-2" />
                    <span className="font-medium">{project.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {project.category}
                    </span>
                    <div className="flex items-center text-stone-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.period.split(' - ')[0]}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{project.title}</h3>
                  <div className="flex items-center text-stone-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="bg-stone-50 p-3 rounded-lg mb-4">
                    <p className="text-stone-700 text-xs font-medium">{project.impact}</p>
                  </div>
                  <Link to="/contact" className="text-amber-700 hover:text-amber-800 font-semibold text-sm inline-flex items-center space-x-1">
                    <span>Learn More</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Research Methodologies
            </h2>
            <p className="text-xl text-stone-600">
              Employing diverse methodological approaches to capture the complexity of social phenomena
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {methodologies.map((method, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <span className="text-stone-800 font-medium text-sm">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Collaborate on Research
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Interested in collaborative research, consultation, or discussing potential projects? 
            I'm always open to partnerships that advance justice and equity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Start a Conversation
            </Link>
            <Link
              to="/publications"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View Publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;