import React from 'react';
import { BookOpen, Users, Award, Calendar, MapPin, GraduationCap } from 'lucide-react';

const Teaching = () => {
  const currentCourses = [
    {
      code: 'CRJ 501',
      title: 'Critical Criminological Theory',
      level: 'Graduate',
      university: 'Arizona State University',
      semester: 'Spring 2024',
      enrollment: 25,
      description: 'An advanced examination of critical perspectives in criminology, including feminist, critical race, queer, and decolonial approaches to understanding crime and justice.',
      topics: [
        'Feminist Criminology',
        'Critical Race Theory',
        'Queer Criminology',
        'Decolonial Approaches',
        'Intersectionality',
        'Abolitionist Perspectives'
      ]
    },
    {
      code: 'CRJ 340',
      title: 'Social Justice and Criminal Law',
      level: 'Undergraduate',
      university: 'Arizona State University',
      semester: 'Spring 2024',
      enrollment: 45,
      description: 'Explores the intersection of social justice movements and criminal law, examining how legal systems both perpetuate and challenge inequality.',
      topics: [
        'History of Social Justice Movements',
        'Law and Social Change',
        'Civil Rights and Criminal Justice',
        'Community Organizing',
        'Policy Reform Strategies',
        'Restorative Justice'
      ]
    }
  ];

  const pastCourses = [
    {
      title: 'Introduction to Criminology',
      university: 'Arizona State University',
      level: 'Undergraduate',
      semesters: ['Fall 2023', 'Spring 2023', 'Fall 2022']
    },
    {
      title: 'Research Methods in Criminal Justice',
      university: 'Arizona State University',
      level: 'Graduate',
      semesters: ['Fall 2023', 'Fall 2022']
    },
    {
      title: 'Race, Class, and Crime',
      university: 'John Jay College',
      level: 'Undergraduate',
      semesters: ['Spring 2020', 'Fall 2019', 'Spring 2019']
    },
    {
      title: 'Qualitative Research Methods',
      university: 'John Jay College',
      level: 'Graduate',
      semesters: ['Fall 2020', 'Fall 2019']
    },
    {
      title: 'Criminal Justice Policy',
      university: 'Rutgers University',
      level: 'Graduate',
      semesters: ['Spring 2018', 'Fall 2017']
    },
    {
      title: 'Community and Crime',
      university: 'Rutgers University',
      level: 'Undergraduate',
      semesters: ['Fall 2018', 'Spring 2018']
    }
  ];

  const teachingPhilosophy = [
    {
      title: 'Critical Pedagogy',
      description: 'Education as the practice of freedom, encouraging students to question dominant narratives and develop critical consciousness.',
      icon: <BookOpen className="h-8 w-8" />
    },
    {
      title: 'Inclusive Learning',
      description: 'Creating classroom environments where all students feel valued, respected, and empowered to share their perspectives.',
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'Community Connection',
      description: 'Bridging academic learning with community engagement and real-world applications of justice principles.',
      icon: <GraduationCap className="h-8 w-8" />
    }
  ];

  const awards = [
    {
      title: 'Excellence in Teaching Award',
      organization: 'Arizona State University',
      year: '2022',
      description: 'Recognized for innovative pedagogy and commitment to student success'
    },
    {
      title: 'Outstanding Faculty Mentor Award',
      organization: 'John Jay College',
      year: '2020',
      description: 'Honored for exceptional mentorship of undergraduate and graduate students'
    },
    {
      title: 'Innovative Teaching Grant',
      organization: 'National Science Foundation',
      year: '2019',
      amount: '$25,000',
      description: 'Funding to develop community-based learning modules for criminology courses'
    }
  ];

  const studentTestimonials = [
    {
      quote: "Dr. Blount-Hill's class completely changed how I think about justice. His approach to critical criminology opened my eyes to perspectives I had never considered.",
      student: "Maria S.",
      course: "Critical Criminological Theory",
      year: "2023"
    },
    {
      quote: "The way Dr. Blount-Hill connects theory to real-world issues makes every class engaging. I feel prepared to make a difference in my community.",
      student: "James T.",
      course: "Social Justice and Criminal Law",
      year: "2023"
    },
    {
      quote: "His mentorship has been invaluable. Dr. Blount-Hill doesn't just teach—he empowers students to become scholars and advocates.",
      student: "Alex R.",
      course: "Research Methods",
      year: "2022"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stone-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Teaching & Mentorship
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Committed to transformative education that empowers students to become 
            critical thinkers, engaged scholars, and advocates for justice.
          </p>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Teaching Philosophy
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Education as a tool for liberation, empowerment, and social transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {teachingPhilosophy.map((principle, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-xl shadow-lg text-center">
                <div className="text-amber-700 mb-4 flex justify-center">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{principle.title}</h3>
                <p className="text-stone-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>

          {/* Philosophy Statement */}
          <div className="bg-amber-50 p-8 rounded-xl">
            <blockquote className="text-lg text-stone-700 leading-relaxed italic">
              "My teaching is grounded in the belief that education should be transformative—not just 
              informative. I strive to create learning environments where students don't just consume 
              knowledge, but actively participate in creating it. Through critical dialogue, community 
              engagement, and reflective practice, I aim to develop scholars who are equipped to 
              challenge injustice and work toward liberation."
            </blockquote>
            <cite className="block text-right text-stone-600 mt-4 font-semibold">
              — Dr. Kwan-Lamar Blount-Hill
            </cite>
          </div>
        </div>
      </section>

      {/* Current Courses */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Current Courses
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Spring 2024 course offerings at Arizona State University
            </p>
          </div>
          
          <div className="space-y-8">
            {currentCourses.map((course, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                        {course.code}
                      </span>
                      <span className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm font-medium">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-3">{course.title}</h3>
                    <div className="flex items-center space-x-4 mb-4 text-stone-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{course.university}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{course.semester}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.enrollment} students</span>
                      </div>
                    </div>
                    <p className="text-stone-600 mb-4 leading-relaxed">{course.description}</p>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-2">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, idx) => (
                          <span key={idx} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-stone-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-stone-800 mb-4">Course Resources</h4>
                    <div className="space-y-3">
                      <a href="#" className="block text-amber-700 hover:text-amber-800 font-medium">
                        Syllabus (PDF)
                      </a>
                      <a href="#" className="block text-amber-700 hover:text-amber-800 font-medium">
                        Reading List
                      </a>
                      <a href="#" className="block text-amber-700 hover:text-amber-800 font-medium">
                        Course Materials
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Teaching History
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Courses taught across multiple institutions and academic levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastCourses.map((course, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-stone-900 mb-2">{course.title}</h3>
                <div className="text-amber-700 font-semibold mb-2">{course.university}</div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-stone-100 text-stone-700 px-2 py-1 rounded text-sm">
                    {course.level}
                  </span>
                </div>
                <div className="text-stone-600 text-sm">
                  <strong>Semesters:</strong> {course.semesters.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Awards */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Teaching Recognition
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Awards and recognition for excellence in teaching and mentorship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{award.title}</h3>
                <div className="text-amber-700 font-semibold mb-2">{award.organization}</div>
                <div className="text-stone-600 mb-3">{award.year}</div>
                {award.amount && (
                  <div className="text-lg font-bold text-stone-900 mb-3">{award.amount}</div>
                )}
                <p className="text-stone-600 text-sm leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Student Voices
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              What students say about their learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-xl shadow-lg">
                <blockquote className="text-stone-600 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-stone-200 pt-4">
                  <div className="font-semibold text-stone-900">{testimonial.student}</div>
                  <div className="text-stone-600 text-sm">{testimonial.course}</div>
                  <div className="text-stone-500 text-sm">{testimonial.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Learning More?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Whether you're a prospective student, fellow educator, or interested in 
            guest lectures, I'd love to connect and discuss opportunities for collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="/cv"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View Full CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teaching;