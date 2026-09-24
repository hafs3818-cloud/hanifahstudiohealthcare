import Link from "next/link";
import { Check, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "./data";

const aboutImage =
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4f9468b37146.jpg";

const values = [
  {
    title: "Patients before paperwork",
    description:
      "We built Cedar Health to spend more time with you, not your chart. Most visits run thirty minutes, not ten.",
  },
  {
    title: "Local roots, local care",
    description:
      "Our doctors and nurses live here. We coach the youth soccer league, shop at the farmers market, and care about this place.",
  },
  {
    title: "Honest answers, every time",
    description:
      "If a test is unnecessary, we will tell you. If a specialist is the right move, we will say so. No upselling, no surprises.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl shadow-primary/15">
              <img
                src={aboutImage}
                alt="Inside the Cedar Health Clinic reception and waiting area"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Founder quote card */}
            <div className="absolute -bottom-8 right-4 lg:right-8 max-w-xs bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <Quote className="w-6 h-6 mb-3 text-accent" />
              <p className="text-sm leading-relaxed font-medium">
                "We never set out to be the biggest clinic in town. We set out
                to be the one families trust."
              </p>
              <p className="mt-3 text-xs uppercase tracking-wider opacity-75">
                Dr. Robert Cedar, founder
              </p>
            </div>

            {/* Years badge */}
            <div className="absolute -top-5 -left-3 lg:-left-6 bg-accent text-accent-foreground rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-3xl font-bold leading-none">40+</p>
              <p className="text-xs mt-1 opacity-90">years caring for Cedar Grove</p>
            </div>
          </div>

          {/* Copy side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent">
              Our story
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              A clinic built by neighbors, for neighbors
            </h2>
            <div className="mt-6 space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
              <p>
                Back in 1984, Dr. Robert Cedar opened a small family practice
                on Cedar Ridge Avenue with two exam rooms and one part time
                nurse. The first patient was a kid from down the street who
                needed stitches after a bike crash. Word got around. By the
                end of that first year, three hundred families had signed on.
              </p>
              <p>
                Forty years later we are still on the same street, though the
                building has grown a bit. We have eighteen physicians and nurse
                practitioners covering family medicine, pediatrics, cardiology,
                women&apos;s health, mental health, and an on site lab. What
                has not changed is the way we treat people. You will be seen on
                time. You will be listened to. And you will leave knowing what
                comes next.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {values.map((value) => (
                <div key={value.title} className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-primary/30 text-primary hover:bg-primary/5"
                size="lg"
              >
                <Link href="#doctors">
                  Meet our team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-background rounded-2xl border border-border p-6 lg:p-8 text-center hover:shadow-lg hover:shadow-primary/10 transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
