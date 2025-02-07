"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { motion } from "framer-motion";

const ProductDetail = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: urlFor(product.image).url(),
      quantity,
    });
  };

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-9 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Product Image */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            height={1000}
            width={1000}
            className="rounded-lg object-cover max-w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-md space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-2xl text-green-600 font-semibold">$ {product.price}</p>

        <p className="text-gray-600">
          <span className="font-medium">Stock Level: </span>
          {product.stockLevel > 0 ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </p>

        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-4">
          <button
            onClick={decreaseQuantity}
            className="px-4 py-2 bg-gray-300 text-lg rounded-lg hover:bg-gray-400 transition"
          >
            -
          </button>
          <span className="text-xl font-bold">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-4 py-2 bg-gray-300 text-lg rounded-lg hover:bg-gray-400 transition"
          >
            +
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap space-x-4">
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105 w-full sm:w-auto"
          >
            <FaCartPlus className="inline-block mr-2" />
            Add to Cart
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition transform hover:scale-105 w-full sm:w-auto">
            <FaHeart className="inline-block mr-2" />
            Wishlist
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
