import Link from "next/link";
import { GraduationCap, Calendar, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { doctors } from "./data";

export function Doctors() {
  return (
    <section id="doctors" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent">
            Your care team
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Doctors you can actually get to know
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Our physicians do not rotate through. They build relationships that
            last decades. Many of our patients have been seeing the same doctor
            since their kids were small, and now those kids bring their own
            kids in.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {doctors.map((doctor) => (
            <article
              key={doctor.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={doctor.image}
                  alt={`${doctor.name}, ${doctor.role} at Cedar Health Clinic`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground/90">
                    {doctor.role}
                  </p>
                  <h3 className="mt-1 font-serif text-lg lg:text-xl font-bold leading-tight">
                    {doctor.name}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {doctor.bio}
                </p>
                <div className="mt-4 space-y-2 border-t border-border pt-4">
                  <div className="flex items-start gap-2 text-xs text-foreground/80">
                    <GraduationCap className="w-4 h-4 shrink-0 text-primary mt-0.5" />
                    <span>{doctor.education}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-foreground/80">
                    <Calendar className="w-4 h-4 shrink-0 text-primary mt-0.5" />
                    <span>{doctor.experience}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7"
          >
            <Link href="#contact">
              <Calendar className="w-4 h-4 mr-2" />
              Request an appointment with a specific doctor
            </Link>
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Tell us your preference when booking and we will match you with
            the right provider.
          </p>
        </div>
      </div>
    </section>
  );
}
