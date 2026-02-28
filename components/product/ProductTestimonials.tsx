'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/products';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function ProductTestimonials({ product }: { product: Product }) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Users</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our customers have to say about {product.name}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {product.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-accent-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -4 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={64} className="text-accent-primary" />
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent-primary/30">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary/0 via-accent-primary/50 to-accent-primary/0" />
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-primary mb-1">4.9/5</div>
            <div className="text-sm text-gray-500">Average Rating</div>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-primary mb-1">10K+</div>
            <div className="text-sm text-gray-500">Happy Users</div>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-primary mb-1">98%</div>
            <div className="text-sm text-gray-500">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}