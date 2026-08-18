"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Projects } from "@/components/sections/Projects";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden flex items-center pt-20"
      >
        {/* ============================================ */}
        {/* پس‌زمینه ویدیویی با ویدیوی اسب در حال تاخت */}
        {/* ============================================ */}
        <div className="absolute inset-0 z-0">
          {/* ویدیوی پس‌زمینه */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
            {/* متن جایگزین برای مرورگرهای قدیمی */}
            Your browser does not support the video tag.
          </video>

          {/* لایه تیره‌تر برای خوانایی کامل متن */}
          <div className="absolute inset-0 bg-black/60" />

          {/* لایه محوکننده لبه‌ها (Vignette) - حفظ افکت قبلی */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background opacity-80" />

          {/* الگوی نقطه‌ای (اختیاری - برای حفظ یکدستی با قبل) */}
          <div className="absolute inset-0 dot-pattern opacity-10" />
        </div>
        {/* ============================================ */}
        {/* پایان بخش پس‌زمینه ویدیویی */}
        {/* ============================================ */}

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge - با پیام جدید و هماهنگ با تم اسب */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm text-foreground-muted">
                🚀 پیش به سوی تحول دیجیتال
              </span>
            </motion.div>

            {/* Title - جدید با تم تغییر و پیشرفت */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.4] md:leading-[1.3]"
            >
              پیش به سوی تغییر در
              <br />
              <span className="text-gradient">کسب و کار شما</span>
            </motion.h1>

            {/* Subtitle - با لحن قدرتمند و مشاوره‌ای */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base md:text-lg text-foreground-muted mb-10 max-w-xl mx-auto leading-relaxed"
            >
              من{" "}
              <span className="text-foreground font-semibold">مهدی برزگر</span>{" "}
              هستم. با{" "}
              <span className="text-accent font-medium">
                طراحی سایت‌های مدرن
              </span>{" "}
              و{" "}
              <span className="text-accent font-medium">
                توسعه نرم‌افزارهای ویندوز
              </span>
              ،
              <br />
              ایده‌های شما را به ابزاری قدرتمند برای رشد و تحول کسب‌وکارتان
              تبدیل می‌کنم.
            </motion.p>

            {/* CTA Buttons - با متن‌های اقدام‌محورتر */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium shadow-lg glow hover:bg-accent-hover transition-colors"
              >
                درخواست مشاوره
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-7 py-3.5 rounded-full font-medium hover:bg-card-hover transition-colors backdrop-blur-xl"
              >
                نمونه‌کارهای من
              </motion.a>
            </motion.div>

            {/* Stats - با اعداد واقعی‌تر (قابل تغییر) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  +۵۰
                </div>
                <div className="text-sm text-foreground-muted mt-2">
                  پروژه موفق
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  +۵
                </div>
                <div className="text-sm text-foreground-muted mt-2">
                  سال تجربه
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  ۱۰۰٪
                </div>
                <div className="text-sm text-foreground-muted mt-2">
                  رضایت مشتری
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator - بدون تغییر */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-foreground-muted flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-foreground-muted rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Sections بعدی - بدون هیچ تغییری */}
      <SkillsMarquee />
      <About />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
