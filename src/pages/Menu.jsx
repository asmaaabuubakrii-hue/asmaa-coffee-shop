import React, { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import { products } from '../data/products';

function Menu() {
  const [searchQuery, setSearchQuery] = useState("");

  // Search query irratti hundaa'uun product filter gochuu
  const filteredProduct = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="bg-[#fdf8f4] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#e07a5f] mb-2">
            Our Menu
          </h1>
          <p className="text-lg text-gray-500">
            Discover our premium selection of coffee.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="mb-8 relative">
          <FiSearch className="absolute left-5 top-4 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search for coffee...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-[#e07a5f] rounded-xl focus:outline-none bg-white"
          />
        </div>

        {/* Products Grid List */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProduct.map((product) => (
            <div
              key={product.id}
              className="border border-[#e07a5f] rounded-2xl bg-white overflow-hidden p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#4a2a21]">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 my-1">
                  {product.description}
                </p>
                <p className="text-lg font-bold text-[#e07a5f] mt-2">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Menu;