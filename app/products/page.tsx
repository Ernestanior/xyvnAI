'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Star, Users, Zap } from 'lucide-react';
import { products } from '@/lib/products';

export default function ProductsPage() {
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
              Our Products
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Innovative Solutions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We build AI-powered products that transform how businesses operate and how people live. 
              Each product is crafted with cutting-edge technology and a relentless focus on user experience.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: Star, value: '3', label: 'Products Shipped' },
              { icon: Users, value: '10K+', label: 'Active Users' },
              { icon: Zap, value: '99.9%', label: 'Uptime' },
              { icon: ArrowUpRight, value: '50+', label: 'Features' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-4">
                  <stat.icon className="text-accent-primary" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {products.map((product, index) => (
              <motion.div
                key={product.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Floating Stats */}
                    <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                      {product.stats.slice(0, 3).map((stat, i) => (
                        <div 
                          key={i} 
                          className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10"
                        >
                          <div className="text-lg font-bold text-accent-primary">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 blur-xl" />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-sm text-accent-primary font-medium mb-4 block">
                    {String(index + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h2>
                  <p className="text-xl text-gray-300 mb-4">{product.tagline}</p>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {product.description.join(' ')}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {product.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-accent-primary/10 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-accent-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{feature.title}</div>
                          <div className="text-xs text-gray-500">{feature.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-black font-medium hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="px-6 mt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">XYVN</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our products stand out with cutting-edge features and exceptional user experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'AI-Powered',
                description: 'Advanced machine learning algorithms that adapt to your needs and improve over time',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Optimized performance with edge computing and intelligent caching for instant responses',
                gradient: 'from-yellow-500 to-orange-500',
              },
              {
                icon: '🔒',
                title: 'Enterprise Security',
                description: 'Bank-level encryption, SOC 2 compliance, and GDPR-ready data protection',
                gradient: 'from-green-500 to-teal-500',
              },
              {
                icon: '📊',
                title: 'Real-time Analytics',
                description: 'Comprehensive insights and metrics to track performance and make data-driven decisions',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: '🌐',
                title: 'Global Scale',
                description: 'Distributed infrastructure across 50+ regions for low latency worldwide',
                gradient: 'from-red-500 to-rose-500',
              },
              {
                icon: '🎨',
                title: 'Beautiful Design',
                description: 'Intuitive interfaces crafted with attention to detail and user experience',
                gradient: 'from-indigo-500 to-purple-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-accent-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Stats Section */}
      <section className="px-6 mt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,217,255,0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
                <p className="text-gray-400">Join thousands of satisfied customers worldwide</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '500K+', label: 'Active Users', icon: '👥' },
                  { value: '10M+', label: 'API Calls Daily', icon: '⚡' },
                  { value: '99.99%', label: 'Uptime', icon: '🚀' },
                  { value: '150+', label: 'Countries', icon: '🌍' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 mt-32">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                We're always excited to work on new challenges. Let's discuss how we can help bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}