'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/products';
import {
  MessageSquare,
  Clock,
  Users,
  BarChart,
  Brain,
  Shield,
  Zap,
  Globe,
  Camera,
  TrendingUp,
  MessageCircle,
  Activity,
  Target,
  BookOpen,
  Bell,
  ShoppingCart,
  Palette,
  CreditCard,
  Package,
  Search,
  Smartphone,
  Star,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Clock,
  Users,
  BarChart,
  Brain,
  Shield,
  Zap,
  Globe,
  Camera,
  TrendingUp,
  MessageCircle,
  Activity,
  Target,
  BookOpen,
  Bell,
  ShoppingCart,
  Palette,
  CreditCard,
  Package,
  Search,
  Smartphone,
  Star,
};

export default function ProductFeatures({ product }: { product: Product }) {
  const getIcon = (iconName: string): LucideIcon => {
    return iconMap[iconName] || Star;
  };

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to help you succeed
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.features.map((feature, index) => {
            const Icon = getIcon(feature.icon);
            return (
              <motion.div
                key={feature.title}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-accent-primary/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-accent-primary/10 border border-accent-primary/20 group-hover:bg-accent-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-accent-primary" size={28} />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 blur-2xl bg-accent-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent-primary" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}