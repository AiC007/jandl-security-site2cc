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
  /**
   * South-west London pages: J&L travels there from Brentwood, so these pages
   * make no response or travel-time promise. The area page drops the same-day
   * survey and 2 to 4 hour FAQs, the same-day and 24/7 feature cards and the
   * same-day line in the call to action; the agent markdown drops the 24/7 line.
   */
  noTimePromises?: boolean;
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