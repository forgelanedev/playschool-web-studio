export type CategoryFilter = 'all' | 'montessori' | 'vibrant' | 'daycare' | 'boutique' | 'stem';

export interface SchoolProgram {
  title: string;
  age: string;
  desc: string;
  iconName: string;
}

export interface ParentReview {
  quote: string;
  parentName: string;
  childInfo: string;
}

export interface SchoolConcept {
  id: number;
  name: string;
  category: 'montessori' | 'vibrant' | 'daycare' | 'boutique' | 'stem';
  categoryLabel: string;
  tagline: string;
  heroHeadline: string;
  ageGroup: string;
  primaryColor: string;
  accentColor: string;
  gradient: string;
  badge: string;
  features: string[];
  admissionsStatus: string;
  location: string;
  keyStats: { label: string; value: string }[];
  programs: SchoolProgram[];
  facilities: string[];
  parentReview: ParentReview;
  conceptDescription: string;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: number;
  deliveryTime: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  whatsappMessage: string;
}
