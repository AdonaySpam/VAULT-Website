import { createStorefrontClient } from '@shopify/hydrogen-react';

// Initialize the Shopify client with proper domain format
export const shopifyClient = createStorefrontClient({
  storeDomain: `https://${import.meta.env.VITE_SHOPIFY_STORE_DOMAIN}`,
  publicStorefrontToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN,
  storefrontApiVersion: '2024-01'
});

// Helper function to fetch products with optional category filter
export async function getProducts(category?: string) {
  const { storefront } = shopifyClient;
  
  try {
    const { data, errors } = await storefront.query({
      query: `
        query GetProducts($first: Int!, $query: String) {
          products(first: $first, query: $query) {
            edges {
              node {
                id
                title
                handle
                description
                tags
                productType
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                      availableForSale
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        first: 250,
        query: category ? `product_type:'${category}' OR tag:'${category}'` : undefined
      }
    });

    if (errors?.length) {
      throw new Error(errors[0].message);
    }

    if (!data?.products) {
      throw new Error('No products data received from Shopify');
    }

    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

// Helper function to fetch a single product by handle
export async function getProductByHandle(handle: string) {
  const { storefront } = shopifyClient;
  
  try {
    const { data, errors } = await storefront.query({
      query: `
        query GetProductByHandle($handle: String!) {
          product(handle: $handle) {
            id
            title
            handle
            descriptionHtml
            tags
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  availableForSale
                }
              }
            }
          }
        }
      `,
      variables: {
        handle
      }
    });

    if (errors?.length) {
      throw new Error(errors[0].message);
    }

    if (!data?.product) {
      throw new Error('Product not found');
    }

    return data.product;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}