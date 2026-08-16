"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

// رنگ گرادیان بر اساس دسته
const categoryGradients: Record<string, string> = {
  web: "from-blue-500 to-cyan-500",
  windows: "from-purple-500 to-pink-500",
  ui: "from-orange-500 to-red-500",
  mobile: "from-green-500 to-emerald-500",
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const gradient = categoryGradients[project.category] || categoryGradients.web;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center gap-1 bg-accent text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg backdrop-blur-xl">
            <Star className="w-3 h-3 fill-current" />
            <span>ویژه</span>
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Gradient Background (placeholder for image) */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            gradient,
            "opacity-90",
          )}
        />

        {/* Dot Pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30" />

        {/* Project Title in Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-6xl mb-4 opacity-20">
              {project.category === "web" && "🌐"}
              {project.category === "windows" && "🪟"}
              {project.category === "ui" && "🎨"}
              {project.category === "mobile" && "📱"}
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="View Live"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="View Code"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          <Link href={`/projects/${project.slug}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-accent-hover transition-colors"
            >
              مشاهده جزئیات
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Year */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-accent font-medium">
            {project.categoryLabel}
          </span>
          <span className="text-xs text-foreground-muted">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-foreground-muted mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full bg-background border border-border text-foreground-muted"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-background border border-border text-foreground-muted">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
