import React from 'react';

const testimonials = [
  {
    id: 1,
    content: "The craftsmanship of my engagement ring exceeded all expectations. It's more beautiful than I could have imagined.",
    author: "Emily Johnson",
    role: "New York, NY",
  },
  {
    id: 2,
    content: "I've been collecting fine jewelry for years, and VAULT pieces stand out for their exceptional quality and unique designs.",
    author: "Michael Chen",
    role: "Los Angeles, CA",
  },
  {
    id: 3,
    content: "The customer service was impeccable. They helped me design a custom piece that perfectly captured my vision.",
    author: "Sophia Rodriguez",
    role: "Chicago, IL",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Client Testimonials</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover what our clients have to say about their VAULT experience.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;