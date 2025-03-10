import React, { useEffect, useState } from 'react';
import { Money } from '@shopify/hydrogen-react';
import { getProductByHandle } from '../lib/shopify';

interface ProductDetailProps {
  handle: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ handle }) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const productData = await getProductByHandle(handle);
        setProduct(productData);
        if (productData?.variants?.edges?.[0]?.node) {
          setSelectedVariant(productData.variants.edges[0].node);
        }
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [handle]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={product.images.edges[0]?.node.url}
              alt={product.images.edges[0]?.node.altText || product.title}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.edges.slice(1).map((image: any, index: number) => (
              <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={image.node.url}
                  alt={image.node.altText || `${product.title} view ${index + 2}`}
                  className="w-full h-full object-center object-cover cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <div className="text-2xl text-gray-900">
            <Money
              data={{
                amount: selectedVariant?.price?.amount || product.priceRange.minVariantPrice.amount,
                currencyCode: selectedVariant?.price?.currencyCode || product.priceRange.minVariantPrice.currencyCode,
              }}
            />
          </div>

          <div className="prose prose-sm text-gray-500" 
               dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />

          {/* Variants Selection */}
          {product.variants.edges.length > 1 && (
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Options</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.variants.edges.map((variant: any) => (
                  <button
                    key={variant.node.id}
                    onClick={() => setSelectedVariant(variant.node)}
                    className={`px-4 py-2 border rounded-md text-sm ${
                      selectedVariant?.id === variant.node.id
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-200 text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {variant.node.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            type="button"
            className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Add to Cart
          </button>

          {/* Additional Details */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-sm font-medium text-gray-900">Details</h3>
            <div className="mt-4 prose prose-sm text-gray-500">
              <ul role="list">
                {product.tags.map((tag: string) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;