'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Product } from '@/lib/products';
import Image from 'next/image';

export default function ProductScreenshots({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % product.screenshots.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + product.screenshots.length) % product.screenshots.length);
    }
  };

  return (
    <section id="screenshots" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See It in Action</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the beautiful interface and powerful features of {product.name}
          </p>
        </motion.div>

        {/* Main Screenshot Display */}
        <motion.div
          className="relative mb-8 rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-white/0 p-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(0)}
          >
            <Image
              src={product.screenshots[0]}
              alt={`${product.name} Screenshot`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={48} />
            </div>
          </div>
        </motion.div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {product.screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={screenshot}
                alt={`${product.name} Screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-primary/50 rounded-xl transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={28} className="text-white" />
            </button>

            {/* Image */}
            <motion.div
              className="relative w-full max-w-5xl aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={product.screenshots[selectedImage]}
                alt={`${product.name} Screenshot ${selectedImage + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Indicators */}
            <div className="absolute bottom-6 flex gap-2">
              {product.screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === selectedImage ? 'bg-accent-primary' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}