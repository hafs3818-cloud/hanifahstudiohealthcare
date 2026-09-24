import { Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden lg:block bg-primary text-primary-foreground border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+15552184400"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(555) 218-4400</span>
            </a>
            <a
              href="mailto:hello@cedarhealthclinic.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>hello@cedarhealthclinic.com</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon to Fri, 7am to 7pm</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80">
              Now accepting new patients across Cedar Grove
            </span>
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-primary-foreground/15">
              <a
                href="#"
                aria-label="Cedar Health on Facebook"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Cedar Health on Instagram"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Cedar Health on Twitter"
                className="hover:text-accent transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Cedar Health on LinkedIn"
                className="hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
