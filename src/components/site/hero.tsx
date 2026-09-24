import Link from "next/link";
import { ArrowRight, Play, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImage =
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c400fe1b89d4.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-background to-background" />
        <div className="absolute top-20 -right-20 w-[36rem] h-[36rem] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left copy */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-soft-pulse absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Now accepting new families in Cedar Grove
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
              Healthcare that feels
              <span className="block text-primary">like family.</span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              For more than forty years, Cedar Health Clinic has cared for
              families across Cedar Grove. Personal attention, same week
              appointments, and doctors who actually remember your name.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7"
              >
                <Link href="#contact">
                  Book a visit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-7 border-primary/30 text-primary hover:bg-primary/5"
              >
                <Link href="#services">
                  <Play className="w-4 h-4 mr-2" />
                  Explore our services
                </Link>
              </Button>
            </div>

            {/* Trust strip */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="flex items-center gap-1 text-accent mb-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-foreground">4.9</p>
                <p className="text-xs text-muted-foreground">
                  Average patient rating
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12k+</p>
                <p className="text-xs text-muted-foreground">
                  Families in our care
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">40+ yrs</p>
                <p className="text-xs text-muted-foreground">
                  Serving Cedar Grove
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
              <img
                src={heroImage}
                alt="Doctor listening to a patient with a stethoscope during a warm consultation"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="hidden sm:block absolute -left-6 lg:-left-10 bottom-10 bg-background rounded-2xl shadow-xl shadow-primary/15 border border-border p-5 max-w-[15rem]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Accredited care
                  </p>
                  <p className="text-xs text-muted-foreground">
                    AAAHC certified since 1998
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="hidden sm:block absolute -right-4 lg:-right-8 top-10 bg-accent text-accent-foreground rounded-2xl shadow-xl p-5 max-w-[12rem]">
              <p className="text-3xl font-bold leading-none">98%</p>
              <p className="text-sm mt-1 leading-snug opacity-90">
                of patients would refer a friend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
