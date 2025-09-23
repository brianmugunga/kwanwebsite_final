import React, { useState } from 'react';
import { Download, ExternalLink, Calendar, MapPin, Award, BookOpen, GraduationCap, Users, Building, Star, ChevronDown, ChevronUp, FileText, TrendingUp, DollarSign, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const CV = () => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    education: true,
    positions: true,
    awards: true,
    grants: false,
    publications: false,
    affiliations: false,
    memberships: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Education data from CV
  const education = [
    {
      degree: 'Doctor of Philosophy in Criminal Justice',
      institution: 'John Jay College of Criminal Justice/Graduate Center, City University of New York',
      year: '2020',
      location: 'New York, NY',
      details: 'Spheres of identity: Theorizing social categorization and the legitimacy of criminal justice officials',
      committee: 'Committee: E. L. Piza (chair), L. Kazemian, K. T. Wolff, L. Mazerolle (University of Queensland)',
      honors: '2021 Finalist, Social Issues Dissertation Award, Society for the Psychological Study of Social Issues'
    },
    {
      degree: 'Juris Doctor',
      institution: 'Emory University',
      year: '2011',
      location: 'Atlanta, GA',
      details: 'Concentration in Public Interest Law and Social Justice'
    },
    {
      degree: 'Bachelor of Science in Environmental Science',
      institution: 'Tuskegee University',
      year: '2008',
      location: 'Tuskegee, AL',
      details: 'Focus on environmental policy and sustainability'
    }
  ];

  // Position data from CV  
  const currentPositions = [
    {
      title: 'Assistant Professor',
      institution: 'School of Criminology and Criminal Justice, Watts College of Public Service and Community Solutions, Arizona State University',
      period: 'June 2022 – present',
      location: (
        <div className="space-y-1">
          <div>Phoenix, AZ</div>
          <div>NY, USA</div>
        </div>
      ),
      type: 'primary'
    },
    {
      title: 'Program Lead for Justice and Equity in Conservation',
      institution: 'Center for Biodiversity Outcomes, Global Institute of Sustainability and Innovation / School of Life Sciences, College of Liberal Arts and Sciences, Arizona State University',
      period: 'June 2023 – present',
      location: (
        <div className="space-y-1">
          <div>Phoenix, AZ</div>
          <div>NY, USA</div>
        </div>
      ),
      type: 'secondary'
    },
    {
      title: 'Visiting Scholar (invited)',
      institution: 'University of Louisville',
      period: 'intermittent',
      location: 'Louisville, KY',
      type: 'secondary'
    }
  ];

  // Key affiliations from CV
  const keyAffiliations = [
    'Research and Evaluation Center, John Jay College of Criminal Justice, City University of New York (May 2021–present)',
    'Christian Regenhard Center for Emergency Response Studies, John Jay College of Criminal Justice (March 2022–present)',
    'Center on Public Security, School of Criminal Justice, Rutgers University–Newark (April 2022–present)',
    'Academy for Justice, Sandra Day O\'Connor College of Law, Arizona State University (September 2022–present)',
    'Center for Violence Prevention and Community Safety, Arizona State University (May 2023–present)'
  ];

  // Awards from CV
  const recentAwards = [
    {
      title: 'Ruth Shonle Cavan Young Scholar Award',
      organization: 'American Society of Criminology',
      year: '2025',
      description: 'The most prestigious award for early career criminologists, recognizing outstanding scholarly contributions'
    },
    {
      title: 'Lagerspetz Award',
      organization: 'International Society for Research on Aggression',
      year: '2022',
      description: 'For "Diagnosing the spatial correlates of hate crime" - recognizing innovative research methodology'
    },
    {
      title: 'Lupia-Mutz Outstanding Publication Award',
      organization: 'Time-Sharing Experiments for the Social Sciences',
      year: '2022',
      description: 'For exceptional research publication utilizing experimental methods in social science'
    },
    {
      title: 'Community Service Award',
      organization: 'American Society of Criminology Division on People of Color and Crime',
      year: '2020',
      description: 'Recognition for outstanding service to the criminology community and advancing diversity'
    },
    {
      title: 'NSF–CJARS Research Fellowship',
      organization: 'Criminal Justice Administrative Records System',
      year: '2021',
      description: 'For "Progressive prosecution and its outcomes" research project'
    },
    {
      title: 'SAGE Junior Faculty Professional Development Teaching Award',
      organization: 'Academy of Criminal Justice Sciences',
      year: '2021',
      description: 'Recognition for excellence in teaching and professional development'
    }
  ];

  // Recent grants from CV (major ones)
  const majorGrants = [
    {
      title: 'Project Safe Neighborhoods',
      agency: 'Bureau of Justice Assistance through Arizona Criminal Justice Commission',
      amount: '$184,744',
      period: '2024–2027',
      role: 'Co-Principal Investigator'
    },
    {
      title: 'Notification of individuals eligible for clean slate record clearance',
      agency: 'Clean Slate Initiative',
      amount: '$306,820',
      period: '2024–2027',
      role: 'Co-Principal Investigator'
    },
    {
      title: 'Developing and examining an evaluative model of violence interruption in the Bronx',
      agency: 'Fund for a Safer Future',
      amount: '$197,596',
      period: '2023–2026',
      role: 'Principal Investigator'
    }
  ];

  // Publication highlights from CV
  const publicationHighlights = [
    {
      title: 'To obey or not obey: Disadvantaged social group identity and criminal justice involved interviewees\' perceptions of an obligation to obey the police',
      journal: 'American Journal of Criminal Justice',
      year: 'In press',
      impact: '5-Year IF: 3.4'
    },
    {
      title: 'Community-based violence intervention and social justice: An exploration of benefits beyond violence reduction',
      journal: 'Annals of the American Academy of Political and Social Science',
      year: 'In press',
      impact: '5-Year IF: 3.2',
      coauthor: 'with J. Szkola (equal author attribution)'
    },
    {
      title: '"Respect the badge": Exploring the use of respect as a means of survival during police encounters',
      journal: 'Justice Quarterly',
      year: '2025',
      impact: '5-Year IF: 3.3',
      coauthor: 'A. Henson, & Blount-Hill, K.'
    }
  ];

  // Professional organizations from CV
  const professionalOrgs = [
    'Academy of Criminal Justice Sciences',
    'Academy of Management', 
    'American Society of Criminology',
    'American Sociological Association',
    'European Society of Criminology',
    'International Society for Research on Aggression',
    'Society for Conservation Biology',
    'Society for Personality and Social Psychology',
    'Society for the Scientific Study of Sexuality',
    'Western Society of Criminology',
    'Midwest Sociological Society',
    'Criminological Society of Africa',
    'International Association of Applied Psychology',
    'Society for the Psychological Study of Social Issues'
  ];

  // Section header component
  const SectionHeader = ({ title, icon: Icon, sectionKey, subtitle }: { title: string; icon: any; sectionKey: string; subtitle?: string }) => (
    <button
      onClick={() => toggleSection(sectionKey)}
      className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-stone-800 to-amber-800 text-white rounded-t-xl hover:from-stone-700 hover:to-amber-700 transition-all duration-200"
    >
      <div className="flex items-center space-x-3">
        <Icon className="h-6 w-6" />
        <div className="text-left">
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-amber-100 text-sm">{subtitle}</p>}
        </div>
      </div>
      {expandedSections[sectionKey] ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
    </button>
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stone-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Curriculum Vitae
          </h1>
          <div className="mb-8">
            <p className="text-2xl text-amber-200 font-semibold mb-2">Kwan-Lamar Blount-Hill, JD, PhD</p>
            <p className="text-lg text-stone-300 mb-4">Assistant Professor • Arizona State University</p>
            <div className="text-base text-stone-400 mb-6 space-y-1">
              <div>Phoenix, AZ</div>
              <div>NY, USA / New York, NY</div>
              <div>kbh@asu.edu</div>
            </div>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my academic journey, professional experience, 
              and contributions to criminology, social justice, and conservation.
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://docs.google.com/document/d/1XmMKYA_BBs6X2jyoE5ftjrH_mudiI-n67T2Wp7W0vzY/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>View Full CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Research Interests
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg text-stone-700 leading-relaxed text-center">
                Collective and group psychology; legitimacy and justice perceptions; spatiotemporal, social, 
                perceptual and behavioral context; inclusive and translational science.
              </p>
            </div>
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
            {currentPositions.map((position, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">{position.title}</h3>
                    <h4 className="text-xl text-amber-700 font-semibold mb-4">{position.institution}</h4>
                    <div className="text-stone-600 leading-relaxed">
                      <p className="font-medium">{position.type === 'primary' ? 'Primary Position' : 'Secondary Position'}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-stone-600">
                      <Calendar className="h-5 w-5" />
                      <span className="font-medium">{position.period}</span>
                    </div>
                    <div className="flex items-start space-x-2 text-stone-600">
                      <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <div>{position.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Publications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Recent Publications
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Selected recent publications from 33+ peer-reviewed articles
            </p>
          </div>
          
          <div className="space-y-6">
            {publicationHighlights.map((pub, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                    <FileText className="h-5 w-5 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">{pub.title}</h3>
                    <p className="text-amber-700 font-medium mb-1">{pub.journal}</p>
                    <div className="flex items-center space-x-4 text-sm text-stone-600">
                      <span>{pub.year}</span>
                      <span>•</span>
                      <span>{pub.impact}</span>
                      {pub.coauthor && (
                        <>
                          <span>•</span>
                          <span>{pub.coauthor}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Research Grants */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Major Research Grants
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Over $1.2M in research funding as Principal or Co-Principal Investigator
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majorGrants.map((grant, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                    <DollarSign className="h-5 w-5 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">{grant.title}</h3>
                    <p className="text-amber-700 font-medium mb-2">{grant.agency}</p>
                    <div className="space-y-1 text-sm text-stone-600">
                      <p><span className="font-medium">Amount:</span> {grant.amount}</p>
                      <p><span className="font-medium">Period:</span> {grant.period}</p>
                      <p><span className="font-medium">Role:</span> {grant.role}</p>
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
            {recentAwards.map((award, index) => (
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

      {/* Key Affiliations */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Key Affiliations
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Research centers and institutes affiliations
            </p>
          </div>
          
          <div className="space-y-4">
            {keyAffiliations.map((affiliation, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                    <Building className="h-5 w-5 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <p className="text-stone-800 leading-relaxed">{affiliation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Professional Memberships
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalOrgs.map((membership, index) => (
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
          <Link
            to="/contact"
            className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CV;