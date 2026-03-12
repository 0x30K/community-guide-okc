import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import FeaturedResources from "@/components/FeaturedResources";
import QuickAccess from "@/components/QuickAccess";
import ImpactStory from "@/components/ImpactStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CategoryNav />
        <FeaturedResources />
        <QuickAccess />
        <ImpactStory />
      </main>
      <Footer />
    </>
  );
}
