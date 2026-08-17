"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { FaTelegram, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Container } from "@/components/ui/Container";

const contactInfo = [
  {
    icon: Mail,
    label: "ایمیل",
    value: "your@email.com",
    href: "mailto:your@email.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "شماره تماس",
    value: "0912-345-6789",
    href: "tel:+989123456789",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    label: "موقعیت",
    value: "ایران، شهر شما",
    href: "#",
    gradient: "from-purple-500 to-pink-500",
  },
];

const socialLinks = [
  {
    icon: FaTelegram,
    label: "Telegram",
    href: "https://t.me/yourusername",
    color: "hover:text-[#0088cc]",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/989123456789",
    color: "hover:text-[#25D366]",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/yourusername",
    color: "hover:text-[#E4405F]",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "خطا در ارسال پیام");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "خطای ناشناخته");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

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
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            بیایید <span className="text-gradient">با هم</span> کار کنیم
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground-muted leading-relaxed"
          >
            ایده‌ای برای پروژه دارید؟ همین الان با من در تماس باشید
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group flex items-center gap-4 glass rounded-2xl p-5 hover:border-accent/50 transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground-muted mb-0.5">
                      {info.label}
                    </p>
                    <p
                      className="font-medium text-foreground group-hover:text-accent transition-colors"
                      dir="ltr"
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass rounded-2xl p-5"
            >
              <p className="text-xs text-foreground-muted mb-3">
                من را در شبکه‌های اجتماعی دنبال کنید
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-foreground-muted transition-all ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-foreground-muted mb-2"
                >
                  نام و نام خانوادگی *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="نام شما"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-foreground-muted mb-2"
                >
                  ایمیل *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="email@example.com"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm text-foreground-muted mb-2"
              >
                موضوع *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="موضوع پیام شما"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-foreground-muted mb-2"
              >
                پیام *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                placeholder="پیام خود را بنویسید..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-foreground-muted">
                * پرکردن فیلدها اجباری است
              </p>
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full font-medium shadow-lg glow disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    در حال ارسال...
                  </>
                ) : status === "success" ? (
                  <>✓ ارسال شد</>
                ) : (
                  <>
                    ارسال پیام
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </div>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl text-sm text-center"
              >
                ✅ پیام شما با موفقیت ارسال شد! به‌زودی با شما در تماس خواهم
                بود.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm text-center"
              >
                ❌{" "}
                {errorMessage || "خطا در ارسال پیام. لطفاً دوباره امتحان کنید."}
              </motion.div>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
