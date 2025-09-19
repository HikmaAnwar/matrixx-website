import ProductsHeroSection from '@/components/sections/products/ProductsHeroSection';
import ProductsContentSection from '@/components/sections/products/ProductsContentSection';
import ProductsShowcaseSection from '@/components/sections/products/ProductsShowcaseSection';
import ProductsExploreSection from '@/components/sections/products/ProductsExploreSection';

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <ProductsHeroSection />
      <ProductsContentSection />
      <ProductsShowcaseSection />
      <ProductsExploreSection />
    </div>
  );
}
