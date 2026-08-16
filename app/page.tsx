"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden flex items-center pt-20"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Gradient Blobs */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 -left-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 right-40 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground-muted">
                آماده همکاری در پروژه‌های جدید
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              طراح و توسعه‌دهنده
              <br />
              <span className="text-gradient">وب و نرم‌افزار</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-foreground-muted mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              من مهدی برزگر هستم. سایت‌های مدرن، سریع و حرفه‌ای می‌سازم. از
              طراحی رابط کاربری تا توسعه نرم‌افزارهای ویندوز، همه‌چیز را با
              کیفیت تحویل می‌دهم.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium shadow-lg glow hover:bg-accent-hover transition-colors"
              >
                مشاهده نمونه‌کارها
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-4 rounded-full font-medium hover:bg-card-hover transition-colors"
              >
                تماس با من
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  +50
                </div>
                <div className="text-sm text-foreground-muted mt-1">
                  پروژه موفق
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  +5
                </div>
                <div className="text-sm text-foreground-muted mt-1">
                  سال تجربه
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  100%
                </div>
                <div className="text-sm text-foreground-muted mt-1">
                  رضایت مشتری
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Skills Marquee */}
      <SkillsMarquee />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Placeholder for next phases */}
      <section id="projects" className="min-h-screen flex items-center">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">نمونه‌کارها</span>
            </h2>
            <p className="text-foreground-muted">
              این بخش در فاز 5B ساخته می‌شود...
            </p>
          </div>
        </Container>
      </section>

      <section id="contact" className="min-h-screen flex items-center">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">تماس با من</span>
            </h2>
            <p className="text-foreground-muted">
              این بخش در فاز 5C ساخته می‌شود...
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
