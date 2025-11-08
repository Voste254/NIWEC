import React from "react";
import { Leaf, ShoppingBag, Calendar, Check } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-green-200 min-h-[90vh] pt-32 flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12">
      {/* LEFT SIDE */}
      <div className="flex-1 space-y-6 text-center lg:text-left mt-12 lg:mt-0">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
          <Leaf className="w-4 h-4" />
          Natural • Organic • Trusted
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Transform Your Health <br className="hidden md:block" />
          with{" "}
          <span className="bg-purple-600 bg-clip-text text-transparent">
            Nature's Wisdom
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
          Get personalized wellness solutions without harsh chemicals or synthetic
          ingredients. Our certified organic products and expert consultations help
          you achieve lasting health naturally.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="flex items-center justify-center gap-2 bg-[#23a455] hover:bg-[#1e8d48] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            <ShoppingBag className="w-5 h-5" />
            Shop Natural Products
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#23a455] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            <Calendar className="w-5 h-5" />
            Book Free Consultation
          </button>
        </div>

        {/* Subtext */}
        <p className="text-sm text-gray-500 italic flex items-center justify-center lg:justify-start gap-1">
          <Check className="w-4 h-4 text-green-500" />
          No obligation • Lab-tested products • Expert guidance
        </p>

        {/* Divider Line */}
        <div className="border-b border-[#d8e9d8] my-6 max-w-3xl mx-auto lg:mx-0"></div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-10">
          <div className="text-center lg:text-left">
            <p className="text-green-600 font-bold text-3xl">10K+</p>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-green-600 font-bold text-3xl">100%</p>
            <p className="text-gray-500 text-sm">Organic Certified</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-green-600 font-bold text-3xl">15+</p>
            <p className="text-gray-500 text-sm">Years Experience</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (Image first on mobile) */}
      <div className="flex-1 w-full flex justify-center lg:justify-end">
        <div className="relative max-w-md w-full rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://i.ibb.co/BHzZR7wQ/wellness.jpg"
            alt="Holistic Wellness"
            className="w-full h-full object-cover"
          />
          {/* Floating Card */}
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl shadow-md p-4 flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <Leaf className="text-purple-600 w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Holistic Wellness Approach
              </p>
              <p className="text-gray-500 text-sm">Mind, Body & Spirit Balance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
