import { TopBar } from "@/components/site/top-bar";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { QuickInfo } from "@/components/site/quick-info";
import { Services } from "@/components/site/services";
import { About } from "@/components/site/about";
import { Doctors } from "@/components/site/doctors";
import { Testimonials } from "@/components/site/testimonials";
import { Appointment } from "@/components/site/appointment";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuickInfo />
        <Services />
        <About />
        <Doctors />
        <Testimonials />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
