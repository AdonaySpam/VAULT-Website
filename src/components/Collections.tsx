import React from 'react';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 1,
    name: 'NECKLACES',
    description: 'Inspired by the night sky, featuring stars, moons, and cosmic elements.',
    image: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/necklaces'
  },
  {
    id: 2,
    name: 'BRACELETS',
    description: 'Timeless designs that draw from classical jewelry traditions.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/bracelets'
  },
  {
    id: 3,
    name: 'RINGS',
    description: 'Delicate pieces inspired by the beauty of nature and floral elements.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/rings'
  },
  {
    id: 4,
    name: 'WATCHES',
    description: 'Elegant timepieces for the modern individual.',
    image: 'https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/watches'
  },
  {
    id: 5,
    name: 'GIFTS',
    description: 'Perfect presents for your loved ones.',
    image: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: '/gifts'
  }
];

const Collections: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Collections</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Each collection tells a unique story through exceptional craftsmanship and design.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          {collections.map((collection) => (
            <Link 
              key={collection.id} 
              to={collection.link}
              className="group relative block"
            >
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl text-gray-900 font-semibold">
                {collection.name}
              </h3>
              <p className="text-base text-gray-500">{collection.description}</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/collections/all"
            className="inline-block border border-gray-900 rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-900 hover:text-white"
          >
            Explore All Collections
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;