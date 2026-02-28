import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/lib/products';
import ProductHero from '@/components/product/ProductHero';
import ProductScreenshots from '@/components/product/ProductScreenshots';
import ProductFeatures from '@/components/product/ProductFeatures';
import ProductUseCases from '@/components/product/ProductUseCases';
import ProductTestimonials from '@/components/product/ProductTestimonials';
import ProductTechStack from '@/components/product/ProductTechStack';
import ProductLegal from '@/components/product/ProductLegal';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: 'Not Found' };
  
  return {
    title: `${product.name} - ${product.tagline} | XYVN`,
    description: product.description[0],
    openGraph: {
      title: `${product.name} - ${product.tagline}`,
      description: product.description[0],
      images: [product.heroImage],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <ProductHero product={product} />
      <ProductScreenshots product={product} />
      <ProductFeatures product={product} />
      <ProductUseCases product={product} />
      <ProductTestimonials product={product} />
      <ProductTechStack product={product} />
      <ProductLegal product={product} />
    </main>
  );
}