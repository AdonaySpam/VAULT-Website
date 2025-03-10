import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="flex items-center justify-center py-16 px-8 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-2xl font-serif tracking-widest text-black mb-2">ABOUT US</h2>
                <div className="w-16 h-0.5 bg-black"></div>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed">
                At <span className="font-medium">VAULT</span>, we believe that jewelry is more than just an accessory—it's a statement of elegance, individuality, and timeless beauty. Inspired by the sophistication of classic designs and the boldness of modern craftsmanship, we create pieces that elevate your style and become treasured keepsakes.
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                Rooted in the philosophy that true elegance is eternal, our mission is to bring you pieces that <span className="font-medium">lock in your story, your style, and your essence—forever</span>.
              </p>

              <p className="text-base text-gray-700 italic leading-relaxed">
                Welcome to <span className="font-medium">VAULT</span>—where every piece is a treasure waiting to be discovered.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[500px] md:h-auto flex items-center justify-center">
          <div className="w-[90%] h-[90%] relative">
            <img
              src="/bracelet 2.png"
              alt="Luxury gold bracelet with diamonds"
              className="absolute inset-0 w-full h-full object-contain object-center transform -translate-x-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;