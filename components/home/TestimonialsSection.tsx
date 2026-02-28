'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechFlow Inc',
    company: 'TechFlow',
    avatar: '👩‍💼',
    rating: 5,
    text: 'XYVN transformed our social media strategy with SocialAI. The AI-powered insights and automation have increased our engagement by 300% while reducing our workload significantly.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Product Manager',
    company: 'HealthTech Solutions',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Vita AI has been a game-changer for our wellness program. The personalized health insights and intuitive interface have helped thousands of our users achieve their health goals.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Emily Watson',
    role: 'Content Director',
    company: 'Creative Studios',
    avatar: '👩‍🎨',
    rating: 5,
    text: 'Seedlight has revolutionized our content creation process. The AI writing assistant understands context perfectly and helps our team produce high-quality content 5x faster.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'David Kim',
    role: 'CTO, DataCorp',
    company: 'DataCorp',
    avatar: '👨‍🔬',
    rating: 5,
    text: 'The technical excellence and scalability of XYVN products are outstanding. Their AI solutions integrate seamlessly with our existing infrastructure and deliver exceptional performance.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Lisa Anderson',
    role: 'Marketing Lead',
    company: 'GrowthLab',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Working with XYVN has been incredible. Their team is responsive, innovative, and truly understands our business needs. The ROI has exceeded all our expectations.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'James Park',
    role: 'Founder, StartupHub',
    company: 'StartupHub',
    avatar: '👨‍💼',
    rating: 5,
    text: 'XYVN products are enterprise-grade yet incredibly user-friendly. The combination of powerful features and intuitive design makes them perfect for businesses of any size.',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-primary/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-secondary/30 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,217,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,217,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm text-gray-400">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Loved by <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See what our clients say about working with XYVN and using our AI-powered solutions
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-full p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12] hover:-translate-y-1">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-2xl`}>
                      {testimonial.avatar}
                    </div>
                    
                    {/* Details */}
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                      <div className="text-xs text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-br ${testimonial.gradient} rounded-2xl transition-colors pointer-events-none opacity-0 group-hover:opacity-20`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { value: '500K+', label: 'Happy Users' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 mb-6">
            Join thousands of satisfied customers worldwide
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-black font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}