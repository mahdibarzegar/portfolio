"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const socialLinks = [
  { icon: Github, href: "https://github.com/mahdibarzegar", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
];

const footerLinks = {
  "دسترسی سریع": [
    { href: "#home", label: "خانه" },
    { href: "#about", label: "درباره من" },
    { href: "#projects", label: "نمونه‌کارها" },
    { href: "#contact", label: "تماس" },
  ],
  خدمات: [
    { href: "#", label: "طراحی سایت" },
    { href: "#", label: "توسعه وب" },
    { href: "#", label: "نرم‌افزار ویندوز" },
    { href: "#", label: "طراحی UI/UX" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background-secondary/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <Container size="xl" className="relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo />
            <p className="text-foreground-muted mt-4 max-w-md leading-relaxed">
              طراح و توسعه‌دهنده وب و نرم‌افزارهای ویندوز. ساخت پروژه‌های
              حرفه‌ای با کیفیت و سرعت بالا.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-card hover:bg-accent border border-border flex items-center justify-center text-foreground-muted hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-muted hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground-muted">
            © {new Date().getFullYear()} مهدی برزگر. تمامی حقوق محفوظ است.
          </p>
          <p className="text-sm text-foreground-muted flex items-center gap-2">
            ساخته شده با
            <span className="text-red-500">❤️</span>و
            <span className="text-accent font-medium">Next.js</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
