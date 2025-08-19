import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Categories } from "@/components/sections/Categories";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Categories />
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default Index;
