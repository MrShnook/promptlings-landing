import Link from "next/link";
import Image from "next/image";

const pageLinks = [
  { href: "/#programs", label: "Programs" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const socialLinks = [
  { label: "Facebook", icon: "📘" },
  { label: "Instagram", icon: "📷" },
  { label: "TikTok", icon: "🎵" },
  { label: "YouTube", icon: "▶️" },
  { label: "LinkedIn", icon: "💼" },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-violet/10 relative z-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/img/logo-1.webp"
                alt="Promptlings — AI Literacy for Kids"
                width={140}
                height={76}
                className="h-7 w-auto opacity-80 hover:opacity-100 transition-opacity"
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
            {socialLinks.map((social) => (
              <button
                key={social.label}
                className="w-9 h-9 rounded-full bg-navy/50 border border-glass-border flex items-center justify-center text-sm hover:border-violet-glow/50 hover:bg-violet/10 transition-all"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-violet/10 text-center">
          <p className="text-white-dim/60 text-xs">
            © {new Date().getFullYear()} Promptlings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
