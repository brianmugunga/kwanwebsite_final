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
          
          {/* --- START OF MODIFIED BUTTON BLOCK --- */}
          <div className="flex justify-center space-x-4"> 
            
            {/* 1. The 'View CV Online' button (Uses the original Google Docs preview link) */}
            <a
              href="https://docs.google.com/document/d/1XmMKYA_BBs6X2jyoE5ftjrH_mudiI-n67T2Wp7W0vzY/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>View CV Online</span>
            </a>

            {/* 2. The 'Download CV (PDF)' button (Uses the special Google Docs PDF export link) */}
            <a
              href="https://docs.google.com/document/d/1XmMKYA_BBs6X2jyoE5ftjrH_mudiI-n67T2Wp7W0vzY/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-50 text-stone-900 hover:bg-stone-200 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2 border border-stone-300"
            >
              <Download className="h-5 w-5" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
          {/* --- END OF MODIFIED BUTTON BLOCK --- */}
        </div>
      </section>

      {/* Research Interests Section */}
// ... (rest of the file is unchanged)