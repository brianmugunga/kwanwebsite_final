import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dr. Kwan‑Lamar Blount‑Hill</h3>
            <p className="text-stone-300 mb-4 max-w-md">
              Scholar, Attorney, Advocate. Advancing justice through transformative scholarship, 
              community engagement, and policy reform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                <BookOpen className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-stone-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/research" className="text-stone-300 hover:text-white transition-colors">Research</Link></li>
              <li><Link to="/publications" className="text-stone-300 hover:text-white transition-colors">Publications</Link></li>
              <li><Link to="/teaching" className="text-stone-300 hover:text-white transition-colors">Teaching</Link></li>
              <li><Link to="/projects" className="text-stone-300 hover:text-white transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-stone-300">kwan.blounthill@asu.edu</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-stone-300">+1 (602) 496-0450</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-stone-300">Phoenix, AZ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-6 text-center">
          <p className="text-stone-300">
            © 2024 Dr. Kwan‑Lamar Blount‑Hill. All rights reserved. Advancing justice through scholarship and advocacy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;