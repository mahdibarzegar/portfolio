"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "خانه" },
  { href: "#about", label: "درباره من" },
  { href: "#projects", label: "نمونه‌کارها" },
  { href: "#services", label: "خدمات" },
  { href: "#contact", label: "تماس" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border"
            : "py-5 bg-transparent",
        )}
      >
        <Container size="xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-foreground-muted hover:text-foreground transition-colors rounded-full hover:bg-card"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="hidden md:inline-flex items-center bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors glow-hover"
              >
                شروع همکاری
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-card hover:bg-card-hover transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="relative pt-24 px-6"
            >
              <div className="glass rounded-2xl p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-foreground hover:bg-card-hover rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                  className="pt-3 border-t border-border"
                >
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block bg-accent hover:bg-accent-hover text-white px-4 py-3 rounded-xl text-center font-medium transition-colors"
                  >
                    شروع همکاری
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
