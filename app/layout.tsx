import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const vazirmatn = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "مهدی برزگر | طراح و توسعه‌دهنده وب",
  description:
    "طراح و توسعه‌دهنده وب و نرم‌افزارهای ویندوز. طراحی سایت‌های مدرن، سریع و حرفه‌ای.",
  keywords: [
    "طراحی سایت",
    "برنامه نویسی",
    "توسعه وب",
    "نرم افزار ویندوز",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Mahdi Barzegar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.variable} font-vazir antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
