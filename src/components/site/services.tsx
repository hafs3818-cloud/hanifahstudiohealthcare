import { ArrowUpRight, Check } from "lucide-react";
import { services } from "./data";

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent">
            What we do
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Care for every age, under one roof
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Most families never need to leave Cedar Health. From well child
            visits to heart care to mental health support, our team works
            together so your whole family stays covered by people you trust.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative bg-card rounded-2xl border border-border p-7 lg:p-8 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <a
                  href="#contact"
                  aria-label={`Book an appointment for ${service.title}`}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                  >
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Insurance note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            We accept most major insurance plans, including Medicare and the
            Oregon Health Plan. Unsure about your plan?{" "}
            <a
              href="#contact"
              className="font-medium text-primary underline underline-offset-4 hover:text-accent transition-colors"
            >
              Call our front desk
            </a>{" "}
            and we will check for you.
          </p>
        </div>
      </div>
    </section>
  );
}
