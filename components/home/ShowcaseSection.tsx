'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Smartphone, Monitor, Sparkles } from 'lucide-react';

const showcaseItems = [
  {
    title: 'SocialAI',
    subtitle: 'Enterprise Social Management',
    description: 'Streamline your social media presence with AI-powered scheduling, analytics, and content optimization.',
    image: '/images/showcase-socialai.jpg',
    mockupType: 'desktop',
    color: 'from-blue-500 to-cyan-500',
    stats: [
      { label: 'Posts Scheduled', value: '10M+' },
      { label: 'Accounts Managed', value: '50K+' },
    ],
    link: '/products/socialai',
  },
  {
    title: 'Vita AI',
    subtitle: 'Personal Health Companion',
    description: 'Track your wellness journey with intelligent health monitoring and personalized insights.',
    image: '/images/showcase-vita.jpg',
    mockupType: 'mobile',
    color: 'from-green-500 to-emerald-500',
    stats: [
      { label: 'Active Users', value: '100K+' },
      { label: 'Health Insights', value: '5M+' },
    ],
    link: '/products/vita-ai',
  },
  {
    title: 'Seedlight',
    subtitle: 'AI Writing Assistant',
    description: 'Enhance your creative writing with intelligent suggestions and real-time collaboration.',
    image: '/images/showcase-seedlight.jpg',
    mockupType: 'desktop',
    color: 'from-purple-500 to-pink-500',
    stats: [
      { label: 'Words Generated', value: '1B+' },
      { label: 'Writers Helped', value: '200K+' },
    ],
    link: '/products/seedlight',
  },
];

function DeviceMockup({ type, image, color, title }: { type: string; image: string; color: string; title: string }) {
  if (type === 'mobile') {
    return (
      <div className="relative mx-auto w-[280px] h-[560px]">
        {/* Phone Frame */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
          {/* Inner Screen */}
          <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
            {/* Screen Content */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <Smartphone className="w-16 h-16 mx-auto mb-4 text-white/50" />
                <p className="text-white/70 text-sm">{title} Mobile App</p>
              </div>
            </div>
          </div>
        </div>
        {/* Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-[3rem] pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[700px]">
      {/* Monitor Frame */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl">
        {/* Screen */}
        <div className="relative w-full aspect-[16/10] bg-black rounded-lg overflow-hidden">
          {/* Screen Content */}
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`} />
          
          {/* Mock Browser Chrome */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900/80 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-800 rounded-md h-5 flex items-center px-3">
                <span className="text-[10px] text-gray-500">https://app.xyvnai.com/{title.toLowerCase()}</span>
              </div>
            </div>
          </div>
          
          {/* Dashboard Mockup */}
          <div className="absolute inset-0 top-8 p-4">
            <div className="h-full grid grid-cols-4 gap-3">
              {/* Sidebar */}
              <div className="col-span-1 bg-white/5 rounded-lg p-3 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary" />
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`h-3 rounded bg-white/${i === 0 ? '20' : '5'}`} style={{ width: `${70 + Math.random() * 30}%` }} />
                  ))}
                </div>
              </div>
              {/* Main Content */}
              <div className="col-span-3 space-y-3">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3">
                      <div className="h-2 w-1/2 bg-white/10 rounded mb-2" />
                      <div className="h-6 w-3/4 bg-gradient-to-r from-accent-primary/30 to-accent-secondary/30 rounded" />
                    </div>
                  ))}
                </div>
                {/* Chart Area */}
                <div className="bg-white/5 rounded-lg p-4 flex-1 min-h-[120px]">
                  <div className="h-2 w-24 bg-white/10 rounded mb-4" />
                  <div className="flex items-end gap-1 h-20">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-accent-primary/50 to-accent-secondary/50 rounded-t"
                        style={{ height: `${30 + Math.random() * 70}%` }}
                      />
                    ))}
                  </div>
                </div>
                {/* Data Table */}
                <div className="bg-white/5 rounded-lg p-3 space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="h-3 w-1/4 bg-white/10 rounded" />
                      <div className="h-3 w-1/3 bg-white/5 rounded" />
                      <div className="h-3 w-1/4 bg-white/5 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stand */}
      <div className="relative mx-auto w-24 h-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-gray-700 to-gray-800" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-800 rounded-b-lg" />
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent-primary/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent-secondary/5 blur-3xl"
        style={{ y: y2 }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-accent-primary" />
            <span className="text-sm text-gray-400">Product Showcase</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Beautiful Apps, <br />
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Powerful Technology
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience our products designed with meticulous attention to detail, 
            powered by cutting-edge AI technology
          </p>
        </motion.div>

        {/* Showcase Items */}
        <div className="space-y-32">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              {/* Device Mockup */}
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <DeviceMockup
                    type={item.mockupType}
                    image={item.image}
                    color={item.color}
                    title={item.title}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.color} bg-opacity-10 text-sm font-medium mb-4`}>
                  {item.subtitle}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto lg:mx-0">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex justify-center lg:justify-start gap-8 mb-8">
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.link}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all group`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}