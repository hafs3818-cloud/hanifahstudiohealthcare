'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "./data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(13,77,51,0.18)] border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center gap-2 group">
            <img
              src="/logo.svg"
              alt="Cedar Health Clinic"
              className="h-12 w-auto transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full shadow-sm"
            >
              <Link href="#contact">
                <CalendarHeart className="w-4 h-4 mr-2" />
                Book an appointment
              </Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm p-0">
                <div className="flex items-center justify-between p-5 border-b border-border">
                  <img
                    src="/logo.svg"
                    alt="Cedar Health Clinic"
                    className="h-10 w-auto"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <nav className="flex flex-col p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3.5 text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary/60 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                    size="lg"
                  >
                      <Link href="#contact" onClick={() => setOpen(false)}>
                        <CalendarHeart className="w-4 h-4 mr-2" />
                        Book an appointment
                      </Link>
                  </Button>
                </nav>
                <div className="px-6 mt-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Cedar Health Clinic</p>
                  <p className="mt-1">418 Cedar Ridge Avenue</p>
                  <p>Cedar Grove, OR 97504</p>
                  <p className="mt-2 text-primary">(555) 218-4400</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
