'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/products';
import Image from 'next/image';

export default function ProductsSection() {
  return (
    <section id="products" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl w-full">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">Our Products</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Innovative solutions powered by cutting-edge AI technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Link href={`/products/${product.slug}`}>
                <div className="group relative h-[500px] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.04] hover:border-accent-primary/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_60px_rgba(0,217,255,0.15)]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    {/* Top: Number */}
                    <div className="flex justify-between items-start">
                      <span className="text-sm text-gray-500 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex gap-2">
                        {product.stats.slice(0, 2).map((stat, i) => (
                          <div key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <span className="text-xs font-semibold text-accent-primary">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom: Info */}
                    <div>
                      <h3 className="text-3xl font-bold mb-2 group-hover:text-accent-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-2">{product.tagline}</p>
                      
                      <div className="h-px bg-white/10 mb-4" />
                      
                      <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                        {product.description[0]}
                      </p>

                      {/* Features Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                            {feature.title}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-accent-primary font-medium group-hover:gap-2 transition-all">
                        <span>Explore Product</span>
                        <ArrowRight
                          className="group-hover:translate-x-2 transition-transform"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-primary/30 rounded-3xl transition-colors pointer-events-none" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-6">
            Want to learn more about our technology stack and capabilities?
          </p>
          <a
            href="#capabilities"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-primary/30 transition-all"
          >
            <span>View Our Capabilities</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}