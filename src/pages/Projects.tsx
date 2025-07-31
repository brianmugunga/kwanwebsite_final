import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, Award, Filter, MapPin, Heart } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Decolonizing Criminology Initiative',
      category: 'academic',
      type: 'Research Initiative',
      period: '2022 - Present',
      location: 'Arizona State University',
      description: 'A comprehensive initiative to transform criminology education and research by centering Indigenous, Black, and other non-Western epistemologies. This project includes curriculum development, faculty training, and community partnerships.',
      impact: 'Reached 500+ students, trained 25 faculty members, established partnerships with 8 community organizations',
      collaborators: ['Indigenous Justice Collective', 'Black Lives Matter Phoenix', 'Tribal Nations'],
      image: 'from-emerald-500 to-teal-600',
      featured: true,
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
      description: 'Led policy reform efforts to improve treatment of LGBTQ+ individuals in NYC criminal justice system, including training programs for law enforcement and development of affirming protocols.',
      impact: 'Trained 1,200+ officers, reduced discriminatory incidents by 40%, established LGBTQ+ liaison program',
      collaborators: ['NYC LGBT Center', 'Lambda Legal', 'Transgender Law Center'],
      image: 'from-purple-500 to-pink-600',
      featured: true,
      outcomes: [
        'Implemented mandatory LGBTQ+ cultural competency training',
        'Established safe housing protocols for transgender individuals',
        'Created community oversight committee'
      ]
    },
    {
      id: 3,
      title: 'Environmental Justice and Incarceration Study',
      category: 'research',
      type: 'Community Research',
      period: '2021 - 2024',
      location: 'Brooklyn, NY',
      description: 'Community-based participatory research examining the relationship between environmental racism and criminal justice involvement in Brooklyn neighborhoods.',
      impact: 'Documented environmental-criminal justice connections in 15 neighborhoods, informed 3 policy proposals',
      collaborators: ['Brooklyn Environmental Justice Coalition', 'Community residents', 'Local advocacy groups'],
      image: 'from-green-500 to-emerald-600',
      featured: false,
      outcomes: [
        'Published comprehensive community report',
        'Presented findings to NYC Council',
        'Secured $2M in environmental remediation funding'
      ]
    },
    {
      id: 4,
      title: 'Narrative Healing Circles Program',
      category: 'community',
      type: 'Community Program',
      period: '2019 - Present',
      location: 'Phoenix, AZ',
      description: 'Developed and implemented narrative-based healing circles for formerly incarcerated individuals and their families, focusing on identity reconstruction and community reintegration.',
      impact: 'Served 200+ participants, 85% successful reintegration rate, expanded to 5 community centers',
      collaborators: ['Reentry organizations', 'Faith communities', 'Family support groups'],
      image: 'from-amber-500 to-orange-600',
      featured: true,
      outcomes: [
        'Reduced recidivism by 30% among participants',
        'Trained 40 community facilitators',
        'Developed replicable program model'
      ]
    },
    {
      id: 5,
      title: 'Criminal Justice Reform Coalition',
      category: 'advocacy',
      type: 'Policy Advocacy',
      period: '2018 - 2021',
      location: 'New York State',
      description: 'Co-founded and led statewide coalition advocating for criminal justice reform, focusing on bail reform, sentencing reform, and police accountability measures.',
      impact: 'Contributed to passage of 3 major reform bills, mobilized 10,000+ advocates, secured $50M in reform funding',
      collaborators: ['ACLU NY', 'Legal Aid Society', 'Community organizations statewide'],
      image: 'from-blue-500 to-indigo-600',
      featured: false,
      outcomes: [
        'Bail Reform Act of 2019 passage',
        'Police accountability legislation',
        'Sentencing reform measures'
      ]
    },
    {
      id: 6,
      title: 'Restorative Justice in Schools Program',
      category: 'community',
      type: 'Educational Initiative',
      period: '2017 - 2020',
      location: 'Brooklyn, NY',
      description: 'Implemented restorative justice practices in 15 Brooklyn schools to reduce suspensions and improve school climate, with particular focus on supporting Black and Latino students.',
      impact: 'Reduced suspensions by 60%, improved graduation rates by 15%, trained 200+ educators',
      collaborators: ['NYC Department of Education', 'Parent organizations', 'Student groups'],
      image: 'from-rose-500 to-pink-600',
      featured: false,
      outcomes: [
        'Established restorative justice protocols in 15 schools',
        'Trained 200+ teachers and administrators',
        'Created peer mediation programs'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'academic', name: 'Academic', count: projects.filter(p => p.category === 'academic').length },
    { id: 'research', name: 'Research', count: projects.filter(p => p.category === 'research').length },
    { id: 'advocacy', name: 'Advocacy', count: projects.filter(p => p.category === 'advocacy').length },
    { id: 'community', name: 'Community', count: projects.filter(p => p.category === 'community').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stone-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Projects & Initiatives
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            A portfolio of research, advocacy, and community engagement projects 
            advancing justice, equity, and liberation through collaborative action.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Highlighted initiatives demonstrating impact and innovation in justice work
            </p>
          </div>
          
          <div className="space-y-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-stone-50 rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`bg-gradient-to-r ${project.image} h-64 lg:h-auto flex items-center justify-center`}>
                    <div className="text-white text-center p-8">
                      <Heart className="h-16 w-16 mx-auto mb-4" />
                      <span className="text-lg font-medium">Project Impact</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.type}
                      </span>
                      <div className="flex items-center text-stone-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.period}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-3">{project.title}</h3>
                    <div className="flex items-center text-stone-600 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-stone-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-stone-800 mb-2">Key Outcomes:</h4>
                      <ul className="space-y-1">
                        {project.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-stone-600 text-sm">
                            <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-amber-800 mb-2">Impact:</h4>
                      <p className="text-amber-700 text-sm">{project.impact}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-stone-800 mb-2">Collaborators:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.collaborators.map((collab, idx) => (
                          <span key={idx} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm">
                            {collab}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              All Projects
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Complete portfolio of justice-centered work across research, advocacy, and community engagement
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
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="bg-stone-50 p-3 rounded-lg mb-4">
                    <p className="text-stone-700 text-xs font-medium">{project.impact}</p>
                  </div>
                  <button className="text-amber-700 hover:text-amber-800 font-semibold text-sm inline-flex items-center space-x-1">
                    <span>Learn More</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Collective Impact
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Measuring the reach and effectiveness of justice-centered work
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2,000+', label: 'People Directly Served' },
              { number: '50+', label: 'Organizations Partnered' },
              { number: '$5M+', label: 'Funding Secured' },
              { number: '15', label: 'Policy Changes' }
            ].map((stat, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with Me on Justice Work
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Interested in collaboration, consultation, or learning more about any of these projects? 
            Let's explore how we can work together to advance justice and equity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Start a Conversation
            </a>
            <a
              href="/research"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View Research
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;