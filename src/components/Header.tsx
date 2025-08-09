'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Order supplies', href: '/ordersupplies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
 
  { name: 'User Login', href: '/login' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-[#d7ecd6] to-[#cce7da] shadow-md sticky top-0 z-50">
      <div className="w-full px-4 md:px-8 flex justify-around items-center h-16 lg:h-20">
        <Link href="/" className="text-lg md:text-xl font-bold text-black ">
          NEUGENIX
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors ${isActive
                  ? 'bg-[#b9ddcb] text-black'
                    : 'text-black hover:text-[#fd7c7c]'
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-[#4a4e57]">
          {menuOpen ? <X className="w-6 h-6 cursor-pointer" /> : <Menu className="w-6 h-6 cursor-pointer" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-white shadow">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive
                    ? 'bg-green-100 text-[#22641e]'
                    : 'text-[#4a4e57] hover:text-[#65bc7b]'
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
