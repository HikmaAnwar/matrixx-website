import ProductsHeroSection from '@/components/sections/products/ProductsHeroSection';
import ProductsContentSection from '@/components/sections/products/ProductsContentSection';
import ProductsExploreSection from '@/components/sections/products/ProductsExploreSection';

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <ProductsHeroSection />
      <ProductsContentSection />
      <ProductsExploreSection />
    </div>
  );
}
