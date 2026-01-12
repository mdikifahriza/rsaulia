'use client';

import { Truck } from 'lucide-react';

export default function FloatingEmergency() {
  return (
    <a 
      href="https://wa.me/6281260057899"
      className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-red-500 to-rose-600 text-white p-4 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="IGD Darurat"
    >
      <Truck className="w-8 h-8" />
    </a>
  );
}