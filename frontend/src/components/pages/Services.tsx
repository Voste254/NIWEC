import { motion, Variants } from "framer-motion";

const wellnessData = [
  {
    title: "Personalized Nutrition Plans",
    description:
      "Our experts design personalized meal plans based on your lifestyle, goals, and body needs. Whether you’re managing weight, boosting immunity, or improving energy levels, we ensure that every plan is practical, balanced, and sustainable. Each plan includes a weekly shopping guide, portion control advice, and recommended natural supplements to help you stay on track and thrive every day.",
    image:
      "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Holistic Fitness Coaching",
    description:
      "We combine yoga, meditation, strength training, and recovery techniques to help you achieve physical and mental balance. Our fitness programs are adaptable to all ages and fitness levels, focusing on improving posture, flexibility, and endurance while reducing stress. With online and in-person sessions, we guide you step-by-step toward a healthier and stronger version of yourself.",
    image:
      "https://i.ibb.co/355q6qtJ/fitness.jpg",
  },
  {
    title: "Natural Supplements Guidance",
    description:
      "Nature provides the best healing tools — if you know how to use them. Our team of herbalists and nutritionists carefully selects organic supplements and herbal remedies tailored to your health concerns. From improving sleep quality and energy levels to supporting hormonal balance and immunity, we help you build a safe, effective, and natural supplement routine backed by research and tradition.",
    image:
      "https://i.ibb.co/tP4PbdLw/supplements.jpg",
  },
  {
    title: "Mental Wellness Programs",
    description:
      "Our mental wellness programs are crafted to bring calm, clarity, and emotional resilience. Using mindfulness, meditation, and guided journaling, we help you reconnect with your inner self and release daily stress. Whether you’re battling anxiety, burnout, or simply seeking peace, our holistic approach ensures your mental health is cared for with compassion and natural balance.",
    image:
      "https://i.ibb.co/S7skFwx1/mental.jpg",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const PersonalizedWellness = () => {
  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Personalized Wellness Solutions
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience a complete transformation with holistic wellness programs
          designed around your mind, body, and spirit — because true health
          starts from within.
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
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
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
