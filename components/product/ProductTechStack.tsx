'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/products';

export default function ProductTechStack({ product }: { product: Product }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold mb-8">Tech Stack</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {product.techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.04] hover:border-accent-primary/30 hover:scale-105 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <span className="text-sm text-gray-300">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}