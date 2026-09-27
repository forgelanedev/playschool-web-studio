export interface CustomizationOption {
  id: string;
  title: string;
  description: string;
  category: 'content' | 'trust' | 'marketing' | 'operations';
}

export const STARTUP_PLAN = {
  name: "Startup Admission Landing Page",
  badge: "Best Value For School Owners",
  price: 999,
  deliveryTime: "Admissions-Ready & Live",
  description: "A complete, modern, mobile-first website designed specifically to turn neighborhood parents into enrolled students with zero technical hassle.",
  features: [
    "Custom single-page high-converting admissions landing page",
    "100% Mobile-first responsive design (where 85%+ parents browse)",
    "Hero section with admissions call-to-action & WhatsApp triggers",
    "Direct 1-tap WhatsApp admission enquiry buttons",
    "Programs & Age criteria breakdown (Playgroup, Nursery, LKG, UKG, Daycare)",
    "Campus facilities & safety reassurance photo grid",
    "Operating hours, batch timings & Google Maps location embed",
    "Lightning-fast loading speed (under 1.5 seconds on 4G/5G)",
    "Zero hidden fees & free hosting guidance included",
    "Delivered ready to launch & accept admissions"
  ],
  whatsappMessage: "Hi! I am interested in the ₹999 Startup Admission Landing Page package for my play school. Can you share details?"
};

export const CUSTOMIZATION_OPTIONS: CustomizationOption[] = [
  {
    id: 'gallery',
    title: "School Photo & Video Walkthrough Gallery",
    description: "Showcase annual events, splash pool days, soft play gyms, and classroom activities to captivate parents.",
    category: 'content'
  },
  {
    id: 'cctv_hub',
    title: "CCTV Live Stream & Safety Protocol Hub",
    description: "Dedicated safety assurance module highlighting live CCTV app access, sanitization, and verified teacher ratios.",
    category: 'trust'
  },
  {
    id: 'admission_form',
    title: "Online Student Admission Registration Form",
    description: "Allow prospective parents to fill out digital enrollment forms that arrive directly on your phone or email.",
    category: 'operations'
  },
  {
    id: 'local_seo',
    title: "Local Google Maps & Search SEO Boost",
    description: "Optimized metadata so your preschool ranks higher when parents search 'best play school near me'.",
    category: 'marketing'
  },
  {
    id: 'brand_match',
    title: "Custom Brand Styling (Uniform & Logo Colors)",
    description: "Bespoke color palettes, typography, and badges matched identically to your school logo, uniform, and building.",
    category: 'content'
  },
  {
    id: 'prospectus_pdf',
    title: "Downloadable School Prospectus & Fee Brochure",
    description: "A 1-click button allowing parents to view or download your school curriculum and fee structure brochure.",
    category: 'content'
  },
  {
    id: 'reviews_widget',
    title: "Parent Testimonials & Google Reviews Showcase",
    description: "Display verified parent star ratings, quotes, and video snippets to build unbeatable neighborhood trust.",
    category: 'trust'
  },
  {
    id: 'multi_whatsapp',
    title: "Multi-Department WhatsApp Routing",
    description: "Route inquiries to Principal, Admissions Coordinator, or Daycare supervisor based on parent selection.",
    category: 'operations'
  },
  {
    id: 'express_delivery',
    title: "Priority Fast-Track Launch",
    description: "Prioritized development to get your website live quickly ahead of an upcoming admissions open house or flyer campaign.",
    category: 'operations'
  },
  {
    id: 'monthly_updates',
    title: "Monthly Content & Festival Updates Package",
    description: "Send photos of festivals, sports days, and admission notices on WhatsApp anytime for prompt updates.",
    category: 'operations'
  }
];
