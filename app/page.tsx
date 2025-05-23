import AboutUsSection from "@/Pages/AboutSection";
import AchievementCardSlide from "@/Pages/AchievementCradSlide";
import CatalogueSection from "@/Pages/CatalogueSection";
import ContactSection from "@/Pages/ContactSection";
import FaqSection from "@/Pages/FaqSection";
import FeatureTabSection from "@/Pages/FeatureTabSection";
import Footer from "@/Pages/Footer";
import HeroSection from "@/Pages/HeroSection";
import NewToolbar from "@/Pages/NewToolbar";
import ServicesSection from "@/Pages/ServicesSection";
import TestimonialsSection from "@/Pages/TestimonialsSection";
import TopProducts from "@/Pages/TopProducts";
import VideoToolbar from "@/Pages/VideoToolbar";
import VisionMissionSection from "@/Pages/VisionMissionSection";
import WebVideoNavbar from "@/Pages/WebVideoNavbar";

export default function Home() {
  return (
    <>
      <WebVideoNavbar />

      {/* <NewToolbar /> */}
      {/* <HeroSection /> */}
      {/* <VideoToolbar /> */}
      <HeroSection />
      <AboutUsSection />
      <TopProducts />
      <CatalogueSection />
      <VisionMissionSection />
      <AchievementCardSlide />
      {/* <FeatureTabSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <ServicesSection /> */}
      {/* <FaqSection /> */}
      {/* <ContactSection /> */}
      <Footer />
    </>
  );
}
