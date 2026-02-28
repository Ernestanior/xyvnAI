'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Smartphone, Cloud, Database, Shield, Zap, Globe } from 'lucide-react';

const capabilities = [
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    description: 'Cutting-edge AI integration',
    items: [
      { name: 'OpenAI GPT-4', detail: 'Advanced language models' },
      { name: 'Anthropic Claude', detail: 'Reliable AI assistant' },
      { name: 'DeepSeek', detail: 'Specialized AI solutions' },
      { name: 'Computer Vision', detail: 'Image recognition' },
    ],
  },
  {
    category: 'Web Development',
    icon: Code,
    description: 'Modern web technologies',
    items: [
      { name: 'Next.js 14', detail: 'React framework' },
      { name: 'TypeScript', detail: 'Type-safe development' },
      { name: 'Tailwind CSS', detail: 'Utility-first styling' },
      { name: 'React Query', detail: 'Data fetching' },
    ],
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    description: 'Cross-platform mobile apps',
    items: [
      { name: 'Flutter', detail: 'iOS & Android' },
      { name: 'React Native', detail: 'Native performance' },
      { name: 'HealthKit', detail: 'Health integration' },
      { name: 'Google Fit', detail: 'Fitness tracking' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: Cloud,
    description: 'Scalable cloud solutions',
    items: [
      { name: 'Vercel', detail: 'Edge deployment' },
      { name: 'Cloudflare', detail: 'CDN & security' },
      { name: 'AWS', detail: 'Cloud services' },
      { name: 'Docker', detail: 'Containerization' },
    ],
  },
  {
    category: 'Database & Storage',
    icon: Database,
    description: 'Robust data management',
    items: [
      { name: 'PostgreSQL', detail: 'Relational database' },
      { name: 'Supabase', detail: 'Backend as a service' },
      { name: 'Redis', detail: 'In-memory cache' },
      { name: 'Prisma ORM', detail: 'Type-safe queries' },
    ],
  },
  {
    category: 'Security & Auth',
    icon: Shield,
    description: 'Enterprise-grade security',
    items: [
      { name: 'OAuth 2.0', detail: 'Secure authentication' },
      { name: 'JWT', detail: 'Token-based auth' },
      { name: 'Encryption', detail: 'AES-256 & TLS' },
      { name: 'GDPR', detail: 'Compliance ready' },
    ],
  },
  {
    category: 'Performance',
    icon: Zap,
    description: 'Lightning-fast experiences',
    items: [
      { name: 'Edge Computing', detail: 'Global distribution' },
      { name: 'SSR & SSG', detail: 'Optimized rendering' },
      { name: 'Code Splitting', detail: 'Lazy loading' },
      { name: 'Caching', detail: 'Smart strategies' },
    ],
  },
  {
    category: 'Integration & APIs',
    icon: Globe,
    description: 'Seamless connectivity',
    items: [
      { name: 'REST APIs', detail: 'Standard protocols' },
      { name: 'GraphQL', detail: 'Flexible queries' },
      { name: 'WebSockets', detail: 'Real-time data' },
      { name: 'Webhooks', detail: 'Event-driven' },
    ],
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black opacity-50" />

      <div className="relative z-10 max-w-7xl w-full">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">Our Capabilities</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            We leverage cutting-edge technologies and best practices to build robust, 
            scalable, and secure applications that drive business growth.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.category}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl hover:bg-white/[0.04] hover:border-accent-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
                <capability.icon className="text-accent-primary" size={24} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                {capability.category}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-500 mb-4">{capability.description}</p>

              {/* Items */}
              <ul className="space-y-3">
                {capability.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    <div className="flex-1">
                      <div className="text-sm text-gray-300 font-medium">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { value: '50+', label: 'Technologies' },
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
            { value: 'Global', label: 'Scale' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}