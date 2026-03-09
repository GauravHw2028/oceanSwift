import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import ScrollAnimation from '@/components/sections/ScrollAnimation';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full min-h-screen">
        <Hero />
        <ScrollAnimation />
        <About />
        <Services />
        <Pricing />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
