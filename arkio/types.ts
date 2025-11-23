import { ReactNode } from "react";

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ProcessStep {
  day: string;
  title: string;
  items: string[];
}

export interface ComparisonRow {
  criteria: string;
  classic: string;
  freelance: string;
  arkio: string;
  isArkioBest?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  result: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
