'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Calendar, MapPin, Clock, Send, Github, Twitter, Linkedin } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'For general inquiries and partnerships',
    value: 'ern@xyvnai.com',
    href: 'mailto:ern@xyvnai.com',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: MessageSquare,
    title: 'Start a Project',
    description: 'Ready to build something amazing?',
    value: 'Get in Touch',
    href: 'mailto:ern@xyvnai.com?subject=New Project Inquiry',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: 'Let\'s discuss your ideas',
    value: 'Book a Meeting',
    href: 'mailto:ern@xyvnai.com?subject=Meeting Request',
    color: 'from-green-500 to-teal-500',
  },
];

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/xyvn',
    color: 'hover:text-white',
  },
  {
    icon: Twitter,
    name: 'Twitter',
    href: 'https://twitter.com/xyvn',
    color: 'hover:text-[#1DA1F2]',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/xyvn',
    color: 'hover:text-[#0077B5]',
  },
];

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We specialize in AI-powered web and mobile applications, from enterprise SaaS platforms to consumer apps. Our services include product strategy, design, development, and ongoing support.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A typical MVP takes 8-12 weeks, while more complex applications may take 3-6 months. We work in agile sprints to deliver value incrementally.',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile methodology with regular check-ins and demos. Our process includes discovery, design, development, testing, and deployment phases, with continuous feedback loops.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! We offer maintenance and support packages to ensure your application stays up-to-date, secure, and performing optimally. We\'re here for the long term.',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              Get in Touch
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Let's Build Together
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Have a project in mind? We'd love to hear about it. 
              Let's create something extraordinary together.
            </p>

            {/* Main Email CTA */}
            <motion.a
              href="mailto:ern@xyvnai.com"
              className="inline-flex items-center gap-3 text-3xl md:text-4xl font-semibold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Mail size={32} className="text-accent-primary" />
              ern@xyvnai.com
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
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
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${method.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{method.description}</p>
                <p className="text-accent-primary font-medium">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-primary/10">
                  <MapPin className="text-accent-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">Building globally, serving worldwide</p>
                  <p className="text-sm text-gray-500 mt-2">Remote-first team with global reach</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-secondary/10">
                  <Clock className="text-accent-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                  <p className="text-gray-400">We typically respond within 24 hours</p>
                  <p className="text-sm text-gray-500 mt-2">Monday - Friday, 9 AM - 6 PM (Your timezone)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Connect With Us</h2>
            <p className="text-gray-400">Follow our journey and stay updated</p>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Process Section */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">How We Work Together</h2>
            <p className="text-gray-400">A simple process to bring your ideas to life</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Initial Contact',
                description: 'Reach out via email and tell us about your project',
                icon: '💬',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                step: '02',
                title: 'Discovery Call',
                description: 'We discuss your requirements and goals in detail',
                icon: '📞',
                color: 'from-purple-500 to-pink-500',
              },
              {
                step: '03',
                title: 'Proposal',
                description: 'Receive a detailed proposal with timeline and cost',
                icon: '📋',
                color: 'from-orange-500 to-red-500',
              },
              {
                step: '04',
                title: 'Kick Off',
                description: 'Begin building your dream product together',
                icon: '🚀',
                color: 'from-green-500 to-teal-500',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-accent-primary/50 to-transparent" />
                )}

                <div className="relative z-10">
                  <motion.div
                    className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl shadow-lg`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-xs text-accent-primary font-mono mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map / Global Presence Section */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative p-12 rounded-3xl bg-white/[0.02] border border-white/[0.06] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* World Map Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[200px] opacity-20">🌍</div>
              </div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-4">Serving Clients Globally</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                We work with clients across the world, delivering exceptional solutions
                regardless of timezone or location.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { region: 'North America', clients: '45%', icon: '🇺🇸' },
                  { region: 'Europe', clients: '30%', icon: '🇪🇺' },
                  { region: 'Asia Pacific', clients: '20%', icon: '🌏' },
                  { region: 'Other Regions', clients: '5%', icon: '🌐' },
                ].map((region, index) => (
                  <motion.div
                    key={region.region}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-2">{region.icon}</div>
                    <div className="text-2xl font-bold text-accent-primary mb-1">{region.clients}</div>
                    <div className="text-sm text-gray-500">{region.region}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 border border-white/[0.08] text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-5xl mb-4">"</div>
            <p className="text-xl md:text-2xl text-gray-200 italic mb-6 leading-relaxed">
              Working with XYVN was an absolute pleasure. They understood our vision
              perfectly and delivered beyond our expectations. Highly recommended!
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xl">
                👩‍💼
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Sarah Chen</div>
                <div className="text-sm text-gray-500">CEO, TechFlow Inc</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative p-12 rounded-3xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-white/[0.08] text-center overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-primary/10 via-transparent to-transparent" />
            
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-2xl bg-white/[0.05] mb-6">
                <Send className="text-accent-primary" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start?</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Drop us a line and let's discuss how we can help bring your vision to life.
              </p>
              <a
                href="mailto:ern@xyvnai.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-black font-semibold hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all duration-300"
              >
                Send us an Email
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}