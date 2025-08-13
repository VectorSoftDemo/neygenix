'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Order Supplies', href: '/ordersupplies' },
  // { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
  // { name: 'User Login', href: '/login' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);
  const pathname = usePathname();

  // Responsive: show/hide navs based on screen size using Tailwind breakpoints
  // - Mobile: only hamburger, menu slides down
  // - md: show first 5, rest in "More" dropdown
  // - lg+: show all nav items inline

  return (
    // <nav className="bg-gradient-to-r from-[#6a9dd6] via-[#7bb6f7] to-[#b3d8f7] shadow-2xl fixed top-0 z-50 backdrop-blur-md w-full h-20 md:h-24 xl:h-28">
    <nav className="bg-gradient-to-r from-[#5ebb59] via-[#a3e29f] to-[#83c4a3] shadow-2xl fixed top-0 z-50 backdrop-blur-md w-full h-15 md:h-18 xl:h-24">
      <div className="max-w-full  px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20 xl:h-24">
          {/* Logo (not a link), with image */}
          <div className="flex flex-row items-center flex-shrink-0 select-none cursor-pointer">
            {/* <Image
              src="/logo.webp"
              alt="Neugenix Logo"
              width={80}
              height={80}
              priority={true}
              className="object-contain w-16 h-16 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
            /> */}
            <span className=" text-lg md:text-2xl lg:text-3xl font-bold text-black hover:text-green-700 transition-colors duration-200">
              NEUGENIX
            </span>
          </div>

          {/* Desktop Navigation (lg and up) */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            {navItems.map((item) => {
              // ✅ Updated active check: also works for subpages
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 xl:px-4 py-2 rounded-lg text-sm sm:text-base lg:text-lg xl:text-xl font-semibold transition-all duration-200 ${isActive
                      ? 'bg-white/70 text-green-800 shadow-md'
                      : 'text-gray-900 hover:text-green-700 hover:bg-white/50'
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Medium screens navigation (md to lg-) */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {navItems.slice(0, 5).map((item) => {
              // ✅ Updated active check
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${isActive
                      ? 'bg-white/70 text-green-800 shadow-md'
                      : 'text-gray-700 hover:text-green-700 hover:bg-white/50'
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Dropdown for remaining items on medium screens */}
            <div
              className="relative group"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                className="px-2 py-2 rounded-lg text-xs font-medium text-gray-700 hover:text-green-700 hover:bg-white/50 transition-all duration-200"
                onClick={() => setMoreOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={moreOpen}
                type="button"
              >
                More
              </button>
              <div
                className={`absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border border-green-100 transition-all duration-200 z-20
                ${moreOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
              `}
              >
                {navItems.slice(5).map((item) => {
                  // ✅ Updated active check
                  const isActive =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 text-sm font-medium rounded-lg m-1 transition-colors duration-200 ${isActive
                          ? 'bg-green-50 text-green-800'
                          : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                        }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle (below md) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-green-700 hover:bg-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Toggle mobile menu"
            type="button"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (below md) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white backdrop-blur-sm shadow-lg border-t border-green-100">
          {navItems.map((item) => {
            // ✅ Updated active check
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${isActive
                    ? 'bg-green-200 text-green-900  border-green-600'
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50 hover:translate-x-1'
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
