import React, { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import products from '../data/products';
import { Link } from 'react-router-dom';
import AddToCart from '../components/AddToCart';

function Menu() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProduct = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="bg-[#fdf8f4] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#e07a5f] mb-2">
            Our Menu
          </h1>
          <p className="text-gray-600">Explore our wide variety of coffees and treats.</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <input
            type="text"
            placeholder="Search coffee..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e07a5f] bg-white shadow-sm"
          />
          <FiSearch className="absolute left-3 top-3.5 text-gray-400 text-xl" />
        </div>

        {/* Products Grid List */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProduct.map((product) => (
            <div
              key={product.id}
              className="border border-[#e07a5f]/20 rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Card Contents Wrapped inside Link */}
              <Link to={`/product/${product.id}`} className="block group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-200"
                />
                <h3 className="text-xl font-bold text-[#4a2a21] group-hover:text-[#e07a5f] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 my-1 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-lg font-bold text-[#e07a5f] mt-2">
                  ${product.price}
                </p>
              </Link>

              {/* Action Buttons */}
              <div className="mt-4 flex flex-col gap-2">
                <AddToCart product={product} />

                {/* Explicit Clickable View Details Button */}
                <Link
                  to={`/product/${product.id}`}
                  className="w-full block text-center bg-[#4a2a21] hover:bg-[#321c16] text-white py-2.5 px-4 rounded-xl text-sm font-semibold cursor-pointer transition-colors"
                >
                  View Details
                </Link>
              </div>

            </div>
          ))}
        </div>

        {filteredProduct.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No coffee found matching your search.
          </div>
        )}

      </div>
    </div>
  );
}

export default Menu;