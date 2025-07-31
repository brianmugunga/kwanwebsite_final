import React from 'react';
import { Download, ExternalLink, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const CV = () => {
  const education = [
    {
      degree: 'Ph.D. in Criminal Justice',
      institution: 'Rutgers University',
      year: '2018',
      location: 'Newark, NJ',
      details: 'Dissertation: Social Identity Theory of Shared Narrative in Criminal Justice'
    },
    {
      degree: 'J.D. (Juris Doctor)',
      institution: 'Brooklyn Law School',
      year: '2012',
      location: 'Brooklyn, NY',
      details: 'Concentration in Public Interest Law and Social Justice'
    },
    {
      degree: 'M.A. in Criminal Justice',
      institution: 'John Jay College of Criminal Justice',
      year: '2009',
      location: 'New York, NY',
      details: 'Magna Cum Laude'
    },
    {
      degree: 'B.A. in Sociology',
      institution: 'Howard University',
      year: '2007',
      location: 'Washington, DC',
      details: 'Summa Cum Laude, Phi Beta Kappa'
    }
  ];

  const positions = [
    {
      title: 'Associate Professor of Criminology',
      institution: 'Arizona State University',
      period: '2020 - Present',
      location: 'Phoenix, AZ',
      responsibilities: [
        'Teaching graduate and undergraduate criminology courses',
        'Conducting research on social identity and criminal justice',
        'Mentoring doctoral students in critical criminology',
        'Serving on university diversity and inclusion committees'
      ]
    },
    {
      title: 'Assistant Professor',
      institution: 'John Jay College of Criminal Justice',
      period: '2018 - 2020',
      location: 'New York, NY',
      responsibilities: [
        'Developed innovative curriculum in critical criminology',
        'Published research on affective architecture in criminal justice',
        'Collaborated with community organizations on justice initiatives',
        'Supervised undergraduate research projects'
      ]
    },
    {
      title: 'Policy Analyst',
      institution: 'NYC Mayor\'s Office of Criminal Justice',
      period: '2015 - 2018',
      location: 'New York, NY',
      responsibilities: [
        'Analyzed criminal justice policies and their community impact',
        'Drafted policy recommendations for criminal justice reform',
        'Coordinated with community stakeholders and advocacy groups',
        'Presented findings to city leadership and community boards'
      ]
    },
    {
      title: 'Legal Fellow',
      institution: 'Kings County District Attorney\'s Office',
      period: '2012 - 2015',
      location: 'Brooklyn, NY',
      responsibilities: [
        'Prosecuted misdemeanor and felony cases',
        'Developed restorative justice programs',
        'Trained staff on cultural competency and bias awareness',
        'Collaborated with community organizations on crime prevention'
      ]
    }
  ];

  const awards = [
    {
      title: 'Outstanding Scholar Award',
      organization: 'American Society of Criminology',
      year: '2023',
      description: 'Recognition for contributions to critical criminology and social justice research'
    },
    {
      title: 'Excellence in Teaching Award',
      organization: 'Arizona State University',
      year: '2022',
      description: 'Awarded for innovative pedagogy and student mentorship'
    },
    {
      title: 'Emerging Scholar Award',
      organization: 'Academy of Criminal Justice Sciences',
      year: '2021',
      description: 'Recognition for early career contributions to the field'
    },
    {
      title: 'Public Interest Fellowship',
      organization: 'Brooklyn Law School',
      year: '2011',
      description: 'Full fellowship for commitment to public interest law'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stone-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            A comprehensive overview of my academic journey, professional experience, 
            and contributions to criminology and social justice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/document/d/your-cv-document-id/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Download Full CV</span>
            </a>
            <a
              href="https://docs.google.com/document/d/your-cv-document-id/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <ExternalLink className="h-5 w-5" />
              <span>View in Google Docs</span>
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Education
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Academic foundation spanning law, criminology, and social sciences
            </p>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">{edu.degree}</h3>
                    <h4 className="text-xl text-amber-700 font-semibold mb-3">{edu.institution}</h4>
                    <p className="text-stone-600 leading-relaxed">{edu.details}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-stone-600">
                      <Calendar className="h-5 w-5" />
                      <span className="font-medium">{edu.year}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-stone-600">
                      <MapPin className="h-5 w-5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Career spanning academia, policy analysis, and legal practice
            </p>
          </div>
          
          <div className="space-y-12">
            {positions.map((position, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">{position.title}</h3>
                    <h4 className="text-xl text-amber-700 font-semibold mb-4">{position.institution}</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-stone-600">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-stone-600">
                      <Calendar className="h-5 w-5" />
                      <span className="font-medium">{position.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-stone-600">
                      <MapPin className="h-5 w-5" />
                      <span>{position.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Recognition for contributions to scholarship and social justice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{award.title}</h3>
                    <h4 className="text-lg text-amber-700 font-semibold mb-2">{award.organization}</h4>
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="h-4 w-4 text-stone-500" />
                      <span className="text-stone-600 font-medium">{award.year}</span>
                    </div>
                    <p className="text-stone-600 leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Professional Memberships
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'American Society of Criminology',
              'Academy of Criminal Justice Sciences',
              'American Bar Association',
              'National Association of Criminal Defense Lawyers',
              'Association of Black Sociologists',
              'Law and Society Association'
            ].map((membership, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-amber-700" />
                <span className="text-stone-800 font-medium">{membership}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Collaboration?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            I'm always open to discussing research opportunities, speaking engagements, 
            and collaborative projects in criminology and social justice.
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default CV;