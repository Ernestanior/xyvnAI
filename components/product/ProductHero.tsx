'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ArrowDown } from 'lucide-react';
import { Product } from '@/lib/products';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductHero({ product }: { product: Product }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={product.heroImage}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col min-h-[calc(100vh-80px)]">
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent-primary/20 text-accent-primary text-sm font-medium mb-6">
                {product.slug === 'socialai' && 'SaaS Platform'}
                {product.slug === 'vita-ai' && 'Mobile App'}
                {product.slug === 'seedlight' && 'E-commerce'}
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {product.name}
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {product.tagline}
            </motion.p>

            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {product.description[0]}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {product.liveUrl && (
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-black font-medium hover:opacity-90 transition-opacity"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink size={18} />
                </a>
              )}
              {product.videoUrl && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors"
                >
                  <Play size={18} />
                  <span>Watch Demo</span>
                </button>
              )}
              {!product.liveUrl && !product.videoUrl && (
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-black font-medium hover:opacity-90 transition-opacity"
                >
                  <span>Explore Features</span>
                </a>
              )}
            </motion.div>
          </div>

          {/* Right: Stats Cards */}
          <motion.div
            className="flex-1 w-full max-w-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {product.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href="#screenshots"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-accent-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Video Modal */}
      {showVideo && product.videoUrl && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-accent-primary transition-colors"
            >
              Close ×
            </button>
            <iframe
              src={product.videoUrl}
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}