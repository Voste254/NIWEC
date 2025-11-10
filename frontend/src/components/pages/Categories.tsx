"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Herbal Detox Tea",
    category: "Herbal Remedies",
    price: "KSh 1,200",
    image: "https://i.ibb.co/5gK4pWxz/herbaltea.jpg",
  },
  {
    id: 2,
    name: "Organic Honey",
    category: "Natural Foods",
    price: "KSh 850",
    image: "https://i.ibb.co/zT2RJgkF/honey.jpg",
  },
  {
    id: 3,
    name: "Masala Chai Blend",
    category: "Natural Foods",
    price: "KSh 950",
    image: "https://i.ibb.co/8Vn84Wn/mosala.jpg",
  },
  {
    id: 4,
    name: "Essential Oil Pack",
    category: "Essential Oils",
    price: "KSh 2,000",
    image: "https://i.ibb.co/0hZfjLB/essentialoils.jpg",
  },
  {
    id: 5,
    name: "Wellness Capsules",
    category: "Supplements",
    price: "KSh 1,500",
    image: "https://i.ibb.co/3FkVhmL/supplements.jpg",
  },
  {
    id: 6,
    name: "Aloe Vera Gel",
    category: "Skin Care",
    price: "KSh 1,100",
    image: "https://i.ibb.co/9vyqg5d/aloevera.jpg",
  },
  {
    id: 7,
    name: "Turmeric Capsules",
    category: "Supplements",
    price: "KSh 1,400",
    image: "https://i.ibb.co/kGWfXcM/turmeric.jpg",
  },
  {
    id: 8,
    name: "Relaxing Lavender Oil",
    category: "Essential Oils",
    price: "KSh 1,250",
    image: "https://i.ibb.co/D7FZjTY/lavenderoil.jpg",
  },
];

const categories = [
  "All",
  "Herbal Remedies",
  "Essential Oils",
  "Supplements",
  "Natural Foods",
  "Skin Care",
];

export default function ProductCategories() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="bg-[#F1FAF6] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="text-sm text-[#FF5C39] tracking-wider font-semibold uppercase">
          Our Products
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-2">
          Explore Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">
            Natural Collections
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Discover our range of organic, plant-based, and sustainable products crafted to
          support your journey to natural wellness.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-sky-500 to-green-500 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white  overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-left">
                <p className="text-sm text-gray-500">{product.category}</p>
                <h3 className="text-lg font-semibold text-gray-800 mt-1">
                  {product.name}
                </h3>
                <p className="text-green-600 font-bold mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

       <Link to='/'>
        <button className="mt-12 bg-gradient-to-r from-sky-500 to-green-500 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
          Back to HomePage →
        </button>
       </Link>

      </div>
    </section>
  );
}
