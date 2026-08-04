

import Hero from "@/Components/Home/Hero";
import Chooseus from "@/Components/Home/chooseus";
import Exploremore from "@/Components/Home/exploremore";
import Momentsnmotion from "@/Components/Home/momentsmotion";
import Startjourney from "@/Components/Home/startjourney";
import Footer from "./layout/Footer";


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Chooseus />
        <Exploremore/>
        <Momentsnmotion />
        <Startjourney />
      </main>
      <Footer />
    </div>
  );
}
