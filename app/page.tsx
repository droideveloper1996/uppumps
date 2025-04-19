import AboutUsSection from "@/Pages/AboutSection";
import ContactSection from "@/Pages/ContactSection";
import FaqSection from "@/Pages/FaqSection";
import FeatureTabSection from "@/Pages/FeatureTabSection";
import Footer from "@/Pages/Footer";
import HeroSection from "@/Pages/HeroSection";
import ServicesSection from "@/Pages/ServicesSection";
import TestimonialsSection from "@/Pages/TestimonialsSection";
import VideoToolbar from "@/Pages/VideoToolbar";
import VisionMissionSection from "@/Pages/VisionMissionSection";

export default function Home() {
  return (
    <>
      {/* <Toolbar /> */}
      <VideoToolbar />
      <HeroSection />
      <AboutUsSection />
      <VisionMissionSection />
      <FeatureTabSection />
      <TestimonialsSection />
      <ServicesSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}
