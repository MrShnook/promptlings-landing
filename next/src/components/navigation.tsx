"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/#programs", label: "Programs" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/85 backdrop-blur-[20px] shadow-[0_1px_0_rgba(124,58,237,0.2)]"
          : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo — SVG wordmark: terminal icon + "Promptlings" */}
        <Link href="/" className="flex items-center no-underline mr-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logos/promptlings-nav.svg"
            alt="Promptlings"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white-dim text-sm font-medium tracking-wide hover:text-cosmic-white transition-colors relative group no-underline"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-glow transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <Button
              asChild
              className="bg-gradient-to-br from-violet to-[#5B21B6] text-white border border-violet-glow/30 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all tracking-wider uppercase text-xs font-semibold"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              <Link href="/#waitlist">Join Waitlist</Link>
            </Button>
          </li>
        </ul>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-cosmic-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-navy-deep/95 backdrop-blur-[20px] border-glass-border"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col items-center gap-2 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-cosmic-white text-lg font-medium hover:text-violet-glow transition-colors no-underline w-full text-center py-3 min-h-[44px] flex items-center justify-center"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-br from-violet to-[#5B21B6] text-white border border-violet-glow/30 shadow-[0_0_20px_rgba(124,58,237,0.3)] tracking-wider uppercase text-xs font-semibold mt-4 w-full mx-6"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                <Link href="/#waitlist" onClick={() => setOpen(false)}>
                  Join Waitlist
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
