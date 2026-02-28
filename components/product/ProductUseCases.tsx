'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/products';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ProductUseCases({ product }: { product: Product }) {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-[#0A0A0A] to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Real-World Applications</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how {product.name} solves real problems for businesses and individuals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {product.useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-accent-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="flex items-center text-accent-primary text-sm font-medium group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-primary/20 rounded-2xl transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}