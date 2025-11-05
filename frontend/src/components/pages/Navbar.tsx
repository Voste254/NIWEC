import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menus = [
    { name: "Shop", items: ["Herbal Products", "Supplements", "Essential Oils"] },
    { name: "Services", items: ["Wellness Consultation", "Detox Programs", "Holistic Therapy"] },
    { name: "Events", items: ["Workshops", "Retreats", "Community Outreach"] },
    { name: "About Us", items: ["Our Story", "Our Team", "Contact"] },
    { name: "Blog", items: ["Health Tips", "Nutrition", "Natural Remedies"] },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-green-200/80 backdrop-blur-sm"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="max-w-[100vw] flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 ">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/hJ3XCq8h/niwec-logo-removebg.png"
            alt="NIWEC Logo"
            className="h-24 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 relative">
          {menus.map((menu, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(index)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium transition">
                {menu.name}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openMenu === index ? "rotate-180 text-green-600" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {openMenu === index && (
                <div
                  className="absolute left-0 top-full mt-2 w-48 bg-white border shadow-lg rounded-lg p-2 z-[200] transition-all duration-300"
                  onMouseEnter={() => setOpenMenu(index)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {menu.items.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <a
            href="#consultation"
            className="px-6 py-2 bg-gradient-to-r from-[#ff7440] to-[#a043c2] text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Book Your Consultation
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="focus:outline-none"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          {menus.map((menu, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === index ? null : index)
                }
                className="w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-green-50 hover:text-green-600 flex justify-between items-center"
              >
                <span>{menu.name}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openMenu === index ? "rotate-180 text-green-600" : ""
                  }`}
                />
              </button>

              {/* Dropdown for Mobile */}
              {openMenu === index && (
                <div className="pl-6 pb-2 transition-all duration-300">
                  {menu.items.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-2 py-2 text-gray-600 hover:text-green-600 transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="flex flex-col space-y-2 p-4">
            <a
              href="#consultation"
              className="px-5 py-2 bg-gradient-to-r from-[#ff7440] to-[#a043c2] text-white rounded-md text-center hover:opacity-90 transition"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
