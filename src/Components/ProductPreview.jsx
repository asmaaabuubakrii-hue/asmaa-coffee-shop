import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import AddToCart from './AddToCart';

function ProductPreview() {
  return (
    <section className="py-14 md:py-18 bg-[#fdf8f4]">
      <div className="max-w-6xl mx-auto px-10">
        <div className="mb-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#e07a5f]">
            Popular Picks
          </h2>
        </div>

        {/* Tarree products map gochuun agarsiisuus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-[#f4e4d7] shadow-md overflow-hidden p-4"
            >
              {/* Fakkii Product */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Barruu Product */}
              <div className="mt-3">
                <h3 className="text-xl font-bold text-[#e07a5f]">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {product.description}
                </p>

                {/* Gatii fi Button Add to cart (Sarara tokko irra) */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-lg font-bold text-[#e07a5f]">
                    ${product.price}
                  </p>

                  <AddToCart product={product} />
                </div>

                {/* Button View Details (Jala irratti guutuu) */}
                <button className="w-full mt-3 py-2 bg-[#e07a5f] text-white text-sm rounded-xl font-medium hover:bg-[#c86349] transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductPreview;