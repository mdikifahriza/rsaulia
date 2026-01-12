'use client';

import { CheckCircle2 } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { roomTypes } from '@/lib/data';

export default function FacilitiesSection() {
  const { darkMode } = useTheme();

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Kamar <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">Rawat Inap</span>
        </h2>
        <p className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
          Ruang perawatan nyaman dengan fasilitas lengkap untuk kesembuhan optimal
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roomTypes.map((room, index) => (
          <div key={index} className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}>
            <div className="relative h-64">
              <img src={room.image} alt={room.type} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                <span className="font-semibold text-teal-600">{room.available} Tersedia</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>{room.type}</h3>
              <p className="text-teal-600 font-bold text-xl mb-6">{room.price}</p>
              
              <div className="space-y-2 mb-6">
                {room.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-500" />
                    <span className={`${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Reservasi Kamar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
