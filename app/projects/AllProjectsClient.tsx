"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  SlidersHorizontal,
  X,
  FolderOpen,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, categories } from "@/data/projects";
import { cn } from "@/lib/utils";

type SortOption = "newest" | "oldest" | "featured";

export function AllProjectsClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Category Filter
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Search Filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.technologies.some((t) => t.toLowerCase().includes(query)) ||
          p.categoryLabel.toLowerCase().includes(query),
      );
    }

    // Sort
    switch (sortBy) {
      case "newest":
        result.sort((a, b) => b.year - a.year);
        break;
      case "oldest":
        result.sort((a, b) => a.year - b.year);
        break;
      case "featured":
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.year - a.year;
        });
        break;
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const clearFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setSortBy("newest");
  };

  const hasActiveFilters =
    activeCategory !== "all" || searchQuery !== "" || sortBy !== "newest";

  return (
    <div className="pt-32 pb-20 min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <Container size="xl">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-foreground-muted mb-8"
        >
          <Link href="/" className="hover:text-accent transition-colors">
            خانه
          </Link>
          <ArrowRight className="w-3 h-3 rotate-180" />
          <span className="text-foreground">نمونه‌کارها</span>
        </motion.div>

        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            همه <span className="text-gradient">پروژه‌ها</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-muted leading-relaxed"
          >
            مجموعه کاملی از پروژه‌های اجرا شده در طول سال‌های اخیر
          </motion.p>
        </div>

        {/* Search & Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-3xl p-4 md:p-6 mb-8"
        >
          {/* Search Input */}
          <div className="relative mb-4">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در پروژه‌ها..."
              className="w-full bg-background/50 border border-border rounded-2xl pr-12 pl-12 py-3.5 text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-card hover:bg-card-hover flex items-center justify-center transition-colors"
                aria-label="Clear search"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Categories & Sort */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Categories */}
            <div className="flex-1 flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat.id
                      ? "bg-accent text-white shadow-lg"
                      : "bg-card text-foreground-muted hover:text-foreground border border-border hover:border-accent/50",
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-card border border-border hover:border-accent/50 px-4 py-2 rounded-full text-sm text-foreground-muted hover:text-foreground transition-all"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>
                  {sortBy === "newest" && "جدیدترین"}
                  {sortBy === "oldest" && "قدیمی‌ترین"}
                  {sortBy === "featured" && "ویژه"}
                </span>
              </button>

              <AnimatePresence>
                {showFilters && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowFilters(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2 glass rounded-2xl p-2 min-w-[180px] z-50 shadow-xl"
                    >
                      {[
                        { id: "newest", label: "جدیدترین" },
                        { id: "oldest", label: "قدیمی‌ترین" },
                        { id: "featured", label: "پروژه‌های ویژه" },
                      ].map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            setSortBy(option.id as SortOption);
                            setShowFilters(false);
                          }}
                          className={cn(
                            "w-full text-right px-4 py-2.5 rounded-xl text-sm transition-colors",
                            sortBy === option.id
                              ? "bg-accent text-white"
                              : "text-foreground-muted hover:text-foreground hover:bg-card-hover",
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Active Filters Info */}
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-border flex items-center justify-between"
            >
              <p className="text-sm text-foreground-muted">
                <span className="text-accent font-medium">
                  {filteredProjects.length}
                </span>{" "}
                پروژه یافت شد
              </p>
              <button
                onClick={clearFilters}
                className="text-sm text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                پاک کردن فیلترها
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchQuery}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-6">
                <FolderOpen className="w-10 h-10 text-foreground-muted" />
              </div>
              <h3 className="text-2xl font-bold mb-3">پروژه‌ای یافت نشد</h3>
              <p className="text-foreground-muted mb-6 max-w-md mx-auto">
                با فیلترهای انتخاب شده هیچ پروژه‌ای پیدا نکردیم. لطفاً فیلترها
                را تغییر دهید.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full font-medium transition-colors glow"
              >
                <X className="w-4 h-4" />
                پاک کردن همه فیلترها
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back to Home CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-20 pt-12 border-t border-border"
        >
          <p className="text-foreground-muted mb-6">
            آماده‌اید پروژه بعدی را با هم شروع کنیم؟
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-full font-medium transition-colors glow"
            >
              شروع همکاری
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 glass px-7 py-3.5 rounded-full font-medium hover:bg-card-hover transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              بازگشت به خانه
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
