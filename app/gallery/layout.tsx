import Footer from "@/Pages/Footer";
import WebNavbar from "@/Pages/WebNavbar";

const GalleryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WebNavbar />
      {children}
      <Footer />
    </>
  );
};

export default GalleryLayout;
