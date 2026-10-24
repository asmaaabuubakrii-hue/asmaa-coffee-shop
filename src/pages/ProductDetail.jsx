import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import AddToCart from '../components/AddToCart';
import { FiArrowLeft, FiStar, FiCoffee } from 'react-icons/fi';

function ProductDetail() {
  const { id } = useParams();

  // Number(id) fayyadamuun id products.js keessa jiruun wal simsiisuu
  const product = products.find((item) => Number(item.id) === Number(id));

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-[#fcf8f5]">
        <FiCoffee className="text-6xl text-[#6f4e37] mb-4 animate-bounce" />
        <h2 className="text-3xl font-extrabold text-[#3d2314] mb-2">
          Product Not Found!
        </h2>
        <p className="text-gray-600 mb-6">
          Oops! The coffee you are looking for does not exist.
        </p>
        <Link 
          to="/menu" 
          className="bg-[#6f4e37] hover:bg-[#533824] text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all"
        >
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcf8f5] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Button */}
        <Link 
          to="/menu" 
          className="inline-flex items-center gap-2 text-[#6f4e37] hover:text-[#3d2314] font-semibold mb-8 transition-colors"
        >
          <FiArrowLeft className="text-xl" /> 
          Back to Menu
        </Link>

        {/* Product Detail Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#e8d8ce] grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
          
          {/* Image Box */}
          <div className="bg-[#fcf8f5] rounded-2xl p-6 flex items-center justify-center border border-[#f0e6df] min-h-[320px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-80 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center space-y-5">
            <div>
              <span className="inline-block bg-[#f4ece6] text-[#6f4e37] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                Freshly Brewed
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#3d2314] tracking-tight">
                {product.name}
              </h1>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-amber-500">
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <span className="text-sm font-semibold text-gray-500 ml-2">(4.9 / 5.0)</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {product.description}
            </p>

            {/* Price Tag */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-3xl font-extrabold text-[#6f4e37]">
                ${product.price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ${(Number(product.price) + 1.5).toFixed(2)}
              </span>
            </div>

            {/* Add to Cart Component */}
            <div className="pt-4 border-t border-[#f0e6df]">
              <AddToCart product={product} />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;