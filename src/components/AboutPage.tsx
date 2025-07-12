import AboutCallToActionSection from "./about/AboutCallToActionSection";
import AboutCoreValuesSection from "./about/AboutCoreValuesSection";
import AboutHeroSection from "./about/AboutHeroSection";
import AboutMissionSection from "./about/AboutMissionSection";
import AboutResponsibleCitizenshipSection from "./about/AboutResponsibleCitizenshipSection";
import AboutVisionSection from "./about/AboutVisionSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
    <AboutHeroSection />
    <AboutMissionSection />
    <AboutCoreValuesSection />
    <AboutVisionSection />
    <AboutResponsibleCitizenshipSection />
    <AboutCallToActionSection />
  </div>
  );
}