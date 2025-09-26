export const metadata = {
  title: "Seamless Technology",
  description: "Seamless Technology and Consultancy PLC",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Services from "@/components/services";
import OurBlogs from "@/components/our-blog";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Contact from "@/components/contact-us";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Services />
      <OurBlogs />
      {/* <Testimonials /> */}
      <Contact />
      <Cta />
    </>
  );
}
