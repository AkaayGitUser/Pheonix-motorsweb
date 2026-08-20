import Hero from "@/Components/Home/Hero";
import Exploremore from "@/Components/Home/exploremore";
import MomentsMotion from "@/Components/Home/momentsmotion";
import EnquiryBanner from "@/Components/Home/EnquiryBanner";
import Startjourney from "@/Components/Home/startjourney";
import Chooseus from "@/Components/Home/chooseus";
import BuildYourOwn from "@/Components/Home/buildyourown";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <EnquiryBanner />
        <Exploremore />
        <MomentsMotion />
        <Startjourney />
        <BuildYourOwn />
        <Chooseus />
      </main>
      <Footer />
    </div>
  );
}