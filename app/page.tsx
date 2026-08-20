import Hero from "@/Components/Home/Hero";
import Exploremore from "@/Components/Home/exploremore";
import MomentsMotion from "@/Components/Home/momentsmotion";
import Startjourney from "@/Components/Home/startjourney";
import Chooseus from "@/Components/Home/chooseus";
import BuildYourOwn from "@/Components/Home/buildyourown";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />

      <Exploremore />

      <MomentsMotion />

      <Startjourney />

      <Chooseus />

      <BuildYourOwn />
    </main>
  );
}