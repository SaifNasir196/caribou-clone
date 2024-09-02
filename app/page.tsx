import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import Quote from "@/components/Quote";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <UseCases />
      <Quote />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
