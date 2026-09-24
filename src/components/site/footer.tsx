import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const footerServices = [
  { label: "Family Medicine", href: "#services" },
  { label: "Pediatrics", href: "#services" },
  { label: "Cardiology", href: "#services" },
  { label: "Women's Health", href: "#services" },
  { label: "Mental Health", href: "#services" },
  { label: "Lab and Diagnostics", href: "#services" },
];

const footerLinks = [
  { label: "About the clinic", href: "#about" },
  { label: "Meet our doctors", href: "#doctors" },
  { label: "Patient stories", href: "#testimonials" },
  { label: "Book a visit", href: "#contact" },
  { label: "Insurance we accept", href: "#services" },
];

const HANIFAH_LINK = "https://preview-chat-8dbaa95e-ab4d-48e2-9030-1e7c59b14b99.space-z.ai/website-offer";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Top wave accent */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-accent/8 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Top CTA strip */}
        <div className="py-12 lg:py-16 border-b border-primary-foreground/15">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Ready when you are
              </p>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Let us take care of the people who matter most.
              </h2>
              <p className="mt-3 text-primary-foreground/80 max-w-xl">
                New patients welcome every week. Call us or use the booking
                form and our front desk will reach out within one business day.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
              <a
                href="tel:+15552184400"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 font-semibold hover:bg-accent/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (555) 218-4400
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 text-primary-foreground px-6 py-3 font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Book online
              </a>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-12 lg:py-16 grid gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img
              src="/logo.svg"
              alt="Cedar Health Clinic logo"
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-5 text-sm text-primary-foreground/80 leading-relaxed max-w-xs">
              Compassionate family medicine in Cedar Grove since 1984. Same
              week appointments, on site lab, and doctors who actually know
              your name.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our services
            </h3>
            <ul className="mt-5 space-y-3">
              {footerServices.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Quick links
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Visit the clinic
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                <span className="leading-relaxed">
                  418 Cedar Ridge Avenue
                  <br />
                  Cedar Grove, OR 97504
                </span>
              </li>
              <li>
                <a
                  href="tel:+15552184400"
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-accent" />
                  (555) 218-4400
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@cedarhealthclinic.com"
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-accent" />
                  hello@cedarhealthclinic.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                <span className="leading-relaxed">
                  Mon to Fri, 7am to 7pm
                  <br />
                  Saturday 8am to 2pm
                  <br />
                  Closed Sunday
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-primary-foreground/70">
            <p>
              &copy; {new Date().getFullYear()} Cedar Health Clinic. All rights
              reserved.
            </p>
            <span className="hidden sm:inline text-primary-foreground/30">|</span>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-accent transition-colors">
                Patient privacy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Accessibility
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Notice of nondiscrimination
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              Designed By{" "}
              <a
                href={HANIFAH_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent hover:underline underline-offset-4 cursor-pointer"
              >
                hanifah Studio
              </a>
            </p>
            <a
              href="#home"
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
