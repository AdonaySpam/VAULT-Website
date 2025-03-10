import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import CategoryProducts from './components/CategoryProducts';
import AdminProducts from './components/AdminProducts';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FeaturedProducts />
              <AboutUs />
            </>
          } />
          <Route path="/collections/all" element={<Products />} />
          <Route path="/products/:handle" element={<ProductDetailWrapper />} />
          <Route path="/necklaces" element={<CategoryProducts />} />
          <Route path="/bracelets" element={<CategoryProducts />} />
          <Route path="/rings" element={<CategoryProducts />} />
          <Route path="/watches" element={<CategoryProducts />} />
          <Route path="/gifts" element={<CategoryProducts />} />
          <Route path="/admin/products" element={<AdminProducts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Wrapper component to handle route parameters
const ProductDetailWrapper: React.FC = () => {
  const params = useParams<{ handle: string }>();
  return params.handle ? <ProductDetail handle={params.handle} /> : null;
};

export default App;