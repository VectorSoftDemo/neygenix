'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function   Header({setSelectedTab, selectedTab}: {setSelectedTab: (tab: {item:string, subItem:string | null}) => void, selectedTab: {item:string, subItem:string | null} }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const path = usePathname();
  const [currentPath, setCurrentPath] = useState('/');
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      name: 'Home',
      value: 'home'
    },
    {
      name: 'About Us',
      value: 'about_us'
    },
     {
      name: 'Services',
      value: 'services',
      subItems: [
        {
          name: 'Toxicology',
          value: 'toxicology'
        },
        {
          name: 'Pharmacogenomics',
          value: 'pharmacogenomics'
        },
      ]
    },
    {
      name: 'Careers',
      value: 'careers'
    },
    {
      name: 'Order supplies',
      value: 'order_supplies'
    },
    {
      name: 'Contact Us',
      value: 'contact_us'
    },
    {
      name: 'Blog',
      value: 'blog'
    },
    {
      name: 'User Login',
      value: 'user_login'
    }
  ]
useEffect(() => {
  if(path !== currentPath) {
    setCurrentPath(path);
    console.log(currentPath);
  }else{
    setCurrentPath('home');
  }

}, [path]);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="2xl:text-2xl sm:text-xs  2xl:px-4 sm:px-2 font-bold text-[#65bc7b]">
              AEON Global Health
            </Link>
          </div>
          <div className="flex items-center h-full">
            {!isMobile && <div className="flex items-center gap-4 h-full">
              {navItems.map((item) => (
                <div key={item.value} className="relative group h-full">
                  <button onClick={() => item.subItems !== undefined ? "": setSelectedTab({item:item.value, subItem:null})} className={`text-[#4a4e57] h-full flex items-center hover:text-[#65bc7b] hover:pb-1 transition-colors hover:border-t-4 hover:border-[#65bc7b] ${selectedTab.item === item.value ? 'border-t-4 border-[#65bc7b] pb-1 text-[#65bc7b]' : ''}`}>
                    {item.name}
                  </button>
                  {item.subItems && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.subItems.map((subItem) => (
                        <p key={subItem.value} 
                        className={`block px-4 py-2 text-sm text-[#4a4e57] hover:bg-gray-100 ${selectedTab.subItem === subItem.value ? 'bg-gray-100' : ''}`}
                        onClick={() => setSelectedTab({item:item.value, subItem:subItem.value})}
                        >
                          {subItem.name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>}
            {isMobile && <div className="flex items-center gap-4 h-full">
              <button 
                onClick={toggleMenu}
                className="text-[#4a4e57] hover:text-[#65bc7b] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>}
          </div>

          
        </div>

        {isMenuOpen && (
          <div className="md:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link 
                  key={item.value} 
                  href={item.value} 
                  className={`block px-3 py-2 text-[#4a4e57] hover:text-[#65bc7b] ${currentPath === item.value ? 'text-[#65bc7b]' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}