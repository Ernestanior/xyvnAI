'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Target, Rocket, Heart, Code, Sparkles, Zap, Users } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies and methodologies to solve complex problems in elegant ways. Every project is an opportunity to push boundaries.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Target,
    title: 'User-Centric Design',
    description: 'Every decision we make is guided by the needs and experiences of the people who use our products. We design for humans, not just screens.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'Rapid Iteration',
    description: 'We believe in shipping fast, learning quickly, and continuously improving based on real feedback. Progress over perfection.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Crafted with Care',
    description: 'We put our heart into every line of code, every pixel, and every interaction we create. Quality is not negotiable.',
    color: 'from-red-500 to-rose-500',
  },
];

const principles = [
  {
    title: 'Ship Fast, Learn Faster',
    description: 'Every sprint brings us closer to perfection. We embrace rapid iteration and continuous improvement.',
    icon: Zap,
  },
  {
    title: 'Precision in Execution',
    description: 'Attention to detail in every aspect, from system architecture to micro-interactions.',
    icon: Target,
  },
  {
    title: 'Ultimate Experience',
    description: 'User delight is our north star. We settle for nothing less than exceptional.',
    icon: Sparkles,
  },
];

const team = [
  {
    title: 'Collaborative Spirit',
    description: 'We believe in the power of diverse perspectives and open communication.',
  },
  {
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly. We stay ahead by constantly learning and adapting.',
  },
  {
    title: 'Ownership Mindset',
    description: 'Every team member takes pride in their work and responsibility for outcomes.',
  },
  {
    title: 'Work-Life Balance',
    description: 'Sustainable pace leads to sustainable excellence. We value well-being.',
  },
];

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 mb-32">
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
              Our Philosophy
            </motion.span>
            
            <blockquote className="text-4xl md:text-6xl font-light italic mb-8 leading-relaxed">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                "We don't just write code.
                <br />
                We craft experiences that matter."
              </span>
            </blockquote>
            
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <p className="text-xl text-gray-400 leading-relaxed">
              At XYVN, we believe that great software is more than functionality—it's about 
              creating meaningful experiences that empower people and transform businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vibe Coding Section */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-white/[0.08] overflow-hidden"
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

            <div className="relative z-10 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-white/[0.05] mb-6">
                <Code className="text-accent-primary" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vibe Coding</h2>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                Our unique approach that combines technical excellence with creative intuition. 
                It's not a methodology; it's a mindset.
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                We blend rigorous engineering practices with an intuitive understanding of what makes 
                software feel right. The result? Products that are not only technically sound but also 
                delightful to use.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-accent-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-6`}>
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Principles</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The fundamental beliefs that shape how we work and what we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex p-4 rounded-xl bg-accent-primary/10 border border-accent-primary/20 mb-6">
                  <principle.icon className="text-accent-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-accent-primary">{principle.title}</h3>
                <p className="text-gray-400">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex p-4 rounded-2xl bg-white/[0.05] mb-6">
              <Users className="text-accent-primary" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team Culture</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're building more than products—we're building a team that thrives on collaboration and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {team.map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Journey Section */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The milestones that shaped who we are today
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary opacity-20" />

            {[
              {
                year: '2023',
                title: 'The Beginning',
                description: 'XYVN was founded with a vision to create AI-powered solutions that make a difference.',
                icon: '🚀',
              },
              {
                year: '2024',
                title: 'First Products',
                description: 'Launched SocialAI and Vita AI, serving thousands of users worldwide.',
                icon: '💡',
              },
              {
                year: '2025',
                title: 'Global Expansion',
                description: 'Expanded to serve customers in 150+ countries with enterprise-grade solutions.',
                icon: '🌍',
              },
              {
                year: '2026',
                title: 'Innovation Continues',
                description: 'Pushing the boundaries of AI technology with cutting-edge research and development.',
                icon: '✨',
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <div className="text-5xl mb-4">{milestone.icon}</div>
                  <div className="text-sm text-accent-primary font-medium mb-2">{milestone.year}</div>
                  <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-primary shadow-[0_0_20px_rgba(0,217,255,0.5)]" />

                {/* Empty Space */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
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
                backgroundSize: '32px 32px',
              }} />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
                <p className="text-gray-400">The numbers that drive us forward</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '3', label: 'Products Built', icon: '📦' },
                  { value: '500K+', label: 'Users Served', icon: '👥' },
                  { value: '150+', label: 'Countries', icon: '🌍' },
                  { value: '99.9%', label: 'Satisfaction', icon: '⭐' },
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

      {/* Visual Quote Section */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative p-12 md:p-16 rounded-3xl bg-white/[0.02] border border-white/[0.06] text-center overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Large Quote Marks */}
            <div className="absolute top-8 left-8 text-8xl text-accent-primary/10 font-serif">"</div>
            <div className="absolute bottom-8 right-8 text-8xl text-accent-primary/10 font-serif">"</div>

            <div className="relative z-10">
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-8 italic">
                The best software is invisible. It empowers users to achieve their goals
                without getting in the way. That's what we strive for in every product we build.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-xl">
                  👨‍💻
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">XYVN Team</div>
                  <div className="text-sm text-gray-500">Founders & Engineers</div>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us on This Journey</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Whether you're looking to build something amazing or join our team, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-black font-semibold hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all duration-300"
              >
                Start a Project
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/[0.05] border border-white/[0.15] text-white font-semibold hover:bg-white/[0.08] transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}