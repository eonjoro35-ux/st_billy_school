import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ProgramsPreview from "../components/home/ProgramsPreview";
import WhyUs from "../components/home/WhyUs";
import NewsPreview from "../components/home/NewsPreview";
import Testimonials from "../components/home/Testimonials";
import CTABanner from "../components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProgramsPreview />
      <WhyUs />
      <NewsPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
