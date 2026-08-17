import type { Metadata } from "next";
import { AllProjectsClient } from "./AllProjectsClient";

export const metadata: Metadata = {
  title: "نمونه‌کارها | مهدی برزگر",
  description:
    "مجموعه‌ای از پروژه‌های طراحی سایت، توسعه وب و نرم‌افزار ویندوز که با کیفیت بالا اجرا شده‌اند",
  openGraph: {
    title: "نمونه‌کارها | مهدی برزگر",
    description: "مشاهده تمام پروژه‌های اجرا شده",
  },
};

export default function ProjectsPage() {
  return <AllProjectsClient />;
}
