'use client';

import HomePage from '@/components/HomePage';
import { useSelectedTab } from './layout';
import ServicesPage from '@/components/ServicesPage';
import CareersPage from '@/components/CareersPage';
import AboutPage from '@/components/AboutPage';

export default function Home() {
  const { selectedTab, setSelectedTab } = useSelectedTab();
  console.log(selectedTab);
  return (
    <div className="min-h-screen">
      {selectedTab.item === 'home' && <HomePage />}
      {selectedTab.item === 'about_us' && <AboutPage />   }
      {selectedTab.item === 'services' && <ServicesPage />   }
      {selectedTab.item === 'careers' && <CareersPage />   }
    </div>
  );
}
