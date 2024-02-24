/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import BlogSection from "@/components/landingPage/BlogSection";
import { CertificateSetion } from "@/components/landingPage/CertificateSetion";
import ContentSection from "@/components/landingPage/ContentSection";
import CtaSection from "@/components/landingPage/CtaSection";
import HeroSection from "@/components/landingPage/HeroSection";
import ProjectsSection from "@/components/landingPage/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
          <ProjectsSection />
      <div className="h-[100%] w-[100%] relative">
        <div className="relative">
          {/* <div className="flex h-[80%] m-auto mt-32 w-[80%] border-2 border-white">
            <div className="flex justify-center flex-col items-center w-[50%] h-full">

            </div>
            <div className="justify-center items-center hidden md:flex w-[50%] h-full">

          <img src="/mockup.png" className="object-contain" />
            </div>

          </div> */}
          
        
        
        </div>
      </div>
      <section className="relative h-[40vh]">
          <div className="absolute top-0 left-0 h-[40%] bg-black w-full">

          </div>
          <div className="absolute bottom-0 left-0 h-[60%] bg-white w-full">

          </div>
          <div className="absolute top-0 m-auto left-0 h-[full] w-full">
          <CtaSection />
          </div>
      </section>
      <CertificateSetion />
      <BlogSection />
        <ContentSection />
    </main>
  );
}
