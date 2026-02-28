'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/products';

export default function ProductOverview({ product }: { product: Product }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold mb-8">Overview</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mb-12" />
        </motion.div>

        <div className="space-y-6">
          {product.description.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}