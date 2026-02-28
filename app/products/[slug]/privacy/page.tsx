import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/lib/products';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import React from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Not Found' };
  
  return {
    title: `Privacy Policy - ${product.name} | XYVN`,
    description: `Privacy Policy for ${product.name}. Learn how we collect, use, and protect your data.`,
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Parse markdown-style content to HTML
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactElement[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={index} className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {trimmedLine.replace('# ', '')}
          </h1>
        );
      } else if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-semibold mt-10 mb-4 text-white">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-medium mt-6 mb-3 text-gray-200">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        flushList();
        elements.push(
          <p key={index} className="text-sm text-gray-400 mb-6">
            {trimmedLine.replace(/\*\*/g, '')}
          </p>
        );
      } else if (trimmedLine.startsWith('- ')) {
        inList = true;
        listItems.push(trimmedLine.replace('- ', ''));
      } else if (trimmedLine === '') {
        flushList();
      } else if (trimmedLine) {
        flushList();
        // Handle bold text within paragraphs
        const formattedText = trimmedLine.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        elements.push(
          <p 
            key={index} 
            className="text-gray-300 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedText }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link 
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-accent-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to {product.name}</span>
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/20">
            <Shield className="text-accent-primary" size={28} />
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-wider">{product.name}</p>
            <h1 className="text-2xl font-semibold">Privacy Policy</h1>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl">
            {formatContent(product.privacyPolicy)}
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link 
            href={`/products/${product.slug}/terms`}
            className="text-gray-400 hover:text-accent-primary transition-colors"
          >
            View Terms of Service →
          </Link>
          <Link 
            href={`/products/${product.slug}`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Return to {product.name}
          </Link>
        </div>
      </div>
    </main>
  );
}