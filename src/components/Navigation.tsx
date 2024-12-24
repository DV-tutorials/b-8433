import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Experience", path: "/experience" },
    { title: "Education", path: "/education" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a1a1a] z-50 px-6 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Portfolio</Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="hover:text-blue-400 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1a1a1a] py-4 px-6 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="block hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;