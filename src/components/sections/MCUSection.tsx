'use client';

import { CheckCircle2 } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { mcuPackages } from '@/lib/data';

export default function MCUSection() {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-teal-50 to-cyan-50'} py-20`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Paket <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">Medical Check-Up</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
            Investasi kesehatan terbaik untuk deteksi dini penyakit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mcuPackages.map((pkg, index) => (
            <div 
              key={index} 
              className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${pkg.popular ? 'ring-4 ring-teal-500 scale-105' : ''} relative`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-1.5 rounded-full text-sm font-semibold">
                    Paling Populer
                  </span>
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>{pkg.name}</h3>
              <p className="text-3xl font-bold text-teal-600 mb-6">{pkg.price}</p>
              
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white' : darkMode ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-800'} py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}