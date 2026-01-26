import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface Location {
  city: string;
  address?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: BlogContent[];
  featuredImage?: string;
}

export interface BlogContent {
  type: 'heading' | 'paragraph' | 'image' | 'list';
  content: string | string[];
  level?: number;
  imageUrl?: string;
  imageAlt?: string;
}
