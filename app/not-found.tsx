'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1
          className="text-9xl font-bold mb-4 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>
        
        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p
          className="text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The page you're looking for doesn't exist.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full font-medium text-black hover:opacity-90 transition-opacity"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}