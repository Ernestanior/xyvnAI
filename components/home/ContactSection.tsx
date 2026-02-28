'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, MessageSquare, Calendar, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'For general inquiries and partnerships',
    value: 'hello@xyvn.com',
    href: 'mailto:hello@xyvn.com',
    color: 'accent-primary',
  },
  {
    icon: MessageSquare,
    title: 'Start a Project',
    description: 'Ready to build something amazing?',
    value: 'Get in Touch',
    href: 'mailto:hello@xyvn.com?subject=New Project Inquiry',
    color: 'accent-secondary',
  },
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: 'Let\'s discuss your ideas',
    value: 'Book a Meeting',
    href: 'mailto:hello@xyvn.com?subject=Meeting Request',
    color: 'accent-primary',
  },
];

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com',
    color: 'hover:text-[#6e5494]',
  },
  {
    icon: Twitter,
    name: 'Twitter',
    href: 'https://twitter.com',
    color: 'hover:text-[#1DA1F2]',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'hover:text-[#0077B5]',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">Let's Build Together</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Have a project in mind? We'd love to hear about it. 
            Let's create something extraordinary together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto" />
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-accent-primary/30 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={`inline-flex p-4 rounded-xl mb-4 ${
                method.color === 'accent-primary' 
                  ? 'bg-accent-primary/10 border border-accent-primary/20' 
                  : 'bg-accent-secondary/10 border border-accent-secondary/20'
              } group-hover:scale-110 transition-transform`}>
                <method.icon 
                  className={method.color === 'accent-primary' ? 'text-accent-primary' : 'text-accent-secondary'} 
                  size={28} 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                {method.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{method.description}</p>
              <p className="text-accent-primary font-medium">{method.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Main Email CTA */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="mailto:hello@xyvn.com"
            className="inline-block text-3xl md:text-4xl font-semibold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.02 }}
          >
            hello@xyvn.com
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/[0.04] hover:border-accent-primary/30`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
            <MapPin className="text-accent-primary mx-auto mb-3" size={24} />
            <h4 className="text-lg font-semibold mb-2">Location</h4>
            <p className="text-gray-400">Building globally, serving worldwide</p>
          </div>
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
            <MessageSquare className="text-accent-secondary mx-auto mb-3" size={24} />
            <h4 className="text-lg font-semibold mb-2">Response Time</h4>
            <p className="text-gray-400">We typically respond within 24 hours</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center pt-12 border-t border-white/[0.06]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-2">XYVN © 2026. All rights reserved.</p>
          <p className="text-sm text-gray-600">
            Built with <span className="text-red-500">❤</span> using Vibe Coding
          </p>
          <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-accent-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-accent-primary transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}