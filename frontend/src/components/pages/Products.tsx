"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    title: "Organic Turmeric Powder",
    desc: "Pure ground turmeric rich in curcumin to boost immunity, reduce inflammation, and support joint health.",
    price: "Ksh 650",
    img: "https://i.ibb.co/GvvW78h6/turmeric.jpg",
    tag: "Herbal",
  },
  {
    title: "Cold-Pressed Coconut Oil",
    desc: "Natural moisturizer and cooking oil packed with antioxidants. Ideal for skin, hair, and healthy meals.",
    price: "Ksh 1,200",
    img: "https://i.ibb.co/VcPG4L54/coconut.jpg",
    tag: "Essential Oil",
  },
  {
    title: "Honey",
    desc: "Unprocessed, golden honey rich in natural enzymes and antioxidants. Perfect natural sweetener.",
    price: "Ksh 950",
    img: "https://i.ibb.co/wNpP7K7G/honey.jpg",
    tag: "Natural Food",
  },
  {
    title: "Herbal soap",
    desc: "Herbal soap made from 100% natural extracts to fight germs and give you a smooth, glowing and flawless skin.",
    price: "Ksh 300",
    img: "https://images.unsplash.com/photo-1615484477542-4e82dd52d4a7?w=800",
    tag: "HERBAL",
  },
  {
    title: "Vegan cake",
    desc: "Packed with vitamins, essential vitamins and minerals, this yummy cake fills your stomach while buiding your immunity.",
    price: "Ksh 600",
    img: "https://images.unsplash.com/photo-1600172454133-0a56d8a9e771?w=800",
    tag: "FOOD",
  },
  {
    title: "Activated Charcoal",
    desc: "Activated Charcoal helps detoxify the body by trapping toxins and impurities. It supports digestive health, clear skin, and natural cleansing from within.",
    price: "Ksh 1,350",
    img: "https://i.ibb.co/HfBMqBng/charcoal.jpg",
    tag: "Detoxifier",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-emerald-100">
      <div className="text-center mb-12">
        <p className="text-green-700 font-semibold uppercase tracking-wide">
          Our Products
        </p>
        <h2 className="text-4xl font-bold text-gray-800">
          Nature’s Finest Wellness Essentials
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Explore our curated collection of spices, natural foods, and essential oils — all crafted to nurture your health and restore balance naturally.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16">
        {products.map((product, i) => (
          <motion.div
            key={i}
            className="bg-white border border-gray-200 overflow-hidden transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative h-56 w-full">
              <img
                src={product.img}
                alt={product.title}
                className="object-cover w-full h-full"
              />
              <span className="absolute top-3 left-3 bg-green-700 text-white text-xs font-semibold px-3 py-1 uppercase">
                {product.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {product.desc}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-green-600 font-bold text-lg">{product.price}</p>
                <button className="bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 transition flex items-center gap-2 rounded-none">
                  <ShoppingCart size={16} /> Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-emerald-700 text-white px-6 py-3 font-semibold flex items-center gap-3 hover:bg-emerald-800 transition">
          <ShoppingCart /> Browse All Products
        </button>
      </div>
    </section>
  );
}
