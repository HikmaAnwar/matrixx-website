import { Service, NavigationItem, HeroSection, CompanyInfo } from '@/types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Our Services 01',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '⚙️',
  },
  {
    id: '2',
    title: 'Our Services 02',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: '💡',
  },
  {
    id: '3',
    title: 'Our Services 03',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    icon: '👤',
  },
  {
    id: '4',
    title: 'Our Services 04',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    icon: '❄️',
  },
];

export const HERO_CONTENT: HeroSection = {
  title: 'Innovation that defines trends and designing high-impact',
  subtitle: 'Next-Level Report',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  ctaText: 'Read More',
};

export const COMPANY_INFO: CompanyInfo = {
  name: 'MATRIC',
  slogan: 'Your Company Slogan',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
