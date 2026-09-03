"use client";

import Chooseus from "@/Components/Home/chooseus";
import Exploremore from "@/Components/Home/exploremore";
import EnquiryBanner from "@/Components/Home/EnquiryBanner";
import Hero from "@/Components/Home/Hero";
import Momentsmotion from "@/Components/Home/momentsmotion";
//import StartJourney from "@/Components/Home/startjourney";
import Footer from "@/app/layout/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <EnquiryBanner />
        <Exploremore />
        <Momentsmotion />
        
        <Chooseus />
        <Footer />
      </main>
    </>
  );
}