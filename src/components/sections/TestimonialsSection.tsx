'use client';

import { Star } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  const { darkMode } = useTheme();

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Testimoni <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">Pasien</span>
        </h2>
        <p className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
          Kepercayaan dan kepuasan pasien adalah prioritas kami
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testi, index) => (
          <div key={index} className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}>
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(testi.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            
            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-6 italic`}>"{testi.text}"</p>
            
            <div className="border-t border-slate-200 pt-4">
              <p className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>{testi.name}</p>
              <p className="text-teal-600 text-sm">{testi.service}</p>
              <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'} text-xs mt-1`}>{testi.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
