import { Link } from "react-router-dom";

import { FiMenu, FiX, FiHome, FiClipboard} from "react-icons/fi";
import { useState } from "react";


export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
 
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { to: "/inicio", label: "Inicio", icon: <FiHome /> },
    { to: "/projects", label: "Proyectos", icon: <FiClipboard /> },
    
  ];
 
  return (
    <nav className="bg-white shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              to="/home"
              className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-sky-900 to-blue-950 bg-clip-text text-transparent">
              Karianna Arriaga
            </Link>
          </div>
         
          <div className="">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white px-2 pt-2 pb-3 space-y-1 shadow-md">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
          
          
        </div>
      )}
    </nav>
  );
}