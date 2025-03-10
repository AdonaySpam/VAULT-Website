import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'NECKLACES',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    link: '/necklaces'
  },
  {
    id: 2,
    name: 'EARRINGS',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    link: '/earrings'
  },
  {
    id: 3,
    name: 'BRACELETS',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    link: '/bracelets'
  },
  {
    id: 4,
    name: 'RINGS',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    link: '/rings'
  },
  {
    id: 5,
    name: 'WATCHES',
    image: 'https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    link: '/watches'
  },
  {
    id: 6,
    name: 'GIFTS',
    image: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    link: '/gifts'
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <Link to="/collections/all">
            <h2 className="text-2xl font-serif tracking-widest text-black hover:text-blue-400 transition-colors duration-200">
              OUR PRODUCTS
            </h2>
          </Link>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={category.link}
                className="group flex-none w-48 snap-start"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-50">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-10 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-sm font-serif tracking-widest text-white text-center px-2">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/collections/all"
            className="inline-block px-12 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 font-serif tracking-widest text-sm"
          >
            SHOP ALL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;