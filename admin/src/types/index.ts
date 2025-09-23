// Types for the admin panel

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: string;
  updatedAt: string;
}

export interface HeroContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  order: number;
  isActive: boolean;
  features?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface AboutContent {
  id: string;
  section: 'hero' | 'content' | 'goals' | 'services' | 'mobile-app';
  title?: string;
  content: string;
  image?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ContactInfo {
  id: string;
  type: 'email' | 'phone' | 'address' | 'social';
  label: string;
  value: string;
  icon?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ContentBlock {
  id: string;
  section: string;
  title: string;
  content: string;
  image?: string;
  imagePosition: 'left' | 'right';
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CompanyInfo {
  id: string;
  name: string;
  slogan: string;
  description: string;
  logo?: string;
  favicon?: string;
  address?: string;
  phone?: string;
  email?: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface MediaFile {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  alt?: string;
  uploadedBy: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface DashboardStats {
  totalUsers: number;
  totalServices: number;
  totalProducts: number;
  totalFAQs: number;
  totalClients: number;
  recentActivity: Activity[];
}

export interface Activity {
  id: string;
  type: 'create' | 'update' | 'delete';
  entity: string;
  entityId: string;
  userId: string;
  userName: string;
  timestamp: string;
  changes?: Record<string, any>;
}
