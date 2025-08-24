import React, { useState, useEffect } from 'react';
import { Users, Award, Building, BookOpen, ExternalLink, RefreshCw, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { fetchServiceDataFromGoogleDocs } from '../utils/googleDocs';

interface ServiceItem {
  organization: string;
  role: string;
  period: string;
  description?: string;
  type: 'community' | 'university' | 'academic';
}

const Service = () => {
  const [serviceData, setServiceData] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  
  // UI state for content management
  const [collapsedSections, setCollapsedSections] = useState<{[key: string]: boolean}>({
    community: false,
    university: false,
    academic: false
  });
  const [showMoreSections, setShowMoreSections] = useState<{[key: string]: boolean}>({
    community: false,
    university: false,
    academic: false
  });
  
  const ITEMS_TO_SHOW_INITIALLY = 4; // Show 4 items initially, rest behind "Show More"
  
  // Google Docs integration - your actual Google Doc ID
  const GOOGLE_DOC_ID = '1TVf6oew7JEigQHFY7H5FsxSJ09z5-DyHg2HDMe_8q04';
  const GOOGLE_SHEETS_API_KEY = 'YOUR_API_KEY_HERE';

  // Mock data for development (replace with actual Google Docs data)
  const mockServiceData: ServiceItem[] = [
    {
      organization: "Out Loud & United",
      role: "Chair, Board of Trustees",
      period: "2025–present",
      description: "Leading governance and strategic direction for LGBTQ+ advocacy organization",
      type: "community"
    },
    {
      organization: "Foundation of Freedom",
      role: "Research Director",
      period: "2021–present",
      description: "Directing research initiatives focused on criminal justice reform and community empowerment",
      type: "community"
    },
    {
      organization: "New Yorkers Against Gun Violence",
      role: "Research Advisory Board Member",
      period: "2021–present",
      description: "Providing research expertise on gun violence prevention strategies",
      type: "community"
    },
    {
      organization: "Arizona State University",
      role: "Faculty Search Committee Member",
      period: "2023–2025",
      description: "Participating in faculty recruitment for School of Criminology and Criminal Justice",
      type: "university"
    },
    {
      organization: "John Jay College Alumni Association",
      role: "First Vice President, Executive Board",
      period: "2022–2024",
      description: "Leading alumni engagement and institutional advancement initiatives",
      type: "university"
    },
    {
      organization: "American Society of Criminology",
      role: "Ruth Shonle Cavan Young Scholar Award Recipient",
      period: "2025",
      description: "Recognized for outstanding early career contributions to criminological scholarship",
      type: "academic"
    },
    {
      organization: "Race and Justice",
      role: "Editorial Board Member",
      period: "2024–present",
      description: "Providing peer review and editorial guidance for academic journal",
      type: "academic"
    },
    {
      organization: "Society for Conservation Biology",
      role: "Board Member, Social Sciences Working Group",
      period: "2021–2024",
      description: "Advancing interdisciplinary collaboration between social sciences and conservation",
      type: "academic"
    }
  ];

  useEffect(() => {
    // For now, use mock data. Replace this with actual Google Docs API call
    loadServiceData();
  }, []);

  const loadServiceData = async () => {
    setLoading(true);
    try {
      // Try to fetch from Google Docs first
      const config = {
        docId: GOOGLE_DOC_ID,
        apiKey: GOOGLE_SHEETS_API_KEY
      };
      
      console.log('Attempting to fetch from Google Docs...', config.docId);
      const googleData = await fetchServiceDataFromGoogleDocs(config);
      
      if (googleData && googleData.length > 0) {
        console.log('Successfully loaded from Google Docs:', googleData.length, 'items');
        setServiceData(googleData);
      } else {
        console.log('No data from Google Docs, using mock data');
        setServiceData(mockServiceData);
      }
      
      setLastUpdated(new Date().toLocaleDateString());
    } catch (error) {
      console.error('Error loading service data from Google Docs:', error);
      console.log('Falling back to mock data');
      setServiceData(mockServiceData); // Fallback to mock data
      setLastUpdated(new Date().toLocaleDateString());
    } finally {
      setLoading(false);
    }
  };

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'community':
        return <Users className="h-5 w-5" />;
      case 'university':
        return <Building className="h-5 w-5" />;
      case 'academic':
        return <BookOpen className="h-5 w-5" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  const getServiceColor = (type: string) => {
    switch (type) {
      case 'community':
        return 'from-green-500 to-emerald-600';
      case 'university':
        return 'from-blue-500 to-indigo-600';
      case 'academic':
        return 'from-purple-500 to-violet-600';
      default:
        return 'from-amber-500 to-orange-600';
    }
  };

  const groupedServices = {
    community: serviceData.filter(item => item.type === 'community'),
    university: serviceData.filter(item => item.type === 'university'),
    academic: serviceData.filter(item => item.type === 'academic')
  };

  const sectionTitles = {
    community: 'Service to the Community',
    university: 'Service to the University',
    academic: 'Service to the Academic Profession'
  };

  // Helper functions for UI management
  const toggleSection = (sectionType: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionType]: !prev[sectionType]
    }));
  };

  const toggleShowMore = (sectionType: string) => {
    setShowMoreSections(prev => ({
      ...prev,
      [sectionType]: !prev[sectionType]
    }));
  };

  // Get highlighted (current/recent) services
  const getHighlightedServices = () => {
    const currentYear = new Date().getFullYear();
    return serviceData.filter(service => {
      // Show current roles (containing "present") or recent roles (2023+)
      return service.period.toLowerCase().includes('present') || 
             service.period.includes('2024') || 
             service.period.includes('2025') ||
             service.period.includes(currentYear.toString());
    }).slice(0, 6); // Limit to 6 highlighted items
  };

  const highlightedServices = getHighlightedServices();

  // Get services to display for each section (with show more/less logic)
  const getServicesToDisplay = (services: ServiceItem[], sectionType: string) => {
    const showMore = showMoreSections[sectionType];
    return showMore ? services : services.slice(0, ITEMS_TO_SHOW_INITIALLY);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-12 w-12 text-amber-600 animate-spin mx-auto mb-4" />
          <p className="text-stone-600">Loading professional service information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">
            Professional Service
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Commitment to advancing justice, scholarship, and community through leadership and service
          </p>
        </div>

        {/* Highlights Section */}
        {highlightedServices.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-2 rounded-lg mr-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-stone-800">Current & Recent Service</h2>
                <p className="text-stone-600 mt-1">Key leadership roles and ongoing commitments</p>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {highlightedServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white via-amber-50/20 to-orange-50/10 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-6 border border-amber-100 relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute top-2 right-2">
                    <Star className="h-4 w-4 text-amber-500" />
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2 pr-6">
                    {service.organization}
                  </h3>
                  <p className="text-amber-700 font-medium mb-2">
                    {service.role}
                  </p>
                  <p className="text-stone-600 text-sm mb-3 font-medium">
                    {service.period}
                  </p>
                  {service.description && (
                    <p className="text-stone-700 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service Sections with Collapsible Design */}
        {Object.entries(groupedServices).map(([type, services]) => (
          services.length > 0 && (
            <div key={type} className="mb-12">
              <button
                onClick={() => toggleSection(type)}
                className="w-full flex items-center justify-between mb-6 group hover:bg-stone-50 p-4 rounded-lg transition-colors duration-200"
              >
                <div className="flex items-center">
                  <div className={`bg-gradient-to-r ${getServiceColor(type)} p-2 rounded-lg mr-4 group-hover:scale-105 transition-transform duration-200`}>
                    <div className="text-white">
                      {getServiceIcon(type)}
                    </div>
                  </div>
                  <div className="text-left">
                    <h2 className="text-2xl font-bold text-stone-800">
                      {sectionTitles[type as keyof typeof sectionTitles]}
                    </h2>
                    <p className="text-stone-600 text-sm">
                      {services.length} {services.length === 1 ? 'role' : 'roles'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {collapsedSections[type] ? (
                    <ChevronDown className="h-6 w-6 text-stone-600" />
                  ) : (
                    <ChevronUp className="h-6 w-6 text-stone-600" />
                  )}
                </div>
              </button>

              {!collapsedSections[type] && (
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {getServicesToDisplay(services, type).map((service, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-white via-stone-50/10 to-amber-50/5 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 p-6 border-l-4 border-amber-400 backdrop-blur-sm"
                      >
                        <h3 className="font-semibold text-stone-800 mb-2">
                          {service.organization}
                        </h3>
                        <p className="text-amber-700 font-medium mb-2">
                          {service.role}
                        </p>
                        <p className="text-stone-600 text-sm mb-3">
                          {service.period}
                        </p>
                        {service.description && (
                          <p className="text-stone-700 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Show More/Less Button */}
                  {services.length > ITEMS_TO_SHOW_INITIALLY && (
                    <div className="text-center">
                      <button
                        onClick={() => toggleShowMore(type)}
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors duration-200 font-medium"
                      >
                        {showMoreSections[type] ? (
                          <>
                            <ChevronUp className="h-4 w-4" />
                            <span>Show Less</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4" />
                            <span>Show {services.length - ITEMS_TO_SHOW_INITIALLY} More</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        ))}

      </div>
    </div>
  );
};

export default Service;
