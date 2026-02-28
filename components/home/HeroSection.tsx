'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, Globe, Code2, Cpu, ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const highlights = [
  { icon: Sparkles, text: 'AI-Powered Solutions', color: 'from-cyan-500 to-blue-500' },
  { icon: Zap, text: 'Lightning Fast', color: 'from-yellow-500 to-orange-500' },
  { icon: Globe, text: 'Global Scale', color: 'from-green-500 to-teal-500' },
  { icon: Code2, text: 'Modern Tech Stack', color: 'from-purple-500 to-pink-500' },
  { icon: Cpu, text: 'Enterprise Ready', color: 'from-red-500 to-rose-500' },
];

const stats = [
  { value: '3+', label: 'Products Shipped' },
  { value: '50+', label: 'Technologies' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Support' },
];

export default function HeroSection() {
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const newParticles = Array.from({ length: 150 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,217,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,217,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Particle Background */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(0,217,255,0.8) 0%, rgba(0,217,255,0) 70%)`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent-primary/10 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent-secondary/10 blur-[100px]"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 via-transparent to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-primary/5 via-transparent to-transparent" />
      
      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20"
        style={{ y, opacity }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.1] mb-10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm text-gray-300 font-medium">Building the Future with AI</span>
          <span className="px-2 py-0.5 rounded-full bg-accent-primary/20 text-accent-primary text-xs font-semibold">NEW</span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none">
            <motion.span
              className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 200%' }}
            >
              XYVN
            </motion.span>
          </h1>
          <motion.div
            className="h-1.5 w-32 mx-auto mt-4 rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ backgroundSize: '200% 100%' }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          Crafting Intelligent Software Solutions
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          We build cutting-edge AI-powered applications that transform businesses and improve lives.
          From enterprise SaaS to mobile health apps, we deliver exceptional digital experiences.
        </motion.p>

        {/* Highlights */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.text}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(0, 217, 255, 0.4)',
                backgroundColor: 'rgba(255,255,255,0.05)'
              }}
            >
              <div className={`p-1.5 rounded-lg bg-gradient-to-br ${item.color} opacity-80`}>
                <item.icon size={14} className="text-white" />
              </div>
              <span className="text-sm text-gray-300 font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-black font-semibold shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_40px_rgba(0,217,255,0.5)] transition-all duration-300"
            >
              Explore Our Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.05] border border-white/[0.15] text-white font-semibold hover:bg-white/[0.08] hover:border-white/[0.25] transition-all duration-300 backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link
            href="/products"
            className="group flex flex-col items-center gap-2 text-gray-500 hover:text-accent-primary transition-colors"
          >
            <motion.div
              className="flex flex-col items-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to Explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1 mt-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-current"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
      
      {/* Side Decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-8 rounded-full bg-white/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
          />
        ))}
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-8 rounded-full bg-white/10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
          />
        ))}
      </div>
    </section>
  );
}