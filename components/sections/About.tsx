"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";

const features = [
  {
    icon: Code2,
    title: "کدنویسی تمیز",
    description: "کدهای منظم، خوانا و قابل نگهداری با بهترین استانداردها",
  },
  {
    icon: Palette,
    title: "طراحی مدرن",
    description: "رابط کاربری زیبا، جذاب و کاربرپسند با آخرین ترندهای طراحی",
  },
  {
    icon: Rocket,
    title: "سرعت بالا",
    description: "بهینه‌سازی کامل برای بارگذاری فوق‌سریع و تجربه روان",
  },
  {
    icon: Zap,
    title: "تحویل به‌موقع",
    description: "احترام به زمان شما و تحویل پروژه در زمان توافق شده",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-y-1/2" />

      <Container className="relative">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-accent font-medium mb-3 tracking-wider uppercase"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            چرا <span className="text-gradient">من</span>؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground-muted leading-relaxed"
          >
            من ترکیبی از خلاقیت طراح و دقت برنامه‌نویس هستم. با تجربه در ساخت
            سایت‌های مدرن و نرم‌افزارهای ویندوز، پروژه شما را از ایده تا اجرا
            همراهی می‌کنم.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 group hover:border-accent/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
