"use client";

import { CheckCircle, ClipboardCheck, FlaskConical } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="bg-[#F1FAF6] py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side images */}
        <div className="grid grid-cols-2 gap-6 relative">
          <img
            src="https://i.ibb.co/5gK4pWxz/herbaltea.jpg"
            alt="herbal tea"
            className="rounded-2xl w-full h-48 md:h-56 lg:h-64 object-cover"
          />
          <img
            src="https://i.ibb.co/zT2RJgkF/honey.jpg"
            alt="honey"
            className="rounded-2xl w-full h-48 md:h-56 lg:h-64 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1614032686009-d9e9f3d02b45?auto=format&fit=crop&w=800&q=80"
            alt="Essential oils"
            className="rounded-2xl w-full h-48 md:h-56 lg:h-64 object-cover col-span-1"
          />
          <img
            src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80"
            alt="Wellness nature"
            className="rounded-2xl w-full h-48 md:h-56 lg:h-64 object-cover col-span-1"
          />

          {/* Years of experience card */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-md border border-gray-200 px-8 py-6 text-center">
            <h3 className="text-3xl font-bold text-[#4C63E6] mb-1">15+</h3>
            <p className="text-gray-700 font-medium">Years of Excellence</p>
          </div>
        </div>

        {/* Right side content */}
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-sm text-[#FF5C39] tracking-wider font-semibold uppercase">
            Our Mission
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Empowering Health Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">
              Natural Solutions
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            At Natural Integrated Wellness Center, we believe that true health comes from working
            with nature, not against it. For over 15 years, we've been helping thousands achieve
            lasting wellness through certified organic products and personalized holistic care.
          </p>

          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Our team of certified wellness experts combines traditional herbal wisdom with modern
            scientific research to create effective, safe, and sustainable health solutions tailored
            to your unique needs.
          </p>

          <ul className="space-y-4 max-w-lg mx-auto lg:mx-0">
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-green-400 rounded-lg">
                <CheckCircle className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">100% Certified Organic</h4>
                <p className="text-gray-500 text-sm">
                  All our products are certified organic and free from synthetic chemicals
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-green-400 rounded-lg">
                <ClipboardCheck className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Expert-Led Consultations</h4>
                <p className="text-gray-500 text-sm">
                  Personalized guidance from certified wellness professionals
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-green-400 rounded-lg">
                <FlaskConical className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Lab-Tested Quality</h4>
                <p className="text-gray-500 text-sm">
                  Every product undergoes rigorous testing for purity and potency
                </p>
              </div>
            </li>
          </ul>

          <button className="mt-6 bg-gradient-to-r from-sky-500 to-green-500 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            Learn More About Us →
          </button>
        </div>
      </div>
    </section>
  );
}
