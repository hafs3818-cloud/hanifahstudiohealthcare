import { Star, Quote } from "lucide-react";
import { testimonials } from "./data";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Soft accent glow */}
      <div className="absolute top-0 -right-32 w-96 h-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent">
            Why patients stay
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Words from the families we care for
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80 leading-relaxed">
            We are proud of the long relationships we have built. Here is what
            patients say when we ask what keeps them coming back.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-7 lg:p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-accent" />
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>

              <p className="text-base lg:text-lg leading-relaxed text-primary-foreground/95 italic flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 pt-5 border-t border-primary-foreground/15">
                <p className="font-semibold text-primary-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-primary-foreground/70 mt-0.5">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-primary-foreground/70">
            Reviews are collected through our patient survey after each visit.
            We never pay for or edit patient feedback.
          </p>
        </div>
      </div>
    </section>
  );
}
