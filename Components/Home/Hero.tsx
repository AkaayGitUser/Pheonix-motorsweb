"use client";

import { useRouter } from "next/navigation";
import Header from "./../../app/layout/header";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/Hero.png')",
        font:"Neurial Grotesk"
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col align-top items-center justify-top md:justify-center min-h-screen px-6 py-50 ">
        <h1 className="text-white text-xl md:text-4xl  md:text-center md:mt-[-220] -mt-10  ">
          Your Next Adventure Starts in Style.
        </h1>
      </div>
      <div className="md:flex md:justify-center flex justify-center -mt-22 md:mt-0">
  <button
    onClick={() => router.push("/book")}
    className="border border-white text-sm mb-10 text-white w-52 h-10 hover:bg-white hover:text-black transition duration-200 z-10"
  >
    Start Your Adventure
  </button>
</div>
    </section>
  );
}