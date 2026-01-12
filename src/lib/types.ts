// src/lib/types.ts
export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  photo: string;
  schedule: string;
  rating: number;
  patients: number;
  education: string;
  experience: string;
}

export interface Service {
  icon: any;
  title: string;
  description: string;
  color: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}

export interface MCUPackage {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

export interface RoomType {
  type: string;
  price: string;
  features: string[];
  available: number;
  image: string;
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}