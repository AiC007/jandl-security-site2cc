import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('44')) {
    return '+44 ' + cleaned.slice(2, 4) + ' ' + cleaned.slice(4, 8) + ' ' + cleaned.slice(8);
  }
  if (cleaned.startsWith('0')) {
    return '+44 ' + cleaned.slice(1, 3) + ' ' + cleaned.slice(3, 7) + ' ' + cleaned.slice(7);
  }
  return phone;
}

export const COMPANY_INFO = {
  name: "J&L Security",
  tagline: "Alarms, CCTV & Fire Protection — Installed & Maintained Across Essex & Greater London",
  phone: "0204 538 5925",
  phone2: "0208 220 4770",
  whatsapp: "442045385925",
  email: "info@jandlsecurity.co.uk",
  address: "Jubilee House No3, The Drive, Great Warley, Brentwood CM13 3FR",
  website: "https://jandlsecurity.co.uk",
  yearEstablished: "2011",
  serviceAreas: ["Essex", "Greater London", "Kent borders"],
  accreditations: ["SSAIB", "CHAS", "FIA", "BAFE"],
  emergencyHours: "24/7",
  responseTime: "Same day surveys available"
};