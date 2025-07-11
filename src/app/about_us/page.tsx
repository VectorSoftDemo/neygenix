import AboutHeroSection from "../../components/about/AboutHeroSection";
import AboutMissionSection from "../../components/about/AboutMissionSection";
import AboutCoreValuesSection from "../../components/about/AboutCoreValuesSection";
import AboutVisionSection from "../../components/about/AboutVisionSection";
import AboutResponsibleCitizenshipSection from "../../components/about/AboutResponsibleCitizenshipSection";
import AboutCallToActionSection from "../../components/about/AboutCallToActionSection";

export default function AboutUs() {
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