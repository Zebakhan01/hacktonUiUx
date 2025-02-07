"use client";

import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ShoppingCart() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="relative">
      {/* Cart Icon Button */}
      <button
        onClick={toggleCart}
        className="text-black p-2 hover:bg-gray-200 rounded transition"
        aria-label="Toggle Shopping Cart"
      >
        <AiOutlineShoppingCart size={23} />
      </button>

      {/* AnimatePresence for Smooth Open/Close Animation */}
      <AnimatePresence>
        {isCartVisible && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full bg-white shadow-lg sm:w-[350px] md:w-[400px] lg:w-[450px] flex flex-col z-50"
          >
            {/* Cart Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <button onClick={toggleCart} className="text-gray-600 hover:text-gray-900 transition">
                <IoClose size={24} />
              </button>
            </div>

            {/* Cart Items Section */} 
            <div className="p-4 overflow-y-auto flex-1">
              <div className="flex items-center justify-between border-b pb-4">
                {/* Product Image */}
                <div className="flex">
                  <Image
                    src="/sofaaa.png"
                    height={100}
                    width={100}
                    alt="Asgaard Sofa"
                    className="object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium">Asgaard Sofa</h3>
                    <p className="text-gray-600">1 x <span className="text-yellow-600">Rs. 250.000.00</span></p>
                  </div>
                </div>
                
                {/* Remove Button */}
                <button className="bg-gray-500 h-[30px] w-[30px] text-white rounded-full flex justify-center items-center hover:bg-gray-700 transition">
                  <span className="text-lg font-medium">×</span>
                </button>
              </div>
            </div>

            {/* Cart Footer (Subtotal & Buttons) */}
            <div className="p-4 border-t">
              <div className="flex justify-between mb-4">
                <p className="font-medium">Subtotal</p>
                <p className="text-yellow-600 font-semibold">Rs. 250.000.00</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/viewcart" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto rounded-full text-black bg-white border border-black px-6 py-2 hover:bg-gray-800 hover:text-white transition">
                    View Cart
                  </button>
                </Link>
                <Link href="/checkout" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto rounded-full text-black bg-white border border-black px-6 py-2 hover:bg-gray-800 hover:text-white transition">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
