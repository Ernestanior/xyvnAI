'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Star, CheckCircle2 } from 'lucide-react';

const partners = [
  { name: 'TechCorp', logo: '◆' },
  { name: 'InnovateLab', logo: '▲' },
  { name: 'DataFlow', logo: '●' },
  { name: 'CloudNine', logo: '■' },
  { name: 'AIVentures', logo: '★' },
  { name: 'NextGen', logo: '◇' },
];

const achievements = [
  { icon: Shield, value: '100%', label: 'Data Protected', color: 'from-green-500 to-emerald-500' },
  { icon: Award, value: 'SOC 2', label: 'Certified', color: 'from-blue-500 to-cyan-500' },
  { icon: Star, value: '4.9/5', label: 'User Rating', color: 'from-yellow-500 to-orange-500' },
  { icon: CheckCircle2, value: 'GDPR', label: 'Compliant', color: 'from-purple-500 to-pink-500' },
];

export default function TrustedBySection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
            Trusted Worldwide
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powering <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of businesses and individuals who trust XYVN to deliver exceptional AI-powered solutions
          </p>
        </motion.div>

        {/* Partner Logos - Animated Scroll */}
        <motion.div
          className="relative mb-16 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <motion.div
            className="flex gap-12 py-8"
            animate={{ x: [0, -600, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] min-w-max"
              >
                <span className="text-3xl text-accent-primary">{partner.logo}</span>
                <span className="text-xl font-semibold text-gray-300">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(0, 217, 255, 0.3)' }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.color} mb-4`}>
                <achievement.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="text-3xl font-bold text-white mb-1">{achievement.value}</div>
              <div className="text-sm text-gray-400">{achievement.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span>24/7 Monitoring</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span>99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span>Global CDN</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}