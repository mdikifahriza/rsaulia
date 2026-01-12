'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { services } from '@/lib/data';

export default function ServicesGrid() {
  const { darkMode } = useTheme();

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}>
            <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>{service.title}</h3>
            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-6`}>{service.description}</p>
            <div className="space-y-2">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{feature}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 text-teal-600 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
              <span>Selengkapnya</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
