This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 📘 مستند پروژه رزومه شخصی - مهدی برزگر

## 🎯 هدف پروژه

ساخت یک سایت رزومه شخصی حرفه‌ای برای معرفی به عنوان:

- طراح و توسعه‌دهنده وب
- برنامه‌نویس نرم‌افزارهای ویندوز
- برای بازار هدف: کارفرمای عمومی (مثل شهر بانه)

## 👤 مشخصات

- **نام:** مهدی برزگر
- **GitHub:** mahdibarzegar
- **Repository:** https://github.com/mahdibarzegar/portfolio

## 💻 محیط توسعه

- **سیستم عامل:** Windows
- **مسیر پروژه:** `D:\FinalProject\portfolio\portfolio`
- **Node.js:** نصب شده
- **Git:** نصب شده و متصل به GitHub با SSH Key

---

## 🏗️ Tech Stack

| بخش             | تکنولوژی                               |
| --------------- | -------------------------------------- |
| Framework       | Next.js 15 (App Router)                |
| زبان            | TypeScript                             |
| Styling         | Tailwind CSS v4                        |
| Animation       | Framer Motion                          |
| Icons           | react-icons (Fa, Si) + lucide-react    |
| Particles       | @tsparticles/react + @tsparticles/slim |
| Utilities       | clsx + tailwind-merge                  |
| Font (Persian)  | Vazirmatn                              |
| Hosting         | Vercel                                 |
| Version Control | GitHub                                 |

## 📦 پکیج‌های نصب شده

```bash
npm install framer-motion lucide-react clsx tailwind-merge
npm install react-icons
npm install @tsparticles/react@3.0.0 @tsparticles/slim@3.7.1 @tsparticles/engine@3.7.1
```

#### ✅ فاز 5B: Projects Section

- فایل داده `data/projects.ts` (6 پروژه نمونه)
- کامپوننت ProjectCard با:
  - Featured badge
  - گرادیان بر اساس دسته
  - Hover overlay با 3 دکمه
- Filter Tabs (همه، طراحی سایت، نرم‌افزار ویندوز، UI/UX، موبایل)
- Grid Responsive (3-2-1 ستون)
- انیمیشن ورود کارت‌ها
- CTA "مشاهده همه پروژه‌ها"

### ✅ فاز 6: اتصال فرم به Resend

- پکیج `resend` نصب شد
- فایل `.env.local` با RESEND_API_KEY, CONTACT_EMAIL, FROM_EMAIL
- API Route: `app/api/contact/route.ts`
  - Rate limiting (3 request/hour per IP)
  - Server-side validation
  - Resend integration
  - قالب HTML زیبا با گرادیان
- بروزرسانی handleSubmit در Contact section
- نمایش پیام خطا
- Environment Variables در Vercel ست شد

## ✅ فاز 7: صفحه All Projects (`/projects`)

- `app/projects/page.tsx` (Server Component + Metadata)
- `app/projects/AllProjectsClient.tsx` (Client Component)
- ویژگی‌ها:
  - Search real-time (title, description, tech, category)
  - Category filter (5 گزینه)
  - Sort (newest, oldest, featured)
  - Clear all filters
  - Empty state زیبا
  - Breadcrumb navigation
  - Back to Home CTA
- بروزرسانی لینک‌های Header و Footer به `/projects`
