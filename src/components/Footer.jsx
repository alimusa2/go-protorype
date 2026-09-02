import React from 'react';
import { Twitter, Linkedin, Github, MessageSquare, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { footerData } from '../data/siteData';

export default function Footer({ setActiveNav }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, linkName) => {
    e.preventDefault();
    if (setActiveNav) {
      const pageMap = {
        'Home': 'Home',
        'Our Work': 'Our Work',
        'Team': 'Team',
        'Blogs': 'Blogs',
        'Careers': 'Career',
        'Contact': 'Home',
        'Workspaces': 'Home'
      };
      const targetPage = pageMap[linkName] || 'Home';
      setActiveNav(targetPage);
    }
    scrollToTop();
  };

  const socialIconMap = {
    Twitter: Twitter,
    Linkedin: Linkedin,
    Github: Github,
    MessageSquare: MessageSquare,
  };

  return (
    <footer className="relative bg-[#050505] text-gray-400 border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Row: Logo & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'Home')}
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/go logo.png"
              alt="GoArrow Logo"
              className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-[#121212] hover:bg-emerald-950 text-xs font-semibold text-gray-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 transition-all flex items-center gap-2"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Middle Grid: Nav Links, Contact Info, Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-4">Quick Navigation</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {footerData.navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-4">Get in Touch</h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${footerData.contactInfo.email}`} className="hover:text-white transition-colors">
                  {footerData.contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{footerData.contactInfo.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{footerData.contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Stay Connected & Socials */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-4">Stay Connected</h4>
            <p className="text-xs text-gray-400 mb-4">
              Follow our engineering updates and upcoming AI product releases.
            </p>
            <div className="flex items-center gap-3">
              {footerData.socials.map((social) => {
                const IconComponent = socialIconMap[social.icon] || Twitter;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-[#121212] hover:bg-emerald-950 border border-white/10 hover:border-emerald-500/50 flex items-center justify-center text-gray-300 hover:text-emerald-400 transition-all hover:scale-110"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 GoArrow. All rights reserved. Built with React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
