import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List } from "lucide-react";
import { useState } from "react";

// Mock product data - in a real app, this would come from an API
const generateProducts = (category: string, count: number = 30) => {
  const products = [];
  const basePrice = Math.floor(Math.random() * 50000) + 10000;
  
  for (let i = 1; i <= count; i++) {
    products.push({
      id: `${category}-${i}`,
      name: `${category.charAt(0).toUpperCase() + category.slice(1)} Item ${i}`,
      price: basePrice + (Math.floor(Math.random() * 100000)),
      image: `https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&h=800&fit=crop&crop=center`,
      category: category.charAt(0).toUpperCase() + category.slice(1)
    });
  }
  return products;
};

export const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const products = generateProducts(category || 'all', 30);
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1) || 'All Products';

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {categoryName}
              <span className="text-primary ml-2">({products.length})</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our premium collection of {categoryName.toLowerCase()}
            </p>
          </div>

          {/* Filters and Controls */}
          <div className="flex items-center justify-between mb-8 p-4 bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg">
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="btn-outline-luxury">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-card border border-border/20 rounded px-3 py-2 text-foreground"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="btn-outline-luxury px-8 py-3">
              Load More Products
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};