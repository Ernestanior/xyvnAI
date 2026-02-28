'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Target, Rocket, Heart } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies and methodologies to solve complex problems in elegant ways.',
  },
  {
    icon: Target,
    title: 'User-Centric Design',
    description: 'Every decision we make is guided by the needs and experiences of the people who use our products.',
  },
  {
    icon: Rocket,
    title: 'Rapid Iteration',
    description: 'We believe in shipping fast, learning quickly, and continuously improving based on real feedback.',
  },
  {
    icon: Heart,
    title: 'Crafted with Care',
    description: 'We put our heart into every line of code, every pixel, and every interaction we create.',
  },
];

export default function PhilosophySection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">
        {/* Main Quote */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="text-3xl md:text-5xl font-light italic mb-8 leading-relaxed max-w-4xl mx-auto">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              "We don't just write code.
              <br />
              We craft experiences that matter."
            </span>
          </blockquote>
          
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            At XYVN, we believe that great software is more than functionality—it's about 
            creating meaningful experiences that empower people and transform businesses.
          </p>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Our Approach</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We call it "Vibe Coding" — a philosophy that combines technical excellence 
            with creative intuition. It's not a methodology; it's a mindset.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center hover:bg-white/[0.04] hover:border-accent-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -4 }}
            >
              <div className="inline-flex p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/20 mb-4 group-hover:bg-accent-primary/20 transition-colors">
                <value.icon className="text-accent-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-3 group-hover:text-accent-primary transition-colors">
                {value.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Principles */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { title: 'Rapid Iteration', description: 'Ship fast, learn faster. Every sprint brings us closer to perfection.' },
            { title: 'Precise Execution', description: 'Attention to detail in every aspect, from architecture to animation.' },
            { title: 'Ultimate Experience', description: 'User delight is our north star. We settle for nothing less.' },
          ].map((principle, index) => (
            <div key={index} className="p-6">
              <h4 className="text-xl font-semibold mb-3 text-accent-primary">{principle.title}</h4>
              <p className="text-gray-400">{principle.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}