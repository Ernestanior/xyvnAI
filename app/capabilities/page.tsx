'use client';

import { motion } from 'framer-motion';
import { 
  Brain, Code, Smartphone, Cloud, Database, Shield, Zap, Globe,
  Server, Lock, Cpu, Layers, GitBranch, Terminal, Palette, Settings
} from 'lucide-react';

const capabilities = [
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    description: 'Cutting-edge AI integration for intelligent automation',
    items: [
      { name: 'OpenAI GPT-4', detail: 'Advanced language models for natural conversations and content generation' },
      { name: 'Anthropic Claude', detail: 'Reliable AI assistant for complex reasoning and analysis' },
      { name: 'DeepSeek', detail: 'Specialized AI solutions for specific domains and tasks' },
      { name: 'Computer Vision', detail: 'Image recognition, object detection, and visual AI' },
      { name: 'TensorFlow', detail: 'Custom model training and deployment' },
    ],
  },
  {
    category: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    description: 'Modern web technologies for exceptional user experiences',
    items: [
      { name: 'Next.js 14', detail: 'Full-stack React framework with App Router' },
      { name: 'TypeScript', detail: 'Type-safe development for maintainable code' },
      { name: 'Tailwind CSS', detail: 'Utility-first styling for rapid development' },
      { name: 'React Query', detail: 'Efficient data fetching and state management' },
      { name: 'Framer Motion', detail: 'Smooth animations and transitions' },
    ],
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    color: 'from-green-500 to-teal-500',
    description: 'Cross-platform mobile applications',
    items: [
      { name: 'Flutter', detail: 'Beautiful native apps for iOS & Android from single codebase' },
      { name: 'React Native', detail: 'Native performance with React ecosystem' },
      { name: 'HealthKit', detail: 'iOS health data integration' },
      { name: 'Google Fit', detail: 'Android fitness and wellness tracking' },
      { name: 'RevenueCat', detail: 'Subscription management and analytics' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    description: 'Scalable and reliable cloud solutions',
    items: [
      { name: 'Vercel', detail: 'Edge deployment with automatic scaling' },
      { name: 'Cloudflare Workers', detail: 'Serverless computing at the edge' },
      { name: 'AWS', detail: 'Enterprise cloud services' },
      { name: 'Docker', detail: 'Containerized deployments' },
      { name: 'Railway', detail: 'Modern deployment platform' },
    ],
  },
  {
    category: 'Database & Storage',
    icon: Database,
    color: 'from-yellow-500 to-orange-500',
    description: 'Robust data management and storage',
    items: [
      { name: 'PostgreSQL', detail: 'Reliable relational database' },
      { name: 'Supabase', detail: 'Backend as a service with real-time' },
      { name: 'Redis', detail: 'High-performance caching' },
      { name: 'Prisma ORM', detail: 'Type-safe database queries' },
      { name: 'MongoDB', detail: 'Flexible document storage' },
    ],
  },
  {
    category: 'Security & Auth',
    icon: Shield,
    color: 'from-red-500 to-rose-500',
    description: 'Enterprise-grade security measures',
    items: [
      { name: 'OAuth 2.0', detail: 'Industry-standard authentication' },
      { name: 'JWT', detail: 'Secure token-based auth' },
      { name: 'AES-256 Encryption', detail: 'Military-grade data protection' },
      { name: 'GDPR Compliance', detail: 'European data protection' },
      { name: 'SOC 2', detail: 'Security and compliance certification' },
    ],
  },
  {
    category: 'Performance',
    icon: Zap,
    color: 'from-cyan-500 to-blue-500',
    description: 'Lightning-fast user experiences',
    items: [
      { name: 'Edge Computing', detail: 'Global distribution for low latency' },
      { name: 'SSR & SSG', detail: 'Optimized rendering strategies' },
      { name: 'Code Splitting', detail: 'Lazy loading for faster loads' },
      { name: 'Image Optimization', detail: 'Next-gen formats and compression' },
      { name: 'CDN Caching', detail: 'Global content delivery' },
    ],
  },
  {
    category: 'Integration & APIs',
    icon: Globe,
    color: 'from-pink-500 to-purple-500',
    description: 'Seamless third-party connectivity',
    items: [
      { name: 'REST APIs', detail: 'Standard HTTP protocols' },
      { name: 'GraphQL', detail: 'Flexible query language' },
      { name: 'WebSockets', detail: 'Real-time bidirectional communication' },
      { name: 'Webhooks', detail: 'Event-driven integrations' },
      { name: 'Meta Graph API', detail: 'Facebook & Instagram integration' },
    ],
  },
];

const processSteps = [
  { icon: Terminal, title: 'Discovery', description: 'Understanding your needs, goals, and technical requirements' },
  { icon: Palette, title: 'Design', description: 'Creating intuitive interfaces and seamless user experiences' },
  { icon: GitBranch, title: 'Development', description: 'Building with modern tech stack and best practices' },
  { icon: Server, title: 'Deployment', description: 'Launching with scalable infrastructure and monitoring' },
  { icon: Settings, title: 'Support', description: 'Ongoing maintenance, updates, and optimization' },
];

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              Our Capabilities
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Technology Stack
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies and best practices to build robust, 
              scalable, and secure applications that drive business growth.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { value: '50+', label: 'Technologies' },
              { value: '8', label: 'Core Areas' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '24/7', label: 'Monitoring' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.category}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-accent-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${capability.color} opacity-90`}>
                  <capability.icon className="text-white" size={24} />
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
                    <li key={i} className="group/item">
                      <div className="flex items-start gap-2">
                        <span className="text-accent-primary mt-1.5">•</span>
                        <div className="flex-1">
                          <div className="text-sm text-gray-300 font-medium">{item.name}</div>
                          <div className="text-xs text-gray-500 opacity-0 group-hover/item:opacity-100 transition-opacity">
                            {item.detail}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From concept to launch, we follow a proven methodology to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-accent-primary/50 to-transparent" />
                )}
                
                {/* Step Number */}
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-4">
                  <step.icon className="text-accent-primary" size={24} />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Tech Stack Section */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built with <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Modern Tools</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We use industry-leading technologies to deliver exceptional results
            </p>
          </motion.div>

          {/* Tech Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: 'Next.js', icon: '▲', color: 'from-white to-gray-400' },
              { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
              { name: 'TypeScript', icon: 'TS', color: 'from-blue-500 to-blue-600' },
              { name: 'Tailwind', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
              { name: 'OpenAI', icon: '🤖', color: 'from-green-400 to-emerald-500' },
              { name: 'Vercel', icon: '▼', color: 'from-black to-gray-800' },
              { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-600' },
              { name: 'Redis', icon: '◆', color: 'from-red-500 to-rose-600' },
              { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-cyan-500' },
              { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-500' },
              { name: 'Flutter', icon: '🦋', color: 'from-blue-400 to-cyan-400' },
              { name: 'GraphQL', icon: '◈', color: 'from-pink-500 to-purple-500' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative aspect-square rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-accent-primary/30 transition-all duration-300 flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <div className={`text-4xl mb-2 bg-gradient-to-br ${tech.color} bg-clip-text text-transparent font-bold`}>
                  {tech.icon}
                </div>
                <div className="text-xs text-gray-400 text-center">{tech.name}</div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Visualization */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Scalable Architecture</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade infrastructure designed for performance and reliability
            </p>
          </motion.div>

          <motion.div
            className="relative p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0,217,255,0.2) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0,217,255,0.2) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }} />
            </div>

            <div className="relative z-10">
              {/* Architecture Layers */}
              <div className="space-y-8">
                {[
                  {
                    layer: 'Frontend Layer',
                    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
                    color: 'from-blue-500 to-cyan-500',
                    icon: '🎨',
                  },
                  {
                    layer: 'API Layer',
                    items: ['REST APIs', 'GraphQL', 'WebSockets', 'Authentication'],
                    color: 'from-purple-500 to-pink-500',
                    icon: '🔌',
                  },
                  {
                    layer: 'Business Logic',
                    items: ['AI Models', 'Data Processing', 'Analytics', 'Automation'],
                    color: 'from-green-500 to-emerald-500',
                    icon: '⚙️',
                  },
                  {
                    layer: 'Data Layer',
                    items: ['PostgreSQL', 'Redis Cache', 'Object Storage', 'CDN'],
                    color: 'from-orange-500 to-red-500',
                    icon: '💾',
                  },
                ].map((layer, index) => (
                  <motion.div
                    key={layer.layer}
                    className="relative"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-6">
                      {/* Layer Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center text-3xl`}>
                        {layer.icon}
                      </div>

                      {/* Layer Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{layer.layer}</h3>
                        <div className="flex flex-wrap gap-2">
                          {layer.items.map((item, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Connector */}
                    {index < 3 && (
                      <div className="absolute left-8 top-full w-px h-8 bg-gradient-to-b from-accent-primary/50 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                metric: 'Response Time',
                value: '<100ms',
                description: 'Lightning-fast API responses with edge computing',
                icon: '⚡',
                gradient: 'from-yellow-500 to-orange-500',
              },
              {
                metric: 'Availability',
                value: '99.99%',
                description: 'Enterprise SLA with redundant infrastructure',
                icon: '🛡️',
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                metric: 'Scalability',
                value: 'Unlimited',
                description: 'Auto-scaling to handle any traffic volume',
                icon: '📈',
                gradient: 'from-blue-500 to-cyan-500',
              },
            ].map((item, index) => (
              <motion.div
                key={item.metric}
                className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden group hover:border-accent-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="text-sm text-gray-500 mb-2">{item.metric}</div>
                  <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.value}
                  </div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Let's discuss how our technology expertise can help bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-black font-semibold hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all duration-300"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}