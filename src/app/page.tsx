'use client';

import HomePage from '@/components/HomePage';
import { useSelectedTab } from './layout';
import ServicesPage from '@/components/ServicesPage';
import CareersPage from '@/components/CareersPage';
import AboutPage from '@/components/AboutPage';
import ContactUs from '@/components/ContactUs';
import Toxicology from '@/components/Toxicology';
import Pharmacogenomics from '@/components/Pharmacogenomics';
import { useEffect, useState } from 'react';
import OrderSupplies from '@/components/OrderSupplies';
import Blogs from '@/components/Blogs';
type Tab = {
  item: string;
  subItem: string | null;
}

export default function Home() {
  const { selectedTab, setSelectedTab } = useSelectedTab();
  const [tab, setTab] = useState<Tab>({
    item: '',
    subItem: ''
  });
  console.log(selectedTab);
  useEffect(() => {
    setTab({
      item: selectedTab.item,
      subItem: selectedTab.subItem
    });
  }, [selectedTab]);
  return (
    <div className="">
      {tab.item === 'home' && <HomePage />} 
      {tab.item === 'about_us' && <AboutPage />   }
      {(tab.item === 'services' && tab.subItem === 'toxicology' || tab.item === 'services') && <Toxicology />}
      { (tab.item === 'services' && tab.subItem === 'pharmacogenomics') && <Pharmacogenomics />}
      {tab.item === "order_supplies" && <OrderSupplies />}
      {tab.item === 'careers' && <CareersPage />   }
      {tab.item === 'contact_us' && <ContactUs />   }
      {tab.item === 'blog' && <Blogs />}
    </div>
  );
}
