'use client'; // Add this line to mark the component as a Client Component

import Image from "next/image";
import Logo from "../../../public/Pictures/Logo (1).png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react"; // For toggling the menu in mobile view

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full p-4 bg-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <Image src={Logo} width={185} height={41} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          <Link href={"/"}>Home</Link>
          <Link href="/Shop">Shop</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/Contact"}>Contact</Link>
        </div>

        {/* Icons */}
        <div className="hidden lg:flex space-x-6">
          <MdPersonOutline className="text-xl cursor-pointer" />
          <CiSearch className="text-xl cursor-pointer" />
          <GoHeart className="text-xl cursor-pointer" />
          <Link href={'/cart'}>
            <AiOutlineShoppingCart className="text-xl cursor-pointer" />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
            {menuOpen ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <Link href={"/"}>Home</Link>
          <Link href="/Shop">Shop</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/Contact"}>Contact</Link>
        </div>
      )}
    </header>
  );
}
