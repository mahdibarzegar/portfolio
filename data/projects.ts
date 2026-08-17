export type ProjectCategory = "web" | "windows" | "mobile" | "ui";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: string;
  technologies: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "shop-website",
    title: "فروشگاه آنلاین موبایل",
    description:
      "طراحی و توسعه فروشگاه آنلاین با قابلیت‌های کامل مدیریت محصولات، سبد خرید و پرداخت آنلاین",
    category: "web",
    categoryLabel: "طراحی سایت",
    image: "/project/shop-website.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    year: 2024,
  },
  {
    id: "2",
    slug: "accounting-app",
    title: "نرم‌افزار حسابداری",
    description:
      "نرم‌افزار جامع حسابداری ویندوز برای کسب و کارهای کوچک و متوسط با گزارش‌گیری کامل",
    category: "windows",
    categoryLabel: "نرم‌افزار ویندوز",
    image: "/project/accounting-app.webp",
    technologies: ["C#", ".NET", "WPF", "SQL Server"],
    featured: true,
    year: 2024,
  },
  {
    id: "3",
    slug: "restaurant-website",
    title: "سایت رستوران زنجیره‌ای",
    description:
      "طراحی مدرن سایت رستوران با سیستم رزرو آنلاین و منوی دیجیتال چند شعبه",
    category: "web",
    categoryLabel: "طراحی سایت",
    image: "/project/restaurant-website.webp",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    featured: true,
    liveUrl: "#",
    year: 2024,
  },
  {
    id: "4",
    slug: "dashboard-ui",
    title: "داشبورد مدیریت SaaS",
    description:
      "طراحی رابط کاربری داشبورد حرفه‌ای برای پلتفرم SaaS با نمودارهای تعاملی",
    category: "ui",
    categoryLabel: "طراحی UI/UX",
    image: "/project/dashboard-ui.webp",
    technologies: ["Figma", "Design System", "Prototyping"],
    featured: false,
    year: 2023,
  },
  {
    id: "5",
    slug: "inventory-system",
    title: "سیستم مدیریت انبار",
    description:
      "نرم‌افزار مدیریت انبار با بارکد و QR کد برای فروشگاه‌های زنجیره‌ای",
    category: "windows",
    categoryLabel: "نرم‌افزار ویندوز",
    image: "/project/inventory-system.webp",
    technologies: ["C#", ".NET", "Barcode Scanner"],
    featured: true,
    year: 2023,
  },
  {
    id: "6",
    slug: "landing-page",
    title: "لندینگ پیج استارتاپ",
    description:
      "لندینگ پیج مدرن و پرسرعت برای استارتاپ فناوری با انیمیشن‌های خیره‌کننده",
    category: "web",
    categoryLabel: "طراحی سایت",
    image: "/project/landing-page.webp",
    technologies: ["Next.js", "GSAP", "Three.js"],
    featured: false,
    liveUrl: "#",
    year: 2023,
  },

  {
    id: "7",
    slug: "new-project",
    title: "پروژه جدید",
    description: "توضیحات...",
    category: "web",
    categoryLabel: "طراحی سایت",
    image: "/project/new-project.webp",
    technologies: ["Next.js", "TypeScript"],
    featured: true,
    liveUrl: "https://amlaknovin.com",
    githubUrl: "https://github.com/...",
    year: 2024,
  },
];
export const categories = [
  { id: "all", label: "همه" },
  { id: "web", label: "طراحی سایت" },
  { id: "windows", label: "نرم‌افزار ویندوز" },
  { id: "ui", label: "طراحی UI/UX" },
  { id: "mobile", label: "اپلیکیشن موبایل" },
] as const;
