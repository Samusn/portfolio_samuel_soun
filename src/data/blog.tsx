export type BlogPost = {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  imageUrl: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Swisscom Hackday Insights",
    date: "Nov 2025",
    readTime: "4 min read",
    excerpt:
      "Behind the scenes of building a resilient monitoring dashboard in just 24 hours — from ideation to polished prototype.",
    imageUrl:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Why Apprenticeships Matter",
    date: "Oct 2025",
    readTime: "6 min read",
    excerpt:
      "Reflections on my third year at Swisscom, the lessons learned, and how mentorship accelerates real-world engineering skills.",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Designing Human Interfaces",
    date: "Sep 2025",
    readTime: "5 min read",
    excerpt:
      "Translating complex network automation workflows into approachable UI patterns that teams actually enjoy using.",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
];

