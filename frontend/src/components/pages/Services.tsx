import { motion, Variants } from "framer-motion";

const wellnessData = [
  {
    title: "Personalized Nutrition Plans",
    description:
      "Customized meal plans designed to match your body type, health goals, and lifestyle for optimal wellness.",
    image:
      "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Holistic Fitness Coaching",
    description:
      "A blend of physical training, yoga, and mindfulness to keep your body active and your mind calm.",
    image:
      "https://images.unsplash.com/photo-1594737625785-c9c18cfb3d1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Natural Supplements Guidance",
    description:
      "Expert guidance on the best natural supplements and herbs to boost immunity, energy, and vitality.",
    image:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mental Wellness Programs",
    description:
      "Therapeutic programs and stress-management techniques designed to restore emotional balance.",
    image:
      "https://images.unsplash.com/photo-1604881980739-8baf0f8fdc07?auto=format&fit=crop&w=800&q=80",
  },
];

// ✅ Define variants without breaking type constraints
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const PersonalizedWellness = () => {
  return (
    <section className="py-20 bg-gray-200 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Personalized Wellness Solutions
        </h2>
        <p className="text-gray-600 mb-12">
          Discover tailored programs designed to help you live healthier — mind,
          body, and soul.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wellnessData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                type: "spring",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <a
                  href="#"
                  className="text-green-700 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizedWellness;
