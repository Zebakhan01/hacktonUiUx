"use client"; // Ensures it's a Client Component

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Pictures/Logo (1).png";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image src={Logo} width={185} height={41} alt="Funiro Logo" priority />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <Link href="/" className="hover:text-gray-600 transition">Home</Link>
          <Link href="/Shop" className="hover:text-gray-600 transition">Shop</Link>
          <Link href="/Blog" className="hover:text-gray-600 transition">Blog</Link>
          <Link href="/Contact" className="hover:text-gray-600 transition">Contact</Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden lg:flex space-x-6 text-xl">
          <MdPersonOutline className="cursor-pointer hover:text-gray-600 transition" />
          <CiSearch className="cursor-pointer hover:text-gray-600 transition" />
          <GoHeart className="cursor-pointer hover:text-gray-600 transition" />
          <Link href="/cart">
            <AiOutlineShoppingCart className="cursor-pointer hover:text-gray-600 transition" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden fixed inset-0 bg-white p-6 space-y-4 flex flex-col items-center justify-center z-50 shadow-md"
        >
          <Link href="/" className="text-xl hover:text-gray-600 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/Shop" className="text-xl hover:text-gray-600 transition" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/Blog" className="text-xl hover:text-gray-600 transition" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/Contact" className="text-xl hover:text-gray-600 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
          
          {/* Icons for Mobile */}
          <div className="flex space-x-6 mt-4 text-2xl">
            <MdPersonOutline className="cursor-pointer hover:text-gray-600 transition" />
            <CiSearch className="cursor-pointer hover:text-gray-600 transition" />
            <GoHeart className="cursor-pointer hover:text-gray-600 transition" />
            <Link href="/cart">
              <AiOutlineShoppingCart className="cursor-pointer hover:text-gray-600 transition" />
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
