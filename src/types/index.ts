export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContentBlock {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
}

export interface CompanyInfo {
  name: string;
  slogan: string;
  description: string;
}
