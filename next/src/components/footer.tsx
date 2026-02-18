import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const pageLinks = [
  { href: "/#programs", label: "Programs" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund", label: "Refund Policy" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "TikTok", icon: TikTokIcon, href: "#" },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-violet/10 relative z-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/logos/promptlings-wordmark.svg"
                alt="Promptlings"
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white-dim text-sm hover:text-violet-glow transition-colors no-underline"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:hello@promptlings.ai"
              className="text-white-dim text-sm hover:text-violet-glow transition-colors no-underline"
            >
              hello@promptlings.ai
            </a>
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-navy/50 border border-glass-border flex items-center justify-center hover:border-violet-glow/50 hover:bg-violet/10 transition-all"
                  aria-label={social.label}
                  title={social.label}
                >
                  <IconComponent className="w-4 h-4 text-white-dim" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Legal links + Copyright */}
        <div className="mt-8 pt-6 border-t border-violet/10 flex flex-col items-center gap-3">
          <nav className="flex flex-wrap justify-center gap-1 text-white-dim/50 text-xs">
            {legalLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-1">
                {i > 0 && <span className="mx-1.5">|</span>}
                <Link
                  href={link.href}
                  className="hover:text-violet-glow transition-colors no-underline"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
          <p className="text-white-dim/60 text-xs">
            &copy; {new Date().getFullYear()} Promptlings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
