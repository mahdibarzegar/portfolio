"use client";

import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, Code2, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "مشاوره و تحلیل",
    description:
      "با شما جلسه‌ای برگزار می‌کنیم تا نیازها، اهداف و ایده‌هایتان را کاملاً بشناسیم",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "طراحی و برنامه‌ریزی",
    description:
      "استراتژی، وایرفریم و طراحی رابط کاربری را با دقت آماده می‌کنم",
  },
  {
    number: "03",
    icon: Code2,
    title: "توسعه و پیاده‌سازی",
    description:
      "با بهترین تکنولوژی‌ها و استانداردها، پروژه را با کیفیت اجرا می‌کنم",
  },
  {
    number: "04",
    icon: Rocket,
    title: "تحویل و پشتیبانی",
    description:
      "پروژه تست شده، بهینه‌سازی شده و در زمان مقرر تحویل داده می‌شود",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

      <Container className="relative">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-accent font-medium mb-3 tracking-wider uppercase"
          >
            Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-gradient">فرایند</span> همکاری با من
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground-muted leading-relaxed"
          >
            از ایده اولیه تا اجرای نهایی، در هر مرحله در کنار شما هستم
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Number Badge */}
                  <div className="relative mb-6 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-2xl glow"
                    >
                      <Icon className="w-10 h-10 text-white" />
                      {/* Number */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                        <span className="text-sm font-bold text-accent">
                          {step.number}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
