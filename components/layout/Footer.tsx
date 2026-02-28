'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, MapPin, Clock } from 'lucide-react';

const footerLinks = {
  products: [
    { name: 'SocialAI', href: '/products/socialai' },
    { name: 'Vita AI', href: '/products/vita-ai' },
    { name: 'Seedlight', href: '/products/seedlight' },
  ],
  company: [
    { name: 'About', href: '/philosophy' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/xyvn', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/xyvn', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/xyvn', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/[0.08]">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-white via-accent-primary to-accent-secondary bg-clip-text text-transparent">
                XYVN
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Building intelligent software solutions that transform businesses and improve lives through cutting-edge AI technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:ern@xyvnai.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-accent-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/[0.05] group-hover:bg-accent-primary/10 transition-colors">
                  <Mail size={16} />
                </div>
                <span>ern@xyvnai.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="p-2 rounded-lg bg-white/[0.05]">
                  <MapPin size={16} />
                </div>
                <span>Building globally, serving worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="p-2 rounded-lg bg-white/[0.05]">
                  <Clock size={16} />
                </div>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center md:text-left">
            <p>© {new Date().getFullYear()} XYVN Pte. Ltd. All rights reserved.</p>
            
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.06] hover:border-accent-primary/30 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}