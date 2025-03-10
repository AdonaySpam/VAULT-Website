import { createStorefrontClient } from '@shopify/hydrogen-react';

const SHOPIFY_ADMIN_ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_ADMIN_ACCESS_TOKEN;
const SHOP_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;

export async function createProduct(productData: {
  title: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
}) {
  try {
    const response = await fetch(`https://${SHOP_DOMAIN}/admin/api/2024-01/products.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_ADMIN_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        product: {
          title: productData.title,
          body_html: productData.description,
          vendor: 'VAULT',
          product_type: productData.category,
          variants: [
            {
              price: productData.price,
              inventory_quantity: 1,
              inventory_management: 'shopify',
            },
          ],
          images: [
            {
              src: productData.imageUrl,
            },
          ],
          status: 'active',
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create product');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

export async function getAdminProducts() {
  try {
    const response = await fetch(`https://${SHOP_DOMAIN}/admin/api/2024-01/products.json`, {
      headers: {
        'X-Shopify-Access-Token': SHOPIFY_ADMIN_ACCESS_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function deleteProduct(productId: string) {
  try {
    const response = await fetch(
      `https://${SHOP_DOMAIN}/admin/api/2024-01/products/${productId}.json`,
      {
        method: 'DELETE',
        headers: {
          'X-Shopify-Access-Token': SHOPIFY_ADMIN_ACCESS_TOKEN,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to delete product');
    }

    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}