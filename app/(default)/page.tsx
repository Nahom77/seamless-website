export const metadata = {
  title: "Seamless Technology",
  description: "Seamless Technology and Consultancy PLC",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Services from "@/components/services";

import Contact from "@/components/contact-us";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Services />

      {/* <AboutUs /> */}
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
