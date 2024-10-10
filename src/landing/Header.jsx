import React, { useState, useEffect } from 'react';
import Button from '../components/share/Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // If the user scrolls more than 50px, apply glassmorphism
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full flex items-center z-[4] justify-between fixed top-0 h-[60px] px-4 shadow-md transition-all duration-300 ${
          isScrolled
            ? 'bg-opacity-30 backdrop-blur-lg bg-blue-600   border-opacity-10' // glassmorphism effect
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="font-bold text-white text-2xl">LOGO</div>
        </div>

        {/* Tabs (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-3">
          <div className="tab px-2 text-zinc-300 hover:text-[aqua] font-semibold border-b-2 border-transparent hover:border-[aqua] hover:pb-2 cursor-pointer">
            Home
          </div>
          <div className="tab px-2 text-zinc-300 hover:text-[aqua] font-semibold border-b-2 border-transparent hover:border-[aqua] hover:pb-2 cursor-pointer">
            About
          </div>
          <div className="tab px-2 text-zinc-300 hover:text-[aqua] font-semibold border-b-2 border-transparent hover:border-[aqua] hover:pb-2 cursor-pointer">
            Plans
          </div>
          <div className="tab px-2 text-zinc-300 hover:text-[aqua] font-semibold border-b-2 border-transparent hover:border-[aqua] hover:pb-2 cursor-pointer">
            Contact
          </div>
        </div>

        {/* Login Button (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-2">
          <button className="mx-2 rounded-md bg-[aqua] text-black px-3 py-1 font-bold flex items-center">
            <Button text="Login / Register" onClick={() => navigate('/login')} />
          </button>
        </div>

        {/* Menu Icon (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            <svg
              className="w-6 h-6 text-[aqua]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar (only visible on mobile) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50">
          <div className="absolute top-0 right-0 p-4">
            <button onClick={toggleSidebar} className="text-red-600 text-4xl">
              &times;
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            <div className="tab text-white text-xl cursor-pointer hover:text-[aqua]" onClick={toggleSidebar}>
              Home
            </div>
            <div className="tab text-white text-xl cursor-pointer hover:text-[aqua]" onClick={toggleSidebar}>
              About
            </div>
            <div className="tab text-white text-xl cursor-pointer hover:text-[aqua]" onClick={toggleSidebar}>
              Plans
            </div>
            <div className="tab text-white text-xl cursor-pointer hover:text-[aqua]" onClick={toggleSidebar}>
              Contact
            </div>

            <button className="mt-6 rounded-md bg-[aqua] text-black px-6 py-2 font-bold">
              Login / Register
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
