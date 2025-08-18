export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: 'alarms' | 'cctv' | 'fire' | 'access' | 'lighting' | 'other';
  features: string[];
  benefits: string[];
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  county: 'Essex' | 'Greater London' | 'Other';
  postcode: string;
  nearbyAreas: string[];
  landmarks: string[];
}

export interface FormSubmission {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  location?: string;
  honeypot?: string;
  timeSpent: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceLocation {
  service: string;
  location: string;
  slug: string;
  title: string;
  metaDescription: string;
  content: {
    hero: string;
    intro: string;
    benefits: string[];
    included: string[];
    standards: string[];
    localInfo: string;
    faqs: FAQ[];
  };
}