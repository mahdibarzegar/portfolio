"use client";

import { motion } from "framer-motion";
import { Globe, Monitor, Smartphone, Layers, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

const services = [
  {
    icon: Globe,
    title: "طراحی سایت",
    description:
      "طراحی و پیاده‌سازی سایت‌های اختصاصی، فروشگاهی و شرکتی با آخرین تکنولوژی‌ها",
    features: ["ریسپانسیو", "سرعت بالا", "SEO فرندلی", "طراحی مدرن"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Monitor,
    title: "نرم‌افزار ویندوز",
    description:
      "توسعه نرم‌افزارهای دسکتاپ حرفه‌ای برای کسب و کارها با کارایی بالا",
    features: [".NET", "C#", "WPF", "دیتابیس"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Layers,
    title: "طراحی UI/UX",
    description:
      "طراحی رابط کاربری زیبا و تجربه کاربری بی‌نظیر برای وب و اپلیکیشن",
    features: ["Figma", "پروتوتایپ", "دیزاین سیستم", "کاربرمحور"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Smartphone,
    title: "اپلیکیشن موبایل",
    description: "توسعه اپلیکیشن‌های موبایل با React Native برای اندروید و iOS",
    features: ["React Native", "کراس پلتفرم", "Native Feel", "سریع"],
    gradient: "from-green-500 to-emerald-500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

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
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-gradient">خدمات</span> من
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground-muted leading-relaxed"
          >
            هر آنچه برای دیجیتالی شدن کسب و کارتان نیاز دارید، اینجاست
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative glass rounded-3xl p-8 overflow-hidden hover:border-accent/50 transition-all cursor-pointer"
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1.5 rounded-full bg-card border border-border text-foreground-muted"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>اطلاعات بیشتر</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
