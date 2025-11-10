"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { CalendarCheck, ClipboardList, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

export default function WellnessJourney() {
  const steps = [
    {
      id: "01",
      title: "Book Consultation",
      description:
        "Schedule a free 30-minute consultation with our certified wellness experts to discuss your health goals and challenges.",
      icon: <CalendarCheck size={30} className="text-white" />,
      color: "from-cyan-500 to-green-500",
    },
    {
      id: "02",
      title: "Get Custom Plan",
      description:
        "Receive a personalized wellness plan with recommended products, dietary guidance, and lifestyle adjustments tailored to you.",
      icon: <ClipboardList size={30} className="text-white" />,
      color: "from-orange-400 to-pink-500",
    },
    {
      id: "03",
      title: "Transform Your Health",
      description:
        "Follow your plan with ongoing support from our team. Experience improvements in energy, vitality, and overall wellbeing.",
      icon: <HeartPulse size={30} className="text-white" />,
      color: "from-pink-500 to-purple-600",
    },
  ];

  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ scaleX: 1, transition: { duration: 1.5, ease: "easeInOut" } });
    }
  }, [isInView, controls]);

  return (
    <section className="w-full py-24 px-6 flex flex-col items-center justify-center bg-white">
      <div className="max-w-7xl w-full text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Your Journey to <br />
          Natural Wellness
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg mb-16 leading-relaxed max-w-2xl mx-auto font-normal">
          Get started in three simple steps and experience the transformative power of natural healing.
        </p>

        {/* Steps Section */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-16 md:gap-8 mt-10 w-[90%] mx-auto">
          {/* Gradient Progress Line - Positioned below the boxes */}
          <motion.div
            ref={lineRef}
            initial={{ scaleX: 0 }}
            animate={controls}
            className="absolute top-28 left-0 w-full h-[4px] origin-left bg-gradient-to-r from-cyan-500 via-orange-400 to-purple-600 rounded-full"
          ></motion.div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3"
            >
              {/* Step Box */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col items-center justify-center w-28 h-28 bg-gradient-to-br ${step.color} rounded-3xl mb-10 shadow-lg`}
              >
                {step.icon}
                <p className="text-white font-semibold text-lg mt-1">{step.id}</p>
              </motion.div>

              {/* Step Title & Description */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-40 bg-gradient-to-r from-sky-400 via-green-500 to-purple-600 rounded-3xl shadow-lg py-16 px-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Wellness Journey?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Book your free consultation today and discover how natural wellness can transform your life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to='/consultation'>
                        <button              
              className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              Book Your Consultation
            </button>
            </Link>

            <Link to='/categories'>
            <button
              className="border border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-sky-600 transition-all duration-300"
            >
              Shop Products
            </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}