import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaUserLarge } from "react-icons/fa6";
import { GiWoodenChair } from "react-icons/gi";
import Header from "../component/header";
import Page from "../component/Ourpage";
import Field from "../component/Feild";

function Blog() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-10 bg-gray-100">
        <h1 className="text-2xl sm:text-4xl font-semibold">Blog</h1>
        <nav className="mt-4 text-gray-700 text-sm sm:text-lg flex items-center">
          <Link href="/" className="font-bold hover:underline">
            Home
          </Link>
          <span className="mx-2"> &gt; </span>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 sm:px-8 py-6">
        {/* Blog Posts Section */}
        <div className="lg:col-span-3 space-y-6">
          {[
            {
              image: "/sofaaa.png",
              title: "Going all-in with millennial design",
              category: "Crafts",
              date: "01 Jan 2023",
            },
            {
              image: "/Pictures/living.png",
              title: "Exploring new ways of decorating",
              category: "Design",
              date: "15 Mar 2023",
            },
            {
              image: "/Pictures/Images (4).png",
              title: "Handmade pieces that took time to make",
              category: "Wood",
              date: "20 Sep 2023",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <Image
                src={post.image}
                height={300}
                width={500}
                alt={`Image for ${post.title}`}
                className="rounded-lg w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <FaUserLarge />
                  <p>Admin</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCalendar />
                  <p>{post.date}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <GiWoodenChair />
                  <p>{post.category}</p>
                </div>
              </div>
              <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
              <p className="mt-2 text-gray-700 line-clamp-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                aperiam dolores modi non quas cum.
              </p>
              <Link
                href={`/blog/post-id-${index + 1}`}
                className="mt-4 block text-blue-500 hover:text-blue-700 underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Categories */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-4 text-gray-600">
              {[
                { name: "Sofa", count: 2 },
                { name: "Design", count: 8 },
                { name: "Handmade", count: 7 },
                { name: "Interior Frames", count: 1 },
                { name: "Wood Chair", count: 6 },
              ].map((category, index) => (
                <li key={index} className="flex justify-between text-sm">
                  <span>{category.name}</span>
                  <span className="text-gray-400">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <div className="space-y-6">
              {[
                {
                  image: "/sofaaa.png",
                  title: "Going all-in with millennial design",
                  date: "03 Aug 2022",
                },
                {
                  image: "/Pictures/living.png",
                  title: "Exploring new ways of decorating",
                  date: "03 Aug 2022",
                },
                {
                  image: "/Pictures/Images (2).png",
                  title: "Handmade pieces that took time to make",
                  date: "03 Aug 2022",
                },
                {
                  image: "/Pictures/Images (4).png",
                  title: "Modern home in Milan",
                  date: "03 Aug 2022",
                },
                {
                  image: "/Pictures/inner.png",
                  title: "Redesign your home",
                  date: "03 Aug 2022",
                },
              ].map((post, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Image
                    src={post.image}
                    height={80}
                    width={80}
                    alt=""
                    className="rounded-lg object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-md font-semibold">{post.title}</h4>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom Components */}
      <div className="text-center py-6">
        <Page />
        <Field />
      </div>
    </>
  );
}

export default Blog;
