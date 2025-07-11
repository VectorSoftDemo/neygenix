import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ValuesSection from '@/components/ValuesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      
      <HeroSection />
      <ServicesSection />
      <ValuesSection />

    </div>
  );
}
