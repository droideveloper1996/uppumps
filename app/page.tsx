import AboutUsSection from "@/Pages/AboutSection";
import AchievementCardSlide from "@/Pages/AchievementCradSlide";
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
import WebNavbar from "@/Pages/WebNavbar";

export default function Home() {
  return (
    <>
      <WebNavbar />

      {/* <NewToolbar /> */}
      {/* <HeroSection /> */}
      {/* <VideoToolbar /> */}
      <HeroSection />
      <AboutUsSection />
      <TopProducts />
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
