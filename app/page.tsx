import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import Quote from "@/components/Quote";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <UseCases />
      <Quote />
      <Features />
      <Pricing />

    </main>
  );
}
