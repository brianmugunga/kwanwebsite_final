import React from 'react';
import { Download, Award, Calendar, MapPin, Heart, Scale, BookOpen } from 'lucide-react';

const About = () => {
  const expertise = [
    { name: 'Critical Criminology', level: 95 },
    { name: 'Qualitative Research', level: 92 },
    { name: 'Policy Analysis', level: 88 },
    { name: 'Community Engagement', level: 90 },
    { name: 'Legal Advocacy', level: 85 },
    { name: 'Intersectional Analysis', level: 93 }
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Outstanding Scholar Award',
      description: 'American Society of Criminology recognition for contributions to critical criminology'
    },
    {
      year: '2022',
      title: 'Excellence in Teaching Award',
      description: 'Arizona State University recognition for innovative pedagogy and student mentorship'
    },
    {
      year: '2021',
      title: 'Emerging Scholar Award',
      description: 'Academy of Criminal Justice Sciences recognition for early career contributions'
    },
    {
      year: '2020',
      title: 'Community Impact Award',
      description: 'Brooklyn Community Justice Coalition recognition for advocacy work'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Justice & Liberation',
      description: 'Committed to dismantling systems of oppression and building pathways to healing and freedom for all communities.'
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: 'Intersectional Advocacy',
      description: 'Centering the experiences of Black, queer, and marginalized communities in all research and advocacy work.'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Transformative Education',
      description: 'Believing in education as a tool for liberation and empowerment, fostering critical consciousness in students.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stone-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Dr. Kwan‑Lamar Blount‑Hill
              </h1>
              <p className="text-xl text-stone-300 mb-6 leading-relaxed">
                I am a Black, queer, Christian criminologist, attorney, and advocate dedicated to 
                advancing justice through scholarship, teaching, and community engagement.
              </p>
              <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                My work centers on decolonizing criminology, advancing LGBTQ+ justice, and connecting 
                environmental harm with social justice. I believe in scholarship that serves communities 
                and education that transforms both minds and systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download CV</span>
                </button>
                <div className="flex items-center space-x-4 text-stone-300">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Phoenix, AZ</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Available</span>
                  </div>
                </div>
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

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Core Values
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              The principles that guide my scholarship, teaching, and advocacy work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-xl shadow-lg text-center">
                <div className="text-amber-700 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Scholarly and professional competencies developed through research, teaching, and practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-stone-900">{skill.name}</h3>
                  <span className="text-amber-700 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-amber-600 to-amber-700 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Achievements & Milestones
            </h2>
            <p className="text-xl text-stone-600">
              Recognition and milestones in academic and advocacy work
            </p>
          </div>
          
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-amber-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-stone-900">
                      {achievement.title}
                    </h3>
                    <span className="text-amber-700 font-medium">{achievement.year}</span>
                  </div>
                  <p className="text-stone-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Journey */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            My Journey
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              My path to criminology was shaped by personal experiences with injustice and a deep 
              commitment to my faith and community. As a Black, queer, Christian scholar, I bring 
              lived experience to my academic work, understanding firsthand the intersections of 
              identity, oppression, and resilience.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              My legal training at Brooklyn Law School grounded me in advocacy and policy work, 
              while my doctoral studies at Rutgers allowed me to develop theoretical frameworks 
              that center marginalized voices. This combination of legal and academic training 
              informs my approach to scholarship that serves communities.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Today, I continue to bridge the worlds of academia, advocacy, and community organizing, 
              always asking: How can our work contribute to liberation and healing? How can we 
              transform systems rather than simply reform them?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;