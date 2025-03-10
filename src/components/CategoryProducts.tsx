import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getProducts } from '../lib/shopify';
import { Money } from '@shopify/hydrogen-react';

const CategoryProducts: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  
  // Extract category from pathname and clean it
  const category = location.pathname.substring(1).replace(/s$/, '');

  const formatTitle = (category: string) => {
    return (category + 's').toUpperCase();
  };

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      if (!mounted) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const productsData = await getProducts(category);
        if (!mounted) return;
        
        if (!productsData?.edges) {
          throw new Error('Invalid product data received');
        }
        
        setProducts(productsData.edges);
      } catch (err) {
        if (!mounted) return;
        console.error('Error loading products:', err);
        setError('Unable to load products. Please try again later.');
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, [category]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">{formatTitle(category)}</h1>
            <p className="text-gray-600 mt-4">No products found in this category.</p>
            <Link 
              to="/collections/all"
              className="mt-6 inline-block px-6 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif mb-4">{formatTitle(category)}</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {products.map(({ node: product }) => (
            <Link 
              key={product.id} 
              to={`/products/${product.handle}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-sm">
                {product.images?.edges?.[0]?.node?.url && (
                  <img
                    src={product.images.edges[0].node.url}
                    alt={product.images.edges[0].node.altText || product.title}
                    className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-400 transition-colors duration-200">
                  {product.title}
                </h3>
                {product.priceRange?.minVariantPrice && (
                  <p className="text-sm text-gray-900 font-medium">
                    <Money
                      data={{
                        amount: product.priceRange.minVariantPrice.amount,
                        currencyCode: product.priceRange.minVariantPrice.currencyCode,
                      }}
                    />
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;