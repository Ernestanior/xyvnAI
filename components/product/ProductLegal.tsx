'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { Shield, FileText, ArrowRight } from 'lucide-react';

export default function ProductLegal({ product }: { product: Product }) {
  const legalLinks = [
    {
      title: 'Privacy Policy',
      description: 'Learn how we collect, use, and protect your personal information and data.',
      icon: Shield,
      href: `/products/${product.slug}/privacy`,
      color: 'accent-primary',
    },
    {
      title: 'Terms of Service',
      description: 'Read our terms and conditions for using the service, including your rights and responsibilities.',
      icon: FileText,
      href: `/products/${product.slug}/terms`,
      color: 'accent-secondary',
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold mb-8">Legal Information</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparency and trust are fundamental to our relationship with users. 
            Review our legal documents to understand how we protect your interests.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-8" />
        </motion.div>

        {/* Legal Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {legalLinks.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={item.href}>
                <div className="group h-full p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.04] hover:border-accent-primary/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                  <div className={`inline-flex p-3 rounded-xl mb-6 ${
                    item.color === 'accent-primary' 
                      ? 'bg-accent-primary/10 border border-accent-primary/20' 
                      : 'bg-accent-secondary/10 border border-accent-secondary/20'
                  }`}>
                    <item.icon 
                      className={item.color === 'accent-primary' ? 'text-accent-primary' : 'text-accent-secondary'} 
                      size={24} 
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 group-hover:text-accent-primary transition-colors">
                    <span>Read Full Document</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm">
            Have questions about our policies? Contact us at{' '}
            <a 
              href="mailto:legal@xyvn.com" 
              className="text-accent-primary hover:underline"
            >
              legal@xyvn.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}