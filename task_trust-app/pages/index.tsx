import Hero from "@/component/functional/Hero";
import AboutPreview from "@/component/functional/AboutPreview";
import PackagesSection from "@/component/functional/PackagesSection";
import EmailSubscribe from "@/component/functional/EmailSubscribe";
import ReviewsSection from "@/component/functional/ReviewsSection";
import Navbar from "@/component/layout/Header";
import WhatWedo from "@/component/functional/WhatWedo";

export default function HomePage() {
  return (
    <>
    <div className="">
      <Navbar />
      <main className="mt-16">
        <Hero />
        <AboutPreview />
        <WhatWedo />
        <PackagesSection />
        <ReviewsSection />
        <EmailSubscribe />
        
      </main>
      </div>
    </>
  );
}
